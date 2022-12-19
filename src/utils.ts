import { ICoin } from './interfaces/market';

export enum LOCALSTORAGE_KEYS {
  COINS = 'coins',
}

export const getStoredCoins = (): ICoin[] | null => {
  const storedCoins = localStorage.getItem(LOCALSTORAGE_KEYS.COINS);
  return !!storedCoins ? JSON.parse(storedCoins) : null;
};

export const addStoredCoins = (coins: ICoin[]) => {
  return localStorage.setItem(LOCALSTORAGE_KEYS.COINS, JSON.stringify(coins));
};
