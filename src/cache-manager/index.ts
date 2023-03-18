import { resolve } from 'path';
import { URL_ROOT } from '../url-generator';
import { outputFile, remove, readFile, readdirSync, ensureDirSync } from 'fs-extra';
import { BufferObject } from '../buffer-fetcher/types';

export type CacheManifest = Set<string>;

export type CacheKeyFormatter = (input: string) => string;

export const DEFAULT_CACHE_FOLDER = '.dukascopy-cache';

export interface CacheManagerBase {
  readItemFromCache(item: string): Promise<Buffer | null>;
  writeItemsToCache(items: BufferObject[]): Promise<PromiseSettledResult<void>[]>;
  purgeCache(): Promise<void>;
  getCacheKeyFromUrl: CacheKeyFormatter;
}

export class CacheManager implements CacheManagerBase {
  private cacheManifest: CacheManifest;
  private cacheFolderPath: string;
  cacheKeyFormatter: CacheKeyFormatter;

  constructor({
    cacheFolderPath,
    cacheKeyFormatter
  }: {
    cacheFolderPath?: string;
    cacheKeyFormatter?: CacheKeyFormatter;
  }) {
    this.cacheFolderPath = cacheFolderPath || resolve(process.cwd(), DEFAULT_CACHE_FOLDER);
    ensureDirSync(this.cacheFolderPath);
    const cacheKeys = readdirSync(this.cacheFolderPath)
      .filter(item => item.endsWith('.bi5'))
      .map(item => decodeURIComponent(item));
    this.cacheManifest = new Set(cacheKeys);
    this.cacheKeyFormatter = cacheKeyFormatter || this.getCacheKeyFromUrl;
  }

  public async readItemFromCache(key: string): Promise<Buffer | null> {
    const cacheKey = this.cacheKeyFormatter(key);
    const cacheKeyEncoded = encodeURIComponent(cacheKey);

    const itemExistsInCache = this.cacheManifest.has(cacheKey);
    const cacheItemPath = resolve(this.cacheFolderPath, cacheKeyEncoded);
    return itemExistsInCache ? readFile(cacheItemPath) : null;
  }

  public async writeItemsToCache(items: BufferObject[]) {
    return Promise.allSettled(
      items.map(({ buffer, url }) => {
        const cacheKey = this.cacheKeyFormatter(url);
        const isItemInCache = this.cacheManifest.has(cacheKey);

        if (isItemInCache) {
          return Promise.resolve();
        }

        const cacheKeyEncoded = encodeURIComponent(cacheKey);
        const cacheItemPath = resolve(this.cacheFolderPath, cacheKeyEncoded);
        this.cacheManifest.add(cacheKey);
        return outputFile(cacheItemPath, buffer);
      })
    );
  }

  public async purgeCache(cacheFolderPath = this.cacheFolderPath): Promise<void> {
    return remove(cacheFolderPath);
  }

  public getCacheKeyFromUrl(key: string): string {
    return key.replace(`${URL_ROOT}/`, '');
  }
}
