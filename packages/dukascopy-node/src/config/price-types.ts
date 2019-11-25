import { PriceType } from '../types';

export type PriceTypes = {
  [key in PriceType]: number;
};

const priceTypes: PriceTypes = {
  bid: 1,
  ask: 1
};

export { priceTypes };
