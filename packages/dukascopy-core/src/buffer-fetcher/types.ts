export interface BufferObject {
  url: string;
  buffer: Buffer;
}

export type NotifyFn = (downloadedUrl: string) => any;

export interface BufferFetcherInput {
  batchSize?: number;
  pauseBetweenBatchesMs?: number; // TODO: use exponential backoff
  useCache?: boolean;
  notifyOnItemFetchFn?: NotifyFn;
}
