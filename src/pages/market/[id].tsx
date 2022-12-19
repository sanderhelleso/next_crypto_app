import Layout from '../../components/Layout';
import useCoin from '../../hooks/useCoin';
import Coin from '../../components/Coin';

export default function MarketCoin() {
  const { coin, isLoading, isError } = useCoin();

  function renderCoin() {
    if (isLoading) return <p>Loading coin...</p>;
    if (isError) return <p>Unable to load coin</p>;
    if (!coin) return null;

    return <Coin key={coin.id} {...coin} />;
  }

  return (
    <Layout
      title={coin?.name ?? 'Coin'}
      description={coin?.description ?? 'Information about coin'}>
      <div>{renderCoin()}</div>
    </Layout>
  );
}
