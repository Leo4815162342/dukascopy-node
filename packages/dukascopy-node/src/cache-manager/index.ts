import { resolve } from 'path';
import { URL_ROOT } from '../url-generator';
import { outputFile, outputJSON, remove, readFile, ensureFileSync, readJSONSync } from 'fs-extra';
import { BufferObject } from '../buffer-fetcher/types';

export type CacheManifest = Record<string, true>;

export interface CacheManagerBase {
  readItemFromCache(item: string): Promise<Buffer | null>;
  writeItemsToCache(items: BufferObject[]): Promise<void[]>;
  purgeCache(): Promise<void>;
  getCacheKeyFromUrl(item: string): string;
}

export class CacheManager implements CacheManagerBase {
  cacheManifest: CacheManifest;
  cacheManifestPath: string;
  cacheFolderPath: string;

  constructor(cacheFolderPath: string) {
    this.cacheFolderPath = cacheFolderPath || resolve(process.cwd(), '.dukascopy-cache');
    this.cacheManifestPath = resolve(cacheFolderPath, 'manifest.json');
    ensureFileSync(this.cacheManifestPath);
    const manifestData =
      (readJSONSync(this.cacheManifestPath, { throws: false }) as CacheManifest) || {};
    this.cacheManifest = manifestData;
  }

  public async readItemFromCache(url: string): Promise<Buffer | null> {
    const cacheKey = this.getCacheKeyFromUrl(url);
    const itemExistsInCache = Boolean(this.cacheManifest?.[cacheKey]);
    const cacheItemPath = resolve(this.cacheFolderPath, ...cacheKey.split('/'));
    return itemExistsInCache ? readFile(cacheItemPath) : null;
  }

  public async writeItemsToCache(items: BufferObject[]): Promise<void[]> {
    let newManifest: CacheManifest = {};
    const itemsToCache: Array<{ cacheKey: string; buffer: Buffer }> = [];

    for (const item of items) {
      const cacheKey = this.getCacheKeyFromUrl(item.url);
      const itemExistsInCache = Boolean(this.cacheManifest?.[cacheKey]);
      if (!itemExistsInCache) {
        newManifest[cacheKey] = true;
        itemsToCache.push({ cacheKey, buffer: item.buffer });
      }
    }

    return Promise.all([
      outputJSON(this.cacheManifestPath, { ...this.cacheManifest, ...newManifest }),
      ...itemsToCache.map(({ buffer, cacheKey }) => {
        const cacheItemPath = resolve(this.cacheFolderPath, ...cacheKey.split('/'));
        return outputFile(cacheItemPath, buffer);
      })
    ]);
  }

  public async purgeCache(cacheFolderPath = this.cacheFolderPath): Promise<void> {
    return remove(cacheFolderPath);
  }

  public getCacheKeyFromUrl(url: string): string {
    return url.replace(`${URL_ROOT}/`, '');
  }
}
