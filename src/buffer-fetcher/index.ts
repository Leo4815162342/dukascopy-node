import fetch from 'node-fetch';
import { CacheManagerBase } from '../cache-manager';
import { splitArrayInChunks, wait } from '../utils/general';
import { NotifyFn, BufferFetcherInput, BufferObject } from './types';

export class BufferFetcher {
  batchSize: number;
  pauseBetweenBatchesMs: number;
  notifyOnItemFetchFn?: NotifyFn;
  fetcherFn;
  retryCount: number;
  pauseBetweenRetriesMs: number;
  cacheManager?: CacheManagerBase;

  constructor({
    batchSize = 10,
    pauseBetweenBatchesMs = 1000,
    notifyOnItemFetchFn,
    fetcherFn,
    retryCount,
    pauseBetweenRetriesMs,
    cacheManager
  }: BufferFetcherInput) {
    this.batchSize = batchSize;
    this.pauseBetweenBatchesMs = pauseBetweenBatchesMs;
    this.notifyOnItemFetchFn = notifyOnItemFetchFn;
    this.fetcherFn = fetcherFn;
    this.cacheManager = cacheManager;
    this.retryCount = retryCount || 0;
    this.pauseBetweenRetriesMs = pauseBetweenRetriesMs || 500;
  }

  private async fetchBatch(urls: string[]): Promise<BufferObject[]> {
    return await Promise.all(
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

        this.notifyOnItemFetchFn && this.notifyOnItemFetchFn(url, buffer, isCacheHit);

        return { url, buffer };
      })
    );
  }

  public async fetch(urls: string[]): Promise<BufferObject[]> {
    const fetchedObjects: BufferObject[][] = [];

    const batches = splitArrayInChunks(urls, this.batchSize);

    for (let i = 0, n = batches.length; i < n; i++) {
      const data = await this.fetchBatch(batches[i]);
      fetchedObjects.push(data);

      if (n > 1) {
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

    let data = await fetch(url);

    if (this.retryCount && data.status !== 200) {
      let retries = 0;
      let isRetrySuccess = false;
      while (retries < this.retryCount && !isRetrySuccess) {
        data = await fetch(url);
        isRetrySuccess = data.status === 200;
        retries++;
        const isLastRetry = retries === this.retryCount;
        if (!isRetrySuccess && !isLastRetry) {
          await wait(this.pauseBetweenRetriesMs);
        }
      }
    }

    return data.status === 200 ? data.buffer() : Buffer.from('', 'utf8');
  }
}
