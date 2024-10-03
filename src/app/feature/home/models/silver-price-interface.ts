export interface ISilverPrice {
  prices: IPrices[];
  date?: string;
}

export interface IPrices {
  key?: string;
  price?: number;
}
