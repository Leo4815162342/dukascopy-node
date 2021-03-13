import { resolve } from 'path';
import { remove } from 'fs-extra';
import { BufferFetcher } from '../../../src/buffer-fetcher';
import { BufferObject } from '../../../src/buffer-fetcher/types';
import { CacheManager } from '../../../src/cache-manager';

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
  const cacheManager = new CacheManager({ cacheFolderPath, cacheKeyFormatter: item => item });

  const readSpy = jest.spyOn(cacheManager, 'readItemFromCache');
  const writeSpy = jest.spyOn(cacheManager, 'writeItemsToCache');

  const buffetFetcher = new BufferFetcher({
    fetcherFn: fileSystemFetcherFn,
    pauseBetweenBatchesMs: 0,
    cacheManager
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const fetchSpy = jest.spyOn(buffetFetcher, 'fetchBuffer');

  it('Makes correct number of network calls', async () => {
    await buffetFetcher.fetch(urls);
    expect(fetchSpy).toHaveBeenCalledTimes(10);
    fetchSpy.mockClear();
  });

  it('Tries to check if data exists in cache', async () => {
    const cacheData = await Promise.all(readSpy.mock.results.map(item => item.value));

    expect(cacheData.every(result => result === null)).toEqual(true);

    expect(readSpy).toHaveBeenCalledTimes(10);
    readSpy.mockClear();
  });

  it('Writes correct number of entries to cache once ', () => {
    expect(writeSpy.mock.calls[0][0]).toHaveLength(10);
    expect(writeSpy).toHaveBeenCalledTimes(1);
  });

  it('Upon same request, it does not make any network calls', async () => {
    await buffetFetcher.fetch(urls);
    expect(fetchSpy).toHaveBeenCalledTimes(0);
    fetchSpy.mockClear();
  });

  it('Retrieves data from cache', async () => {
    const cacheData = await Promise.all(readSpy.mock.results.map(item => item.value));
    expect(cacheData.every(result => result !== null)).toEqual(true);
    expect(readSpy).toHaveBeenCalledTimes(10);
  });

  it('Makes network calls only for new items', async () => {
    await buffetFetcher.fetch([
      ...urls,
      'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/14/BID_candles_min_1.bi5'
    ]);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
