import { useEffect, useState } from 'react';
import { ICoin } from '../interfaces/market';
import { addStoredCoins, getStoredCoins } from '../utils';

const COINS_API_URL = 'https://api.coingecko.com/api/v3/coins/list';

const useCoins = () => {
  const [coins, setCoins] = useState<ICoin[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const storedCoins = getStoredCoins();
    if (!!storedCoins) {
      return setCoins(storedCoins);
    }

    loadCoins();
  }, []);

  async function loadCoins() {
    setIsLoading(true);

    try {
      const res = await fetch(COINS_API_URL);
      const data = await res.json();
      setCoins(data.slice(0, 100));
      addStoredCoins(data.slice(0, 100));
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  }

  return { isLoading, isError, coins };
};

export default useCoins;
