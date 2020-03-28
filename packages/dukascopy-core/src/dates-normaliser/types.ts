import { Instrument } from '../config/types';
import { Timeframe } from '../config/timeframes';

export interface NormaliseDatesInput {
  instrument: Instrument;
  startDate: string;
  endDate: string;
  timeframe: Timeframe;
  utcOffset: number;
}
