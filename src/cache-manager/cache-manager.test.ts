/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readdir, remove, readFile, pathExists } from 'fs-extra';
import { resolve } from 'path';
import { afterAll, describe, it, expect } from 'vitest';
import { CacheManager } from '.';

const cacheFolderPath = resolve(process.cwd(), 'test-cache-folder');

afterAll(async () => {
  await remove(cacheFolderPath);
});

const cacheManager = new CacheManager({
  cacheFolderPath
});

describe('Cache manager', () => {
  it('Writes cache data to the disk', async () => {
    await cacheManager.writeItemsToCache([
      {
        url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/21/BID_candles_min_1.bi5',
        buffer: Buffer.from('File 1 content', 'utf-8')
      },
      {
        url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/BID_candles_min_1.bi5',
        buffer: Buffer.from('File 2 content', 'utf-8')
      }
    ]);
    expect(await readdir(cacheFolderPath)).toEqual([
      'EURUSD%2F2019%2F05%2F21%2FBID_candles_min_1.bi5',
      'EURUSD%2F2019%2F05%2F22%2FBID_candles_min_1.bi5'
    ]);

    expect(
      await readFile(
        resolve(cacheFolderPath, 'EURUSD%2F2019%2F05%2F21%2FBID_candles_min_1.bi5'),
        'utf8'
      )
    ).toEqual('File 1 content');
    expect(
      await readFile(
        resolve(cacheFolderPath, 'EURUSD%2F2019%2F05%2F22%2FBID_candles_min_1.bi5'),
        'utf8'
      )
    ).toEqual('File 2 content');
  });

  it('Reads data from the cache', async () => {
    const buffer = await cacheManager.readItemFromCache(
      'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/21/BID_candles_min_1.bi5'
    );

    expect(buffer!.toString('utf8')).toEqual('File 1 content');

    const buffer2 = await cacheManager.readItemFromCache(
      'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/BID_candles_min_1.bi5'
    );

    expect(buffer2!.toString('utf8')).toEqual('File 2 content');
  });

  it('Cleans out the cache', async () => {
    await cacheManager.purgeCache();
    expect(await pathExists(cacheFolderPath)).toEqual(false);
  });
});
