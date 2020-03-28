import { Instrument } from '../config/types';
import { Timeframe } from '../config/timeframes';
import { PriceType } from '../config/price-types';

export interface GenerateUrlsInput {
  instrument: Instrument;
  timeframe: Timeframe;
  startDate: Date;
  endDate: Date;
  priceType: PriceType;
}
