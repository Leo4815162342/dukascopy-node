import fetch, { Response } from 'node-fetch';
import { CacheManagerBase } from '../cache-manager';
import { splitArrayInChunks, wait } from '../utils/general';
import { BufferFetcherInput, BufferObject } from './types';

export class BufferFetcher {
  batchSize: number;
  pauseBetweenBatchesMs: number;
  onItemFetch?: BufferFetcherInput['onItemFetch'];
  onBatchFetch?: BufferFetcherInput['onBatchFetch'];
  fetcherFn;
  retryCount: number;
  pauseBetweenRetriesMs: number;
  cacheManager?: CacheManagerBase;

  constructor({
    batchSize = 10,
    pauseBetweenBatchesMs = 1000,
    onItemFetch,
    onBatchFetch,
    fetcherFn,
    retryCount,
    pauseBetweenRetriesMs,
    cacheManager
  }: BufferFetcherInput) {
    this.batchSize = batchSize;
    this.pauseBetweenBatchesMs = pauseBetweenBatchesMs;
    this.onItemFetch = onItemFetch;
    this.onBatchFetch = onBatchFetch;
    this.fetcherFn = fetcherFn;
    this.cacheManager = cacheManager;
    this.retryCount = retryCount || 0;
    this.pauseBetweenRetriesMs = pauseBetweenRetriesMs || 500;
  }

  private async fetchBatch(urls: string[]): Promise<BufferObject[]> {
    return Promise.all(
      urls.map(async url => {
        let buffer: Buffer;
        let isCacheHit = false;
        if (this.cacheManager) {
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
        this.onItemFetch && this.onItemFetch(url, buffer, isCacheHit);

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

        await this.cacheManager.writeItemsToCache(batchData);
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
      await this.cacheManager.writeItemsToCache(bufferObjects);
    }

    return bufferObjects;
  }

  private async fetchBuffer(url: string): Promise<Buffer> {
    if (this.fetcherFn) {
      return this.fetcherFn(url);
    }

    let data = new Response();

    const shouldUseRetry = this.retryCount > 0;

    if (shouldUseRetry) {
      let retries = 0;
      let isTrySuccess = false;
      let errorMsg = '';
      while (retries <= this.retryCount && !isTrySuccess) {
        const isLastRetry = retries === this.retryCount;
        let isCallSuccess = true;
        try {
          data = await fetch(url);
        } catch (e) {
          isCallSuccess = false;
          errorMsg = e instanceof Error ? e.message : JSON.stringify(e);
        }

        const isStatusOk = data.status === 200;
        isTrySuccess = isCallSuccess && isStatusOk;
        retries++;
        if (!isTrySuccess && !isLastRetry) {
          await wait(this.pauseBetweenRetriesMs);
        }
        if (isLastRetry && !isTrySuccess) {
          throw Error(errorMsg || 'Unknown error');
        }
      }
    } else {
      data = await fetch(url);
    }

    return data.status === 200 ? data.buffer() : Buffer.from('', 'utf8');
  }
}
