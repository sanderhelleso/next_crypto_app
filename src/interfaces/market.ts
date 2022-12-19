export interface ICoin {
  id: string;
  symbol: string;
  name: string;
}

export interface ICoinInfo {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}
