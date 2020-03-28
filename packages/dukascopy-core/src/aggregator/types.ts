import { PriceType } from '../config/types';
import { Timeframe } from '../config/timeframes';

export type AggregateInput = {
  data: number[][];
  fromTimeframe: Timeframe;
  toTimeframe: Timeframe;
  priceType: PriceType;
  ignoreFlats: boolean;
};
