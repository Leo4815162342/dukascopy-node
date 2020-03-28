import { Timeframe } from '../config/timeframes';
import { PriceType } from '../config/price-types';

export type AggregateInput = {
  data: number[][];
  fromTimeframe: Timeframe;
  toTimeframe: Timeframe;
  priceType: PriceType;
  ignoreFlats: boolean;
};
