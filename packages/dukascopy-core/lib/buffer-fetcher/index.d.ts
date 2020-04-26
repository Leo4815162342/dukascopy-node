import { NotifyFn, BufferFetcherInput, BufferObject } from './types';
export declare class BufferFetcher {
    batchSize: number;
    pauseBetweenBatchesMs: number;
    useCache: boolean;
    notifyOnItemFetchFn?: NotifyFn;
    constructor({ batchSize, pauseBetweenBatchesMs, useCache, notifyOnItemFetchFn }?: BufferFetcherInput);
    private fetchBufferedData;
    fetch(urls: string[]): Promise<BufferObject[]>;
}
