export interface ICoin {
  id: string;
  symbol: string;
  name: string;
}

export interface ICoinInfo {
  name: string;
  price: number;
  description?: string;
  image?: string;
}
