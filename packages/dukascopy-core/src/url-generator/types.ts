import { Instrument, PriceType } from '../config/types';
import { Timeframe } from '../config/timeframes';

export interface GenerateUrlsInput {
  instrument: Instrument;
  timeframe: Timeframe;
  startDate: Date;
  endDate: Date;
  priceType: PriceType;
}
