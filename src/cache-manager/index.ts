import { resolve } from 'path';
import { URL_ROOT } from '../url-generator';
import fsExtra from 'fs-extra';
import { BufferObject } from '../buffer-fetcher/types';
import debug from 'debug';

const cacheDebug = debug('dukascopy-node:cache');

const { outputFile, remove, readFile, readdirSync, ensureDirSync, pathExists } = fsExtra;

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
      .filter(item => item.endsWith('.json'))
      .map(item => decodeURIComponent(item.slice(0, -'.json'.length)));
    this.cacheManifest = new Set(cacheKeys);
    this.cacheKeyFormatter = cacheKeyFormatter || this.getCacheKeyFromUrl;
  }

  public async readItemFromCache(key: string): Promise<Buffer | null> {
    const cacheKey = this.cacheKeyFormatter(key);
    const itemExistsInCache = this.cacheManifest.has(cacheKey);

    if (!itemExistsInCache) {
      return null;
    }

    const cacheKeyEncoded = `${encodeURIComponent(cacheKey)}.json`;
    const cacheItemPath = resolve(this.cacheFolderPath, cacheKeyEncoded);
    try {
      const buffer = await readFile(cacheItemPath);
      if (buffer.length === 0) {
        this.cacheManifest.delete(cacheKey);
        return null;
      }
      return buffer;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        this.cacheManifest.delete(cacheKey);
        return null;
      }

      throw error;
    }
  }

  public async writeItemsToCache(items: BufferObject[]) {
    const results = await Promise.allSettled(
      items.map(async ({ buffer, url }) => {
        if (buffer.length === 0) {
          return;
        }
        const cacheKey = this.cacheKeyFormatter(url);
        const isItemInCache = this.cacheManifest.has(cacheKey);

        const cacheKeyEncoded = `${encodeURIComponent(cacheKey)}.json`;
        const cacheItemPath = resolve(this.cacheFolderPath, cacheKeyEncoded);

        if (isItemInCache) {
          if (await pathExists(cacheItemPath)) {
            return;
          }

          this.cacheManifest.delete(cacheKey);
        }

        await outputFile(cacheItemPath, buffer);
        this.cacheManifest.add(cacheKey);
      })
    );

    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        cacheDebug('Failed to write cache item %s: %O', items[index].url, result.reason);
      }
    });

    return results;
  }

  public async purgeCache(cacheFolderPath = this.cacheFolderPath): Promise<void> {
    if (cacheFolderPath === this.cacheFolderPath) {
      this.cacheManifest.clear();
    }

    return remove(cacheFolderPath);
  }

  public getCacheKeyFromUrl(key: string): string {
    return key.replace(`${URL_ROOT}/`, '');
  }
}
