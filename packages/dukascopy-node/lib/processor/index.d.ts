import { HistoryConfig } from './../index';
import { BufferObject } from '../buffer-fetcher';
declare type ProcessDataInput = {
    instrument: HistoryConfig['instrument'];
    requestedTimeframe: HistoryConfig['timeframe'];
    bufferObjects: BufferObject[];
    priceType: HistoryConfig['priceType'];
    volumes: HistoryConfig['volumes'];
    ignoreFlats: HistoryConfig['ignoreFlats'];
};
declare function processData({ instrument, requestedTimeframe, bufferObjects, priceType, volumes, ignoreFlats }: ProcessDataInput): number[][];
export { processData };
