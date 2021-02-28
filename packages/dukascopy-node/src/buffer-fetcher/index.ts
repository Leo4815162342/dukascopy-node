import { resolve } from 'path';
import fetch from 'node-fetch';
import { outputFile, outputJSON, ensureFile, readJson, readFile } from 'fs-extra';
import { splitArrayInChunks, wait } from '../utils/general';

import { URL_ROOT } from '../url-generator';
import { NotifyFn, BufferFetcherInput, BufferObject } from './types';

export class BufferFetcher {
  batchSize: number;
  pauseBetweenBatchesMs: number;
  notifyOnItemFetchFn?: NotifyFn;
  cacheFolderPath?: string;
  cacheManifestPath?: string;
  cacheManifest?: Record<string, boolean>;
  isCacheUsed: boolean;

  constructor({
    batchSize = 10,
    pauseBetweenBatchesMs = 1000,
    notifyOnItemFetchFn
  }: BufferFetcherInput = {}) {
    this.batchSize = batchSize;
    this.pauseBetweenBatchesMs = pauseBetweenBatchesMs;
    this.notifyOnItemFetchFn = notifyOnItemFetchFn;
    this.isCacheUsed = false;
  }

  public async initCache(cacheFolderPath: string): Promise<void> {
    this.cacheFolderPath = cacheFolderPath;
    this.cacheManifestPath = resolve(cacheFolderPath, 'manifest.json');
    await ensureFile(this.cacheManifestPath);
    const manifestData =
      ((await readJson(this.cacheManifestPath, { throws: false })) as Record<string, boolean>) ||
      {};
    this.cacheManifest = manifestData;
    this.isCacheUsed = true;
  }

  private async fetchBufferedData(urls: string[]): Promise<BufferObject[]> {
    return await Promise.all(
      urls.map(async url => {
        let buffer: Buffer;

        if (this.isCacheUsed) {
          const cacheKey = url.replace(`${URL_ROOT}/`, '');
          const itemExistsInCache = this.cacheManifest?.[cacheKey];
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const cacheItemPath = resolve(this.cacheFolderPath!, ...cacheKey.split('/'));

          if (itemExistsInCache) {
            // eslint-disable-next-line no-console
            console.log('Fetching from cache', cacheKey);
            buffer = await readFile(cacheItemPath);
          } else {
            const data = await fetch(url);
            buffer = await data.buffer();

            if (buffer.length) {
              // eslint-disable-next-line no-console
              console.log('Saving in cache', cacheKey);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              this.cacheManifest![cacheKey] = true;

              await Promise.all([
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                outputJSON(this.cacheManifestPath!, this.cacheManifest),
                outputFile(cacheItemPath, buffer)
              ]);
            }
          }
        } else {
          // eslint-disable-next-line no-console
          console.log('Fetching from network', url);
          const data = await fetch(url);
          buffer = await data.buffer();
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
