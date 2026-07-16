import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { pathExists, remove } from 'fs-extra';
import { CacheManager } from '.';
import { URL_ROOT } from '../url-generator';

const cacheFolderPath = resolve(process.cwd(), 'test-cache-folder');
const firstUrl = `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/5/21`;
const secondUrl = `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/5/22`;
const fixtureFolderPath = resolve(__dirname, '../__mocks__/fixtures');
const firstFixture = readFileSync(
  resolve(fixtureFolderPath, 'candles-minute-EUR-USD-BID-2026-7-11-empty.json')
);
const secondFixture = readFileSync(resolve(fixtureFolderPath, 'candles-day-BTC-USD-BID-2018.json'));
const items = [
  { url: firstUrl, buffer: firstFixture },
  { url: secondUrl, buffer: secondFixture }
];

afterAll(() => remove(cacheFolderPath));

describe('Cache manager', () => {
  beforeEach(() => remove(cacheFolderPath));

  it('writes and reads JSON response buffers', async () => {
    const manager = new CacheManager({ cacheFolderPath });
    await manager.writeItemsToCache(items);

    expect(await manager.readItemFromCache(firstUrl)).toEqual(firstFixture);
    expect(await manager.readItemFromCache(secondUrl)).toEqual(secondFixture);
  });

  it('rebuilds its manifest from safely encoded JSON cache files', async () => {
    await new CacheManager({ cacheFolderPath }).writeItemsToCache(items);
    const manager = new CacheManager({ cacheFolderPath });

    expect(await manager.readItemFromCache(firstUrl)).not.toBeNull();
    expect(
      await pathExists(
        resolve(
          cacheFolderPath,
          `${encodeURIComponent('candles/minute/EUR-USD/BID/2019/5/21')}.json`
        )
      )
    ).toBe(true);
  });

  it('returns null for missing items', async () => {
    const manager = new CacheManager({ cacheFolderPath });
    expect(
      await manager.readItemFromCache(`${URL_ROOT}/candles/minute/EUR-USD/BID/2019/5/23`)
    ).toBeNull();
  });

  it('purges the cache directory and in-memory manifest', async () => {
    const manager = new CacheManager({ cacheFolderPath });
    await manager.writeItemsToCache(items);
    await manager.purgeCache();

    expect(await pathExists(cacheFolderPath)).toBe(false);
    expect(await manager.readItemFromCache(firstUrl)).toBeNull();
  });
});
