import { splitArrayInChunks, wait } from '../utils/general';
import fetch from 'node-fetch';
import { NotifyFn, BufferFetcherInput, BufferObject } from './types';

const a = 12;

export class BufferFetcher {
  batchSize: number;
  pauseBetweenBatchesMs: number;
  useCache: boolean;
  notifyOnItemFetchFn?: NotifyFn;

  constructor({
    batchSize = 10,
    pauseBetweenBatchesMs = 1000,
    useCache = false,
    notifyOnItemFetchFn
  }: BufferFetcherInput = {}) {
    this.batchSize = batchSize;
    this.pauseBetweenBatchesMs = pauseBetweenBatchesMs;
    this.useCache = useCache;
    this.notifyOnItemFetchFn = notifyOnItemFetchFn;
  }

  private async fetchBufferedData(urls: string[]): Promise<BufferObject[]> {
    return await Promise.all(
      urls.map(async url => {
        const data = await fetch(url);
        const buffer = await data.buffer();
        this.notifyOnItemFetchFn && this.notifyOnItemFetchFn(url);
        return { url, buffer };
      })
    );
  }

  public async fetch(urls: string[]): Promise<BufferObject[]> {
    const fetchedObjects: BufferObject[][] = [];

    const batches = splitArrayInChunks(urls, this.batchSize);

    for (let i = 0, n = batches.length; i < n; i++) {
      const data = await this.fetchBufferedData(batches[i]);
      fetchedObjects.push(data);

      if (n > 1) {
        await wait(this.pauseBetweenBatchesMs);
      }
    }
    const bufferObjects = ([] as BufferObject[])
      .concat(...fetchedObjects)
      .filter(({ buffer }) => buffer.length > 0);

    return bufferObjects;
  }
}
