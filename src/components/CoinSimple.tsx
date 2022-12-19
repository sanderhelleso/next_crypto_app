import { FunctionComponent } from 'react';
import { ICoin } from '../interfaces/market';

const CoinSimple: FunctionComponent<ICoin> = (props) => {
  const { id, symbol, name } = props;

  return <p>{name}</p>;
};

export default CoinSimple;
