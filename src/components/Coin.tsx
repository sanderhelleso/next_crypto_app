import { FunctionComponent } from 'react';
import { ICoinInfo } from '../interfaces/market';
import Image from 'next/image';
import Link from 'next/link';

const Coin: FunctionComponent<ICoinInfo> = (props) => {
  const { name, price, description, image } = props;

  return (
    <div className='flex flex-col items-center gap-12'>
      <div className='flex w-[700px] flex-col gap-1 rounded-md border bg-white p-8'>
        <div className='flex items-start justify-between'>
          <div>
            <h6>{name}</h6>
            <h5 className='text-lg font-medium text-indigo-500'>{price} USD</h5>
          </div>
          {!!image && (
            <Image
              src={image}
              alt={'Logo'}
              height={50}
              width={50}
              className='rounded-full border-2'
            />
          )}
        </div>
        {!!description && <p className='mt-4 text-gray-500'>{description}</p>}
      </div>
      <Link href={'/market'}>
        <button>Back to market</button>
      </Link>
    </div>
  );
};

export default Coin;
