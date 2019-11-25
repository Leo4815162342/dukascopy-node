/// <reference types="node" />
export declare type BufferObject = {
    url: string;
    buffer: Buffer;
};
export declare type NotifyFn = (...args: any[]) => any;
export interface BufferFetcherInput {
    batchSize?: number;
    batchPauseMs?: number;
    notifyOnItemFetchFn?: NotifyFn;
}
declare class BuffetFetcher {
    batchSize: number;
    batchPauseMs: number;
    notifyOnItemFetchFn: NotifyFn;
    constructor({ batchSize, batchPauseMs, notifyOnItemFetchFn }?: BufferFetcherInput);
    private fetchBufferedData;
    fetch(urls: string[]): Promise<BufferObject[]>;
}
export { BuffetFetcher };
