import { CacheManagerBase } from '../cache-manager';
import { splitArrayInChunks, wait } from '../utils/general';
import { BufferFetcherInput, BufferObject } from './types';
import { URL_ROOT } from '../url-generator';

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

  constructor({
    batchSize = 10,
    pauseBetweenBatchesMs = 1000,
    onItemFetch,
    onBatchFetch,
    fetcherFn,
    retryCount = 0,
    retryOnEmpty = false,
    failAfterRetryCount = true,
    pauseBetweenRetriesMs = 500,
    cacheManager
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
  }

  private async fetchBatch(urls: string[]): Promise<BufferObject[]> {
    return Promise.all(
      urls.map(async url => {
        let buffer: Buffer;
        let isCacheHit = false;
        if (this.cacheManager && !isMutableDataUrl(url)) {
          const bufferFromCache = await this.cacheManager.readItemFromCache(url);
          if (bufferFromCache) {
            isCacheHit = true;
            buffer = bufferFromCache;
          } else {
            buffer = await this.fetchBuffer(url);
          }
        } else {
          buffer = await this.fetchBuffer(url);
        }
        if (this.onItemFetch) {
          this.onItemFetch(url, buffer, isCacheHit);
        }

        return { url, buffer, isCacheHit };
      })
    );
  }

  /**
   * @experimental
   */
  public async fetch_optimized(urls: string[]) {
    const batches = splitArrayInChunks(urls, this.batchSize);
    for (let i = 0, n = batches.length; i < n; i++) {
      const isLastBatch = i === n - 1;
      const batchData = await this.fetchBatch(batches[i]);

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
          batchData.filter(({ url }) => !isMutableDataUrl(url))
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

    return true as const;
  }

  public async fetch(urls: string[]): Promise<BufferObject[]> {
    const fetchedObjects: BufferObject[][] = [];

    const batches = splitArrayInChunks(urls, this.batchSize);

    for (let i = 0, n = batches.length; i < n; i++) {
      const isLastBatch = i === n - 1;
      const data = await this.fetchBatch(batches[i]);
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

    return bufferObjects;
  }

  private async fetchBuffer(url: string): Promise<Buffer> {
    if (this.fetcherFn) {
      return this.fetcherFn(url);
    }

    let lastBuffer = Buffer.from('', 'utf8');
    let errorMessage = '';

    for (let attempt = 0; attempt <= this.retryCount; attempt++) {
      const isLastAttempt = attempt === this.retryCount;

      try {
        const response = await fetch(url);
        lastBuffer =
          response.status === 200
            ? Buffer.from(await response.arrayBuffer())
            : Buffer.from('', 'utf8');

        const isSuccessful =
          response.status === 200 && (!this.retryOnEmpty || !isEmptyDataBuffer(lastBuffer));

        if (isSuccessful) {
          return lastBuffer;
        }

        if (response.status !== 200) {
          errorMessage = `Request failed with status ${response.status}`;
        } else if (this.retryOnEmpty) {
          errorMessage = 'Request returned an empty dataset';
        }
      } catch (error) {
        errorMessage = error instanceof Error ? error.message : JSON.stringify(error);

        if (this.retryCount === 0) {
          throw error;
        }
      }

      if (!isLastAttempt) {
        await wait(this.pauseBetweenRetriesMs);
      } else if (this.retryCount > 0 && this.failAfterRetryCount) {
        throw new Error(errorMessage || 'Unknown error');
      }
    }

    return lastBuffer;
  }
}

export { isEmptyDataBuffer, isMutableDataUrl };
