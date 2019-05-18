import { symbols } from './symbols';

import { timeframes } from './timeframes';
import { priceTypes } from './price-types';

export type HistoryConfig = {
  symbol: keyof typeof symbols;
  dates: {
    start: string;
    end: string;
  };
  timeframe?: keyof typeof timeframes;
  priceType?: keyof typeof priceTypes;
  gmtOffset?: number;
  volumes?: boolean;
};
