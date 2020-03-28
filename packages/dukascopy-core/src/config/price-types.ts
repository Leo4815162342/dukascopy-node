export type PriceType = 'bid' | 'ask';

export type PriceTypes = {
  [key in PriceType]: string;
};

export const priceTypes: PriceTypes = {
  bid: 'bid',
  ask: 'ask'
};
