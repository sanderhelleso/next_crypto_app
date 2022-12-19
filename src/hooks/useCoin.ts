import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ICoinInfo } from '../interfaces/market';

const COIN_API_URL = 'https://api.coingecko.com/api/v3/coins';

const useCoin = () => {
  const { id } = useRouter().query;

  const [coin, setCoin] = useState<ICoinInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    loadCoin();
  }, []);

  async function loadCoin() {
    setIsLoading(true);

    try {
      const res = await fetch(`${COIN_API_URL}/${id}`);
      const data = await res.json();

      const coin: ICoinInfo = {
        name: data.name,
        price: data.market_data.current_price['usd'],
      };

      if (!!data.description) coin.description = data.description['en'];
      if (!!data.image) coin.image = data.image.small;

      setCoin(coin);
      console.log(coin);
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  }

  return { isLoading, isError, coin };
};

export default useCoin;
