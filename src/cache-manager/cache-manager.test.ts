import { readdir, remove, readFile, readJSON, pathExists } from 'fs-extra';
import { resolve } from 'path';
import { afterAll, describe, it, expect } from 'vitest';
import { CacheManager, DEFAULT_MANIFEST_FILE } from '.';

const cacheFolderPath = resolve(process.cwd(), 'test-cache-folder');

afterAll(async () => remove(cacheFolderPath));

describe('Cache manager', () => {
  const cacheManager = new CacheManager({
    cacheFolderPath,
    cacheKeyFormatter: item => item
  });

  it('Creates a cache folder and manifest', async () => {
    const folderContent = await readdir(cacheFolderPath);
    expect(folderContent).toEqual([DEFAULT_MANIFEST_FILE]);
  });

  it('Writes data to the disk with correct folder structure', async () => {
    await cacheManager.writeItemsToCache([
      {
        url: 'ITEM_1/A/B/file_1.txt',
        buffer: Buffer.from('File 1 content', 'utf-8')
      }
    ]);
    expect(await readdir(cacheFolderPath)).toEqual(['ITEM_1', DEFAULT_MANIFEST_FILE]);
    expect(await readdir(resolve(cacheFolderPath, 'ITEM_1'))).toEqual(['A']);
    expect(await readdir(resolve(cacheFolderPath, 'ITEM_1', 'A'))).toEqual(['B']);
    expect(await readdir(resolve(cacheFolderPath, 'ITEM_1', 'A', 'B'))).toEqual(['file_1.txt']);
    expect(
      await readFile(resolve(cacheFolderPath, 'ITEM_1', 'A', 'B', 'file_1.txt'), 'utf8')
    ).toEqual('File 1 content');
  });

  it('Correctly updates the manifest', async () => {
    const manifest = await readJSON(resolve(cacheFolderPath, DEFAULT_MANIFEST_FILE));
    expect(manifest).toEqual({ 'ITEM_1/A/B/file_1.txt': true });
  });

  it('Reads data from the cache', async () => {
    const buffer = await cacheManager.readItemFromCache('ITEM_1/A/B/file_1.txt');

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(buffer!.toString('utf8')).toEqual('File 1 content');
  });

  it('Cleans out the cache', async () => {
    await cacheManager.purgeCache();
    expect(await pathExists(cacheFolderPath)).toEqual(false);
  });
});
