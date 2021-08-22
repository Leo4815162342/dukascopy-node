import { CacheManagerBase } from '../cache-manager';

export interface BufferObject {
  url: string;
  buffer: Buffer;
}

export type NotifyFn = (downloadedUrl: string) => void;

export interface BufferFetcherInput {
  batchSize?: number;
  pauseBetweenBatchesMs?: number; // TODO: use exponential backoff
  notifyOnItemFetchFn?: NotifyFn;
  fetcherFn?: (url: string) => Promise<Buffer>;
  cacheManager?: CacheManagerBase;
  retryCount?: number;
  pauseBetweenRetriesMs?: number;
}
