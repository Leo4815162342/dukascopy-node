import { instruments } from './instruments';

import { timeframes } from './timeframes';
import { priceTypes } from './price-types';

export type HistoryConfig = {
  instrument: keyof typeof instruments;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: keyof typeof timeframes;
  priceType?: keyof typeof priceTypes;
  utcOffset?: number;
  volumes?: boolean;
};
