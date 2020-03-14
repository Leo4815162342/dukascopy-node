import { Timeframe, Instrument } from '../config/types';

export interface NormaliseInput {
  data: number[][];
  timeframe: Timeframe;
  startTs: number;
  instrument: Instrument;
  volumes: boolean;
}
