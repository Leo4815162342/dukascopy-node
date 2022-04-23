import { TimeframeType } from '../config/timeframes';
import { InstrumentType } from '../config/instruments';

export interface NormaliseDatesInput {
  instrument: InstrumentType;
  startDate: Date;
  endDate: Date;
  timeframe: TimeframeType;
  utcOffset: number;
}
