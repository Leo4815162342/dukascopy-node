import { CacheManagerBase } from '../cache-manager';

export interface BufferObject {
  url: string;
  buffer: Buffer;
  isCacheHit?: boolean;
}

export interface BufferFetcherInput {
  batchSize?: number;
  pauseBetweenBatchesMs?: number;
  onItemFetch?: (url: string, buffer: Buffer, isCacheHit: boolean) => void;
  onBatchFetch?: (bufferObjects: BufferObject[], isLastBatch: boolean) => Promise<unknown>;
  fetcherFn?: (url: string) => Promise<Buffer>;
  cacheManager?: CacheManagerBase;
  retryCount?: number;
  pauseBetweenRetriesMs?: number;
}
