import { Timeframe } from '../config/timeframes';
import { Instrument } from '../config/instruments';

export interface NormaliseInput {
  data: number[][];
  timeframe: Timeframe;
  startTs: number;
  instrument: Instrument;
  volumes: boolean;
}
