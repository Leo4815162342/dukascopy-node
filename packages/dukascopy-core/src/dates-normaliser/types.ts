import { Instrument, Timeframe } from '../config/types';

export interface NormaliseDatesInput {
  instrument: Instrument;
  startDate: string;
  endDate: string;
  timeframe: Timeframe;
  utcOffset: number;
}
