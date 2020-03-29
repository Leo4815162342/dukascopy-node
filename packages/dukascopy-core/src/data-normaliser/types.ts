import { TimeframeType } from '../config/timeframes';
import { InstrumentType } from '../config/instruments';

export interface NormaliseInput {
  data: number[][];
  timeframe: TimeframeType;
  startTs: number;
  instrument: InstrumentType;
  volumes: boolean;
}
