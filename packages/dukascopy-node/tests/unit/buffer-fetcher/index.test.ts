import { resolve } from 'path';
import { remove, readdir, readJSON, readFile } from 'fs-extra';
import { BufferFetcher } from '../../../src/buffer-fetcher';
import { BufferObject } from '../../../src/buffer-fetcher/types';
import { CacheManager } from '../../../src/cache-manager';
import { URL_ROOT } from '../../../src';

const urls = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/04/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/05/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/06/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/07/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/08/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/09/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/10/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/11/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/12/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/13/BID_candles_min_1.bi5'
];

const cacheFolderPath = resolve(process.cwd(), 'test-cache-folder');

const fileSystemFetcherFn = jest.fn(function (url: string): Promise<Buffer> {
  return Promise.resolve(Buffer.from(url, 'utf-8'));
});

beforeEach(() => fileSystemFetcherFn.mockClear());

afterAll(async () => remove(cacheFolderPath));

describe('Buffer fetcher', () => {
  const notifyFn = jest.fn();

  const bufferFetcher = new BufferFetcher({
    fetcherFn: fileSystemFetcherFn,
    notifyOnItemFetchFn: notifyFn,
    batchSize: 2,
    pauseBetweenBatchesMs: 0
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const fetchBatchSpy = jest.spyOn(bufferFetcher, 'fetchBatch');

  let data: BufferObject[];

  it('Performs correct amount of calls', async () => {
    data = await bufferFetcher.fetch(urls);
    expect(fileSystemFetcherFn).toHaveBeenCalledTimes(10);
  });

  it('Output contains correct amount of items', () => {
    expect(data.length).toEqual(10);
  });

  it('Output contains proper url keys', () => {
    expect(data.map(item => item.url)).toEqual(urls);
  });

  it('Notify callback function has been fired correctly', () => {
    expect(notifyFn).toHaveBeenCalledTimes(10);
    expect(notifyFn.mock.calls.map(([call]) => call).sort()).toEqual(urls);
  });

  it('Correctly breaks down urls in batches', () => {
    expect(fetchBatchSpy).toHaveBeenCalledTimes(5); // 10 items / 2 items per batch === 5 batches
  });
});

describe('Buffer fetcher with file cache', () => {
  const buffetFetcher = new BufferFetcher({
    fetcherFn: fileSystemFetcherFn,
    pauseBetweenBatchesMs: 0,
    cacheManager: new CacheManager(cacheFolderPath)
  });

  it('Creates a cache folder and manifest', async () => {
    const folderContent = await readdir(cacheFolderPath);
    expect(folderContent).toEqual(['manifest.json']);
  });

  it('Creates correct cache folder structure and manifest', async () => {
    await buffetFetcher.fetch(urls);
    expect(await readdir(cacheFolderPath)).toEqual(['EURUSD', 'manifest.json']);
    expect(await readdir(resolve(cacheFolderPath, 'EURUSD'))).toEqual(['2019']);
    expect(await readdir(resolve(cacheFolderPath, 'EURUSD', '2019'))).toEqual(['01']);
    expect(await readdir(resolve(cacheFolderPath, 'EURUSD', '2019', '01'))).toEqual([
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13'
    ]);

    const manifest = await readJSON(resolve(cacheFolderPath, 'manifest.json'));

    expect(manifest).toEqual({
      'EURUSD/2019/01/04/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/05/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/06/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/07/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/08/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/09/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/10/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/11/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/12/BID_candles_min_1.bi5': true,
      'EURUSD/2019/01/13/BID_candles_min_1.bi5': true
    });

    Object.keys(manifest).forEach(async path => {
      const itemPath = resolve(cacheFolderPath, ...path.split('/'));
      const itemContent = await readFile(itemPath, 'utf8');
      expect(itemContent).toEqual(`${URL_ROOT}/${path}`);
    });
  });
});
