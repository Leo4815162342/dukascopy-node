import debug from 'debug';
import { CacheManagerBase } from '../cache-manager';
import { splitArrayInChunks, wait } from '../utils/general';
import { BufferFetcherInput, BufferObject } from './types';
import { URL_ROOT } from '../url-generator';
import {
  createHeadlessWafFetcher,
  DukascopyAccessDeniedError,
  WafChallengeError,
  WafTokenError
} from '../waf';
import { decodeData } from '../waf/data';
import { createRateLimitedRequester, RateLimitError } from './rate-limit';

function logCacheSummary(fileCount: number, cacheHits: number): void {
  debug('dukascopy-node:cache')(
    'Cache hits: %d/%d files; files requiring fetch: %d.',
    cacheHits,
    fileCount,
    fileCount - cacheHits
  );
}

function isMutableDataUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return url.startsWith(URL_ROOT) && parsedUrl.searchParams.has('from');
  } catch {
    return false;
  }
}

function isEmptyDataBuffer(buffer: Buffer): boolean {
  if (buffer.length === 0) {
    return true;
  }

  try {
    const data = JSON.parse(buffer.toString('utf8')) as { times?: unknown[] };
    return Array.isArray(data.times) && data.times.length === 0;
  } catch {
    return false;
  }
}

export class BufferFetcher {
  batchSize: number;
  pauseBetweenBatchesMs: number;
  onItemFetch?: BufferFetcherInput['onItemFetch'];
  onBatchFetch?: BufferFetcherInput['onBatchFetch'];
  fetcherFn;
  retryCount: number;
  retryOnEmpty: boolean;
  pauseBetweenRetriesMs: number;
  failAfterRetryCount: BufferFetcherInput['failAfterRetryCount'];
  cacheManager?: CacheManagerBase;
  private readonly request: (url: string) => Promise<Response>;
  private readonly wasTokenUsed: (response: Response) => boolean | undefined;
  private readonly bufferTokenUsage = new WeakMap<Buffer, boolean>();

  constructor({
    batchSize = 10,
    pauseBetweenBatchesMs = 1000,
    requestIntervalMs,
    rateLimitRetryCount,
    onItemFetch,
    onBatchFetch,
    fetcherFn,
    retryCount = 0,
    retryOnEmpty = false,
    failAfterRetryCount = true,
    pauseBetweenRetriesMs = 500,
    cacheManager,
    wafMode = 'auto',
    chromePath,
    wafTimeoutMs = 60_000,
    wafTokenCache = true,
    wafTokenCachePath
  }: BufferFetcherInput) {
    this.batchSize = batchSize;
    this.pauseBetweenBatchesMs = pauseBetweenBatchesMs;
    this.onItemFetch = onItemFetch;
    this.onBatchFetch = onBatchFetch;
    this.fetcherFn = fetcherFn;
    this.cacheManager = cacheManager;
    this.retryCount = retryCount;
    this.retryOnEmpty = retryOnEmpty;
    this.failAfterRetryCount = failAfterRetryCount;
    this.pauseBetweenRetriesMs = pauseBetweenRetriesMs;
    const transport = createHeadlessWafFetcher({
      mode: wafMode,
      executablePath: chromePath || undefined,
      timeoutMs: wafTimeoutMs,
      tokenCache: wafTokenCache,
      tokenCachePath: wafTokenCachePath
    });
    this.request = createRateLimitedRequester(transport.fetchResponse, {
      requestIntervalMs,
      rateLimitRetryCount
    });
    this.wasTokenUsed = transport.wasTokenUsed;
  }

  private async fetchBatch(urls: string[]): Promise<BufferObject[]> {
    return Promise.all(
      urls.map(async url => {
        let buffer: Buffer;
        let isCacheHit = false;
        if (this.cacheManager && !isMutableDataUrl(url)) {
          const bufferFromCache = await this.cacheManager.readItemFromCache(url);
          if (bufferFromCache?.length) {
            isCacheHit = true;
            buffer = bufferFromCache;
          } else {
            buffer = await this.fetchBuffer(url);
          }
        } else {
          buffer = await this.fetchBuffer(url);
        }
        if (this.onItemFetch) {
          this.onItemFetch(
            url,
            buffer,
            isCacheHit,
            isCacheHit ? undefined : this.bufferTokenUsage.get(buffer)
          );
        }

        return { url, buffer, isCacheHit };
      })
    );
  }

  /**
   * @experimental
   */
  public async fetch_optimized(urls: string[]) {
    let cacheHits = 0;
    const batches = splitArrayInChunks(urls, this.batchSize);
    for (let i = 0, n = batches.length; i < n; i++) {
      const isLastBatch = i === n - 1;
      const batchData = await this.fetchBatch(batches[i]);
      cacheHits += batchData.filter(({ isCacheHit }) => isCacheHit).length;

      let shouldSkipBatchWait = false;

      if (this.cacheManager) {
        let wholeBatchExistsInCache = true;

        for (let j = 0, m = batchData.length; j < m; j++) {
          if (!batchData[j].isCacheHit) {
            wholeBatchExistsInCache = false;
            break;
          }
        }

        shouldSkipBatchWait = wholeBatchExistsInCache;

        await this.cacheManager.writeItemsToCache(
          batchData.filter(({ url, buffer }) => buffer.length > 0 && !isMutableDataUrl(url))
        );
      }

      if (this.onBatchFetch) {
        await this.onBatchFetch(batchData, isLastBatch);
      }

      const shouldWait =
        n > 1 && !isLastBatch && !shouldSkipBatchWait && this.pauseBetweenBatchesMs;

      if (shouldWait) {
        await wait(this.pauseBetweenBatchesMs);
      }
    }

    logCacheSummary(urls.length, cacheHits);
    return true as const;
  }

  public async fetch(urls: string[]): Promise<BufferObject[]> {
    let cacheHits = 0;
    const fetchedObjects: BufferObject[][] = [];

    const batches = splitArrayInChunks(urls, this.batchSize);

    for (let i = 0, n = batches.length; i < n; i++) {
      const isLastBatch = i === n - 1;
      const data = await this.fetchBatch(batches[i]);
      cacheHits += data.filter(({ isCacheHit }) => isCacheHit).length;
      fetchedObjects.push(data);
      let shouldSkipBatchWait = false;

      if (this.cacheManager) {
        let wholeBatchExistsInCache = true;

        for (let j = 0, m = data.length; j < m; j++) {
          if (!data[j].isCacheHit) {
            wholeBatchExistsInCache = false;
            break;
          }
        }

        shouldSkipBatchWait = wholeBatchExistsInCache;
      }

      const shouldWait =
        n > 1 && !isLastBatch && !shouldSkipBatchWait && this.pauseBetweenBatchesMs;

      if (shouldWait) {
        await wait(this.pauseBetweenBatchesMs);
      }
    }

    const bufferObjects = ([] as BufferObject[])
      .concat(...fetchedObjects)
      .filter(({ buffer }) => buffer.length > 0);

    if (this.cacheManager) {
      await this.cacheManager.writeItemsToCache(
        bufferObjects.filter(({ url }) => !isMutableDataUrl(url))
      );
    }

    logCacheSummary(urls.length, cacheHits);
    return bufferObjects;
  }

  private async fetchBuffer(url: string): Promise<Buffer> {
    if (this.fetcherFn) {
      return this.fetcherFn(url);
    }

    let lastBuffer = Buffer.from('', 'utf8');
    let lastError: Error = new Error('Request failed');

    for (let attempt = 0; attempt <= this.retryCount; attempt++) {
      const isLastAttempt = attempt === this.retryCount;

      try {
        const response = await this.request(url);
        if (response.status !== 200) {
          await response.body?.cancel();
          throw new Error(`Request failed with status ${response.status} for ${url}`);
        }
        if (
          !(response.headers.get('content-type') || '').toLowerCase().includes('application/json')
        ) {
          await response.body?.cancel();
          throw new Error(`Expected Dukascopy JSON for ${url}`);
        }
        const buffer = Buffer.from(await response.arrayBuffer());
        const wafTokenUsed = this.wasTokenUsed(response);
        if (wafTokenUsed !== undefined) {
          this.bufferTokenUsage.set(buffer, wafTokenUsed);
        }
        decodeData(url, buffer);
        lastBuffer = buffer;

        const isSuccessful = !this.retryOnEmpty || !isEmptyDataBuffer(lastBuffer);

        if (isSuccessful) {
          return lastBuffer;
        }

        lastError = new Error(`Request returned an empty dataset for ${url}`);
      } catch (error) {
        lastBuffer = Buffer.alloc(0);
        lastError = error instanceof Error ? error : new Error(String(error));
        // Recovery already exhausted its own budget; ordinary retries must not multiply it.
        if (
          error instanceof WafChallengeError ||
          error instanceof WafTokenError ||
          error instanceof DukascopyAccessDeniedError ||
          error instanceof RateLimitError
        ) {
          break;
        }
      }

      if (!isLastAttempt) {
        await wait(this.pauseBetweenRetriesMs);
      }
    }

    if (this.failAfterRetryCount) {
      throw lastError;
    }
    return lastBuffer;
  }
}

export { isEmptyDataBuffer, isMutableDataUrl };
