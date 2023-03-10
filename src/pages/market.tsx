import Layout from '../components/Layout';
import useCoins from '../hooks/useCoins';
import { useCallback } from 'react';
import CoinSimple from '../components/CoinSimple';

export default function MarketPrices() {
  const { isLoading, isError, coins } = useCoins();
  const coinsDisplayed = !!coins && !isLoading;

  const renderCoins = useCallback(() => {
    if (!coins) return null;

    return coins.map((coin, index) => (
      <CoinSimple key={coin.id} index={index} coin={coin} />
    ));
  }, [coins]);

  return (
    <Layout title={'Coins'} description={'Market prices of the crypto market'}>
      <div
        className={`${
          !coinsDisplayed ? '' : 'mt-32'
        } flex flex-col items-center gap-2`}>
        <h1>Market Overview</h1>
        <p className='text-gray-500'>
          {!coinsDisplayed
            ? 'Loading coins...'
            : isError
            ? 'Unable to fetch coins...'
            : `Showing ${coins.length} coins`}
        </p>
        <div className='grid grid-cols-3 gap-3 py-8'>{renderCoins()}</div>
      </div>
    </Layout>
  );
}
