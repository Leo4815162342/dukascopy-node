import { readdir, remove, readFile, pathExists } from 'fs-extra';
import { resolve } from 'path';
import { afterAll, beforeEach, describe, it, expect } from 'vitest';
import { CacheManager } from '.';

const cacheFolderPath = resolve(process.cwd(), 'test-cache-folder-cache-manager');
const firstUrl = 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/21/BID_candles_min_1.bi5';
const secondUrl = 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/BID_candles_min_1.bi5';
const firstFileName = 'EURUSD-2019-05-21-BID_candles_min_1.bi5';
const secondFileName = 'EURUSD-2019-05-22-BID_candles_min_1.bi5';

const fixtureItems = [
  {
    url: firstUrl,
    buffer: Buffer.from('File 1 content', 'utf-8')
  },
  {
    url: secondUrl,
    buffer: Buffer.from('File 2 content', 'utf-8')
  }
];

afterAll(async () => {
  await remove(cacheFolderPath);
});

beforeEach(async () => {
  await remove(cacheFolderPath);
});

async function seedCache(cacheManager: CacheManager) {
  await cacheManager.writeItemsToCache(fixtureItems);
}

describe('Cache manager', () => {
  it('Writes cache data to the disk', async () => {
    const cacheManager = new CacheManager({ cacheFolderPath });

    await seedCache(cacheManager);

    expect(await readdir(cacheFolderPath)).toEqual([firstFileName, secondFileName]);

    expect(await readFile(resolve(cacheFolderPath, firstFileName), 'utf8')).toEqual('File 1 content');
    expect(await readFile(resolve(cacheFolderPath, secondFileName), 'utf8')).toEqual('File 2 content');
  });

  it('Reads data from the cache', async () => {
    const cacheManager = new CacheManager({ cacheFolderPath });

    await seedCache(cacheManager);

    const buffer = await cacheManager.readItemFromCache(firstUrl);

    expect(buffer!.toString('utf8')).toEqual('File 1 content');

    const buffer2 = await cacheManager.readItemFromCache(secondUrl);

    expect(buffer2!.toString('utf8')).toEqual('File 2 content');
  });

  it('Returns null if the item is not in the cache', async () => {
    const cacheManager = new CacheManager({ cacheFolderPath });
    const buffer = await cacheManager.readItemFromCache(
      'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/BID_candles_min_1.bi5'
    );

    expect(buffer).toEqual(null);
  });

  it('Returns null when the manifest points to a deleted file', async () => {
    const cacheManager = new CacheManager({ cacheFolderPath });

    await seedCache(cacheManager);
    await remove(resolve(cacheFolderPath, firstFileName));

    const buffer = await cacheManager.readItemFromCache(firstUrl);

    expect(buffer).toEqual(null);
  });

  it('Rewrites an item when the cache file was deleted externally', async () => {
    const cacheManager = new CacheManager({ cacheFolderPath });

    await seedCache(cacheManager);
    await remove(resolve(cacheFolderPath, firstFileName));

    await cacheManager.writeItemsToCache([
      {
        url: firstUrl,
        buffer: Buffer.from('File 1 replacement', 'utf-8')
      }
    ]);

    expect(await readFile(resolve(cacheFolderPath, firstFileName), 'utf8')).toEqual(
      'File 1 replacement'
    );
  });

  it('Cleans out the cache', async () => {
    const cacheManager = new CacheManager({ cacheFolderPath });

    await seedCache(cacheManager);
    await cacheManager.purgeCache();
    expect(await pathExists(cacheFolderPath)).toEqual(false);
  });
});
