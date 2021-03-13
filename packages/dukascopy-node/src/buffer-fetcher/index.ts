import fetch from 'node-fetch';
import { CacheManagerBase } from '../cache-manager';
import { splitArrayInChunks, wait } from '../utils/general';

import { NotifyFn, BufferFetcherInput, BufferObject } from './types';

export class BufferFetcher {
  batchSize: number;
  pauseBetweenBatchesMs: number;
  notifyOnItemFetchFn?: NotifyFn;
  fetcherFn;
  cacheManager?: CacheManagerBase;

  constructor({
    batchSize = 10,
    pauseBetweenBatchesMs = 1000,
    notifyOnItemFetchFn,
    fetcherFn,
    cacheManager
  }: BufferFetcherInput) {
    this.batchSize = batchSize;
    this.pauseBetweenBatchesMs = pauseBetweenBatchesMs;
    this.notifyOnItemFetchFn = notifyOnItemFetchFn;
    this.fetcherFn = fetcherFn;
    this.cacheManager = cacheManager;
  }

  private async fetchBatch(urls: string[]): Promise<BufferObject[]> {
    return await Promise.all(
      urls.map(async url => {
        let buffer: Buffer;

        if (this.cacheManager) {
          const bufferFromCache = await this.cacheManager.readItemFromCache(url);
          if (bufferFromCache) {
            buffer = bufferFromCache;
          } else {
            buffer = await this.fetchBuffer(url);
          }
        } else {
          buffer = await this.fetchBuffer(url);
        }

        this.notifyOnItemFetchFn && this.notifyOnItemFetchFn(url);

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

    const data = await fetch(url);
    return data.buffer();
  }
}
