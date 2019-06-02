import { instruments } from './instruments';

import { timeframes } from './timeframes';
import { priceTypes } from './price-types';

export type HistoryConfig = {
  instrument: keyof typeof instruments;
  dates: {
    start: string;
    end: string;
  };
  timeframe?: keyof typeof timeframes;
  priceType?: keyof typeof priceTypes;
  utcOffset?: number;
  volumes?: boolean;
};
