import { symbols } from './symbols';

import { timeframes } from './timeframes';
import { priceTypes } from './priceTypes';

export type HistoryConfig = {
  symbol: keyof typeof symbols;
  dates: {
    start: Date;
    end: Date;
  };
  timeframe?: keyof typeof timeframes;
  priceType?: keyof typeof priceTypes;
  gmtOffset?: number;
  volumes?: boolean;
};
