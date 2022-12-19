import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout
      title={'Home'}
      description={'App displaying current prices of the crypto market'}>
      <div className='flex flex-col items-center gap-2'>
        <h1>The Crypto Market</h1>
        <p className='mb-8 text-gray-500'>Discover the next crypto gem</p>
        <Link href={'/market'}>
          <button>Explore Market</button>
        </Link>
      </div>
    </Layout>
  );
}
