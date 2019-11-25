import { splitArrayInChunks, wait } from '../utils/general';

import fetch from 'node-fetch';

export type BufferObject = {
  url: string;
  buffer: Buffer;
};

export type NotifyFn = (...args: any[]) => any;

export interface BufferFetcherInput {
  batchSize?: number;
  batchPauseMs?: number; // TODO: use exponential backoff
  notifyOnItemFetchFn?: NotifyFn;
}

class BuffetFetcher {
  batchSize: number;
  batchPauseMs: number;
  notifyOnItemFetchFn: NotifyFn;

  constructor({
    batchSize = 10,
    batchPauseMs = 1000,
    notifyOnItemFetchFn
  }: BufferFetcherInput = {}) {
    this.batchSize = batchSize;
    this.batchPauseMs = batchPauseMs;
    this.notifyOnItemFetchFn = notifyOnItemFetchFn || (() => {});
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
        await wait(this.batchPauseMs);
      }
    }

    return ([] as BufferObject[]).concat(...fetchedObjects);
  }
}

export { BuffetFetcher };
