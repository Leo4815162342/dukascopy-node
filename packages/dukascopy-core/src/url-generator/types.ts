import { Instrument, PriceType, Timeframe } from '../config/types';

export interface GenerateUrlsInput {
  instrument: Instrument;
  timeframe: Timeframe;
  startDate: Date;
  endDate: Date;
  priceType: PriceType;
}
