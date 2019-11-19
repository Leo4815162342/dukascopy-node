/// <reference types="node" />
export declare type BufferObject = {
    url: string;
    buffer: Buffer;
};
interface BufferFetcherInput {
    batchSize?: number;
    batchPauseMs?: number;
    notifyOnItemFetchFn?: (...args: any[]) => any;
}
declare class BuffetFetcher {
    batchSize: BufferFetcherInput['batchSize'];
    batchPauseMs: BufferFetcherInput['batchPauseMs'];
    notifyOnItemFetchFn: BufferFetcherInput['notifyOnItemFetchFn'];
    constructor({ batchSize, batchPauseMs, notifyOnItemFetchFn }?: BufferFetcherInput);
    private fetchBufferedData;
    fetch(urls: string[]): Promise<BufferObject[]>;
}
export { BuffetFetcher };
