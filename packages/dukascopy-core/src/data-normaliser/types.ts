import { Instrument } from '../config/types';
import { Timeframe } from '../config/timeframes';

export interface NormaliseInput {
  data: number[][];
  timeframe: Timeframe;
  startTs: number;
  instrument: Instrument;
  volumes: boolean;
}
