import { Instrument } from './../index';
import { BufferObject } from '../buffer-fetcher/types';
import { Timeframe } from '../config/timeframes';
import { PriceType } from '../config/price-types';

export interface ProcessDataInput {
  instrument: Instrument;
  requestedTimeframe: Timeframe;
  bufferObjects: BufferObject[];
  priceType: PriceType;
  volumes: boolean;
  ignoreFlats: boolean;
}

export type ProcessDataOutput = number[][];
