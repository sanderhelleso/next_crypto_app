import { FunctionComponent } from 'react';
import { ICoin } from '../interfaces/market';
import Link from 'next/link';

interface ICoinProps {
  index: number;
  coin: ICoin;
}

const CoinSimple: FunctionComponent<ICoinProps> = (props) => {
  const { index, coin } = props;
  const { id, name } = coin;

  return (
    <Link href={`/market/${id}`}>
      <div
        tabIndex={index + 1}
        className='rounded-md border bg-white p-4 transition hover:border-indigo-500 hover:shadow-sm'>
        {name}
      </div>
    </Link>
  );
};

export default CoinSimple;
