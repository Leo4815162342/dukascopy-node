import { Timeframe, PriceType } from '../config/types';

export type AggregateInput = {
  data: number[][];
  fromTimeframe: Timeframe;
  toTimeframe: Timeframe;
  priceType: PriceType;
  ignoreFlats: boolean;
};
