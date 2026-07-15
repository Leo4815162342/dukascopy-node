import { TimeframeType } from '../config/timeframes';
import { VolumeUnitType } from '../config/volume-unit';

interface ResponseBase {
  timestamp: number;
  multiplier: number;
  times: number[];
}

export interface TickResponse extends ResponseBase {
  ask: number | null;
  bid: number | null;
  asks: number[];
  bids: number[];
  askVolumes: number[];
  bidVolumes: number[];
}

export interface CandleResponse extends ResponseBase {
  open: number | null;
  high: number | null;
  low: number | null;
  close: number | null;
  shift: number;
  opens: number[];
  highs: number[];
  lows: number[];
  closes: number[];
  volumes: number[];
}

export type DataResponse = TickResponse | CandleResponse;

export interface NormaliseInput {
  data: DataResponse;
  timeframe: TimeframeType;
  volumes: boolean;
  volumeUnits: VolumeUnitType;
}
