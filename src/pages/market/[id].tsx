import Layout from '../../components/Layout';
import useCoin from '../../hooks/useCoin';

export default function MarketCoin() {
  const { coin } = useCoin();

  return (
    <Layout
      title={'Market Prices'}
      description={'Market prices of the crypto market'}>
      <div>{coin.name}</div>
    </Layout>
  );
}
