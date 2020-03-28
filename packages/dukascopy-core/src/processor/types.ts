import { Instrument, Timeframe, PriceType } from './../index';
import { BufferObject } from '../buffer-fetcher/types';

export interface ProcessDataInput {
  instrument: Instrument;
  requestedTimeframe: Timeframe;
  bufferObjects: BufferObject[];
  priceType: PriceType;
  volumes: boolean;
  ignoreFlats: boolean;
}

export type ProcessDataOutput = number[][];
