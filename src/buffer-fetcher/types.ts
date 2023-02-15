import { CacheManagerBase } from '../cache-manager';

export interface BufferObject {
  url: string;
  buffer: Buffer;
}

export interface BufferFetcherInput {
  batchSize?: number;
  pauseBetweenBatchesMs?: number;
  onItemFetch?: (url: string, buffer: Buffer, isCacheHit: boolean) => void;
  onBatchFetch?: (bufferObjects: BufferObject[]) => Promise<void>;
  fetcherFn?: (url: string) => Promise<Buffer>;
  cacheManager?: CacheManagerBase;
  retryCount?: number;
  pauseBetweenRetriesMs?: number;
}
