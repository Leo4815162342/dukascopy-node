import { Timeframe } from '../config/timeframes';
import { Instrument } from '../config/instruments';

export interface NormaliseDatesInput {
  instrument: Instrument;
  startDate: string;
  endDate: string;
  timeframe: Timeframe;
  utcOffset: number;
}
