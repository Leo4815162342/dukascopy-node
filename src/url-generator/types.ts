import { TimeframeType } from '../config/timeframes';
import { PriceType } from '../config/price-types';
import { InstrumentType } from '../config/instruments';

export interface GenerateUrlsInput {
  instrument: InstrumentType;
  timeframe: TimeframeType;
  startDate: Date;
  endDate: Date;
  priceType: PriceType;
  nowDate?: Date;
}
