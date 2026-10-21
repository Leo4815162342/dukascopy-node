import { CacheManagerBase } from '../cache-manager';
import { WafMode } from '../waf';

export interface BufferObject {
  url: string;
  buffer: Buffer;
  isCacheHit?: boolean;
}

export interface BufferFetcherInput {
  batchSize?: number;
  pauseBetweenBatchesMs?: number;
  requestIntervalMs?: number;
  rateLimitRetryCount?: number;
  onItemFetch?: (url: string, buffer: Buffer, isCacheHit: boolean, wafTokenUsed?: boolean) => void;
  onBatchFetch?: (bufferObjects: BufferObject[], isLastBatch: boolean) => Promise<unknown>;
  fetcherFn?: (url: string) => Promise<Buffer>;
  cacheManager?: CacheManagerBase;
  retryCount?: number;
  retryOnEmpty?: boolean;
  failAfterRetryCount?: boolean;
  pauseBetweenRetriesMs?: number;
  wafMode?: WafMode;
  chromePath?: string;
  wafTimeoutMs?: number;
  wafTokenCache?: boolean;
  wafTokenCachePath?: string;
}
