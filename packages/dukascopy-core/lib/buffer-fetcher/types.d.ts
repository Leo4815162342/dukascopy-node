/// <reference types="node" />
export interface BufferObject {
    url: string;
    buffer: Buffer;
}
export declare type NotifyFn = (downloadedUrl: string) => any;
export interface BufferFetcherInput {
    batchSize?: number;
    pauseBetweenBatchesMs?: number;
    useCache?: boolean;
    notifyOnItemFetchFn?: NotifyFn;
}
