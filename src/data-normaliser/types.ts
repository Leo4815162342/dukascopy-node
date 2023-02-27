import { TimeframeType } from '../config/timeframes';
import { InstrumentType } from '../config/instruments';
import { VolumeUnitType } from '../config/volume-unit';

export interface NormaliseInput {
  data: number[][];
  timeframe: TimeframeType;
  startTs: number;
  instrument: InstrumentType;
  volumes: boolean;
  volumeUnit: VolumeUnitType;
}
