import { Timeframe } from '../config/timeframes';
import { PriceType } from '../config/price-types';
import { Instrument } from '../config/instruments';

export interface GenerateUrlsInput {
  instrument: Instrument;
  timeframe: Timeframe;
  startDate: Date;
  endDate: Date;
  priceType: PriceType;
}
