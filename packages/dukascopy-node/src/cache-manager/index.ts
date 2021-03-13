import { resolve } from 'path';
import { URL_ROOT } from '../url-generator';
import { outputFile, outputJSON, remove, readFile, ensureFileSync, readJSONSync } from 'fs-extra';
import { BufferObject } from '../buffer-fetcher/types';

export type CacheManifest = Record<string, true>;

export type CacheItem = { cacheKey: string; buffer: Buffer };

export type CacheKeyFormatter = (input: string) => string;

export const DEFAULT_CACHE_FOLDER = '.dukascopy-cache';
export const DEFAULT_MANIFEST_FILE = 'manifest.json';

export interface CacheManagerBase {
  readItemFromCache(item: string): Promise<Buffer | null>;
  writeItemsToCache(items: BufferObject[]): Promise<void[]>;
  purgeCache(): Promise<void>;
  getCacheKeyFromUrl: CacheKeyFormatter;
}

export class CacheManager implements CacheManagerBase {
  cacheManifest: CacheManifest;
  cacheManifestPath: string;
  cacheFolderPath: string;
  cacheKeyFormatter: CacheKeyFormatter;

  constructor({
    cacheFolderPath,
    cacheKeyFormatter
  }: {
    cacheFolderPath?: string;
    cacheKeyFormatter?: CacheKeyFormatter;
  }) {
    this.cacheFolderPath = cacheFolderPath || resolve(process.cwd(), DEFAULT_CACHE_FOLDER);
    this.cacheManifestPath = resolve(this.cacheFolderPath, DEFAULT_MANIFEST_FILE);
    this.cacheKeyFormatter = cacheKeyFormatter || this.getCacheKeyFromUrl;
    ensureFileSync(this.cacheManifestPath);
    const manifestData =
      (readJSONSync(this.cacheManifestPath, { throws: false }) as CacheManifest) || {};
    this.cacheManifest = manifestData;
  }

  public async readItemFromCache(url: string): Promise<Buffer | null> {
    const cacheKey = this.cacheKeyFormatter(url);
    const itemExistsInCache = Boolean(this.cacheManifest?.[cacheKey]);
    const cacheItemPath = resolve(this.cacheFolderPath, ...cacheKey.split('/'));
    return itemExistsInCache ? readFile(cacheItemPath) : null;
  }

  public async writeItemsToCache(items: BufferObject[]): Promise<void[]> {
    let newManifest: CacheManifest = {};
    const itemsToCache: CacheItem[] = [];

    for (const item of items) {
      const cacheKey = this.cacheKeyFormatter(item.url);
      const itemExistsInCache = Boolean(this.cacheManifest?.[cacheKey]);
      if (!itemExistsInCache) {
        newManifest[cacheKey] = true;
        itemsToCache.push({ cacheKey, buffer: item.buffer });
      }
    }

    this.cacheManifest = { ...this.cacheManifest, ...newManifest };

    return Promise.all([
      outputJSON(this.cacheManifestPath, this.cacheManifest),
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
