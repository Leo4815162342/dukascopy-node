import { symbols } from './symbols';

import { timeframes } from './timeframes';
import { priceTypes } from './priceTypes';

export interface HistoryConfig {
  symbol: keyof typeof symbols;
  dates: {
    start: string;
    end: string;
  };
  timeframe: keyof typeof timeframes;
  priceType?: keyof typeof priceTypes;
  gmtOffset?: number;
  includeVolume?: boolean;
}
