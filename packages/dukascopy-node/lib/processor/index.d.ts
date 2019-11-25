import { Instrument, Timeframe, PriceType } from './../index';
import { BufferObject } from '../buffer-fetcher';
declare type ProcessDataInput = {
    instrument: Instrument;
    requestedTimeframe: Timeframe;
    bufferObjects: BufferObject[];
    priceType: PriceType;
    volumes: boolean;
    ignoreFlats: boolean;
};
declare function processData({ instrument, requestedTimeframe, bufferObjects, priceType, volumes, ignoreFlats }: ProcessDataInput): number[][];
export { processData };
