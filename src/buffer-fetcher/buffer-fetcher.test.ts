/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect, it, beforeEach, afterAll, describe, vi, MockedFunction } from 'vitest';
import { resolve } from 'path';
import { remove } from 'fs-extra';
import { BufferObject } from './types';
import { BufferFetcher } from '.';
import { CacheManager } from '../cache-manager';
// import fetch from 'node-fetch';
// vi.mock('node-fetch');

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

const fileSystemFetcherFn = vi.fn(function (url: string): Promise<Buffer> {
  return Promise.resolve(Buffer.from(url, 'utf-8'));
});

beforeEach(() => {
  fileSystemFetcherFn.mockClear();
});

afterAll(async () => remove(cacheFolderPath));

describe('Buffer fetcher', () => {
  const notifyFn = vi.fn();

  const bufferFetcher = new BufferFetcher({
    fetcherFn: fileSystemFetcherFn,
    notifyOnItemFetchFn: notifyFn,
    batchSize: 2,
    pauseBetweenBatchesMs: 0
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const fetchBatchSpy = vi.spyOn(bufferFetcher, 'fetchBatch');

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
  const cacheManager = new CacheManager({
    cacheFolderPath,
    cacheKeyFormatter: item => item
  });

  const readSpy = vi.spyOn(cacheManager, 'readItemFromCache');
  const writeSpy = vi.spyOn(cacheManager, 'writeItemsToCache');

  const buffetFetcher = new BufferFetcher({
    fetcherFn: fileSystemFetcherFn,
    pauseBetweenBatchesMs: 0,
    cacheManager
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const fetchSpy = vi.spyOn(buffetFetcher, 'fetchBuffer');

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

// TODO: refactor retry logic test cases with proper mocking
// describe('Buffer fetcher with retry logic', () => {
//   const mockFetch = fetch as MockedFunction<typeof fetch>;

//   beforeEach(() => {
//     mockFetch
//       .mockReset()
//       // first call
//       .mockReturnValueOnce(
//         //@ts-ignore
//         Promise.resolve({
//           buffer: async function () {
//             return Buffer.from('try 1 - fail', 'utf-8');
//           },
//           status: 503
//         })
//       )
//       // second call
//       .mockReturnValueOnce(
//         //@ts-ignore
//         Promise.resolve({
//           buffer: async () => Buffer.from('try 2 - fail', 'utf-8'),
//           status: 503
//         })
//       )
//       // third call
//       .mockReturnValueOnce(
//         //@ts-ignore
//         Promise.resolve({
//           buffer: async () => Buffer.from('try 3 - fail', 'utf-8'),
//           status: 503
//         })
//       )
//       .mockReturnValue(
//         //@ts-ignore
//         Promise.resolve({
//           buffer: async () => Buffer.from('success', 'utf-8'),
//           status: 200
//         })
//       );
//   });

//   it('Makes retry calls (within retry threshold)', async () => {
//     const buffetFetcher = new BufferFetcher({
//       retryCount: 10
//     });

//     const data = await buffetFetcher.fetch(['/test-endpoint']);
//     expect(mockFetch.mock.calls.length).toEqual(4); // original call + 3 retries (last is successful)
//     expect(data).toHaveLength(1);
//     expect(data[0].buffer.toString()).toEqual('success');
//     expect(data[0].url).toEqual('/test-endpoint');
//   });

//   it('Makes retry calls (outside retry threshold)', async () => {
//     const buffetFetcher = new BufferFetcher({
//       retryCount: 2
//     });

//     const data = await buffetFetcher.fetch(['/test-endpoint-2']);
//     expect(mockFetch.mock.calls.length).toEqual(3); // original call + 2 retries (last is fail)
//     expect(data).toHaveLength(1);

//     expect(data[0].buffer.toString()).toEqual('try 3 - fail');
//     expect(data[0].url).toEqual('/test-endpoint-2');
//   });

//   it('Does not make any retries', async () => {
//     const buffetFetcher = new BufferFetcher({
//       retryCount: 0
//     });

//     const data = await buffetFetcher.fetch(['/test-endpoint-3']);
//     expect(mockFetch.mock.calls.length).toEqual(1); // only original call (no retries);
//     expect(data).toHaveLength(1);
//     expect(data[0].buffer.toString()).toEqual('try 1 - fail');
//     expect(data[0].url).toEqual('/test-endpoint-3');
//   });
// });
