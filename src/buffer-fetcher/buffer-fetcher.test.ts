/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect, it, beforeAll, beforeEach, afterAll, describe, vi } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { remove } from 'fs-extra';
import { BufferObject } from './types';
import { BufferFetcher, isEmptyDataBuffer } from '.';
import { CacheManager } from '../cache-manager';
import { URL_ROOT } from '../url-generator';

const urls = Array.from(
  { length: 10 },
  (_, index) => `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/1/${index + 4}`
);

const cacheFolderPath = resolve(process.cwd(), 'test-cache-folder-buffer-fetcher');
const fixtureFolderPath = resolve(__dirname, '../__mocks__/fixtures');
const emptyFixtureBody = readFileSync(
  resolve(fixtureFolderPath, 'candles-minute-EUR-USD-BID-2026-7-11-empty.json'),
  'utf8'
);
const populatedFixtureBody = readFileSync(
  resolve(fixtureFolderPath, 'candles-minute-EUR-USD-BID-2026-7-10.json'),
  'utf8'
);
const populatedFixtureBuffer = Buffer.from(populatedFixtureBody, 'utf8');

const fileSystemFetcherFn = vi.fn(function (): Promise<Buffer> {
  return Promise.resolve(populatedFixtureBuffer);
});

afterAll(async () => remove(cacheFolderPath));

describe('Buffer fetcher', () => {
  const notifyFn = vi.fn();

  const bufferFetcher = new BufferFetcher({
    fetcherFn: fileSystemFetcherFn,
    onItemFetch: notifyFn,
    batchSize: 2,
    pauseBetweenBatchesMs: 0
  });

  //@ts-ignore
  const fetchBatchSpy = vi.spyOn(bufferFetcher, 'fetchBatch');

  let data: BufferObject[];

  beforeAll(async () => {
    fileSystemFetcherFn.mockClear();
    notifyFn.mockClear();
    fetchBatchSpy.mockClear();
    data = await bufferFetcher.fetch(urls);
  });

  it('Performs correct amount of calls', async () => {
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
    expect(notifyFn.mock.calls.map(([call]) => call).sort()).toEqual([...urls].sort());
  });

  it('Correctly breaks down urls in batches', () => {
    expect(fetchBatchSpy).toHaveBeenCalledTimes(5); // 10 items / 2 items per batch === 5 batches
  });
});

describe('Buffer fetcher with file cache', () => {
  beforeEach(async () => {
    await remove(cacheFolderPath);
    fileSystemFetcherFn.mockClear();
  });

  function createCachedFetcher() {
    const cacheManager = new CacheManager({
      cacheFolderPath,
      cacheKeyFormatter: item => item
    });
    const readSpy = vi.spyOn(cacheManager, 'readItemFromCache');
    const writeSpy = vi.spyOn(cacheManager, 'writeItemsToCache');
    const bufferFetcher = new BufferFetcher({
      fetcherFn: fileSystemFetcherFn,
      pauseBetweenBatchesMs: 0,
      cacheManager
    });

    //@ts-ignore
    const fetchSpy = vi.spyOn(bufferFetcher, 'fetchBuffer');

    return {
      bufferFetcher,
      readSpy,
      writeSpy,
      fetchSpy
    };
  }

  it('Makes correct number of network calls and writes the first fetch to cache', async () => {
    const { bufferFetcher, readSpy, writeSpy, fetchSpy } = createCachedFetcher();

    await bufferFetcher.fetch(urls);
    expect(fetchSpy).toHaveBeenCalledTimes(10);

    const cacheData = await Promise.all(readSpy.mock.results.map(item => item.value));
    expect(cacheData.every(result => result === null)).toEqual(true);
    expect(readSpy).toHaveBeenCalledTimes(10);
    expect(writeSpy.mock.calls[0][0]).toHaveLength(10);
    expect(writeSpy).toHaveBeenCalledTimes(1);
  });

  it('Upon same request, it does not make any network calls', async () => {
    const { bufferFetcher, readSpy, fetchSpy } = createCachedFetcher();

    await bufferFetcher.fetch(urls);
    readSpy.mockClear();
    fetchSpy.mockClear();

    await bufferFetcher.fetch(urls);

    expect(fetchSpy).toHaveBeenCalledTimes(0);

    const cacheData = await Promise.all(readSpy.mock.results.map(item => item.value));
    expect(cacheData.every(result => result !== null)).toEqual(true);
    expect(readSpy).toHaveBeenCalledTimes(10);
  });

  it('Makes network calls only for new items', async () => {
    const { bufferFetcher, fetchSpy } = createCachedFetcher();

    await bufferFetcher.fetch(urls);
    fetchSpy.mockClear();

    await bufferFetcher.fetch([...urls, `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/1/14`]);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});

describe('JSON response handling', () => {
  it('recognizes empty compact JSON payloads', () => {
    expect(isEmptyDataBuffer(Buffer.from(emptyFixtureBody))).toBe(true);
    expect(isEmptyDataBuffer(populatedFixtureBuffer)).toBe(false);
  });

  it('does not cache mutable from-query responses', async () => {
    const cacheManager = new CacheManager({ cacheFolderPath });
    const fetcher = new BufferFetcher({
      fetcherFn: fileSystemFetcherFn,
      pauseBetweenBatchesMs: 0,
      cacheManager
    });
    const url = `${URL_ROOT}/candles/minute/EUR-USD/BID?from=1562889600000`;

    fileSystemFetcherFn.mockClear();
    await fetcher.fetch([url]);
    await fetcher.fetch([url]);

    expect(fileSystemFetcherFn).toHaveBeenCalledTimes(2);
    expect(await cacheManager.readItemFromCache(url)).toBeNull();
  });

  it('retries compact JSON responses whose times array is empty', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(emptyFixtureBody))
      .mockResolvedValueOnce(new Response(populatedFixtureBody));
    vi.stubGlobal('fetch', fetchMock);
    const fetcher = new BufferFetcher({
      retryCount: 1,
      retryOnEmpty: true,
      pauseBetweenRetriesMs: 0
    });

    const data = await fetcher.fetch([urls[0]]);

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(JSON.parse(data[0].buffer.toString('utf8')).times).toHaveLength(1258);
    vi.unstubAllGlobals();
  });

  it('fails after the configured number of unsuccessful retries', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('', { status: 503 }));
    vi.stubGlobal('fetch', fetchMock);
    const fetcher = new BufferFetcher({
      retryCount: 2,
      pauseBetweenRetriesMs: 0,
      failAfterRetryCount: true
    });

    await expect(fetcher.fetch([urls[0]])).rejects.toThrow('status 503');
    expect(fetchMock).toHaveBeenCalledTimes(3);
    vi.unstubAllGlobals();
  });

  it('preserves raw JSON buffers in custom batch callbacks', async () => {
    const payload = Buffer.from(emptyFixtureBody, 'utf8');
    const onBatchFetch = vi.fn(async (bufferObjects: BufferObject[], isLastBatch: boolean) => {
      void bufferObjects;
      void isLastBatch;
    });
    const fetcher = new BufferFetcher({
      batchSize: 1,
      pauseBetweenBatchesMs: 0,
      fetcherFn: async () => payload,
      onBatchFetch
    });

    await fetcher.fetch_optimized(urls.slice(0, 2));

    expect(onBatchFetch).toHaveBeenCalledTimes(2);
    expect(onBatchFetch.mock.calls[0][0][0].buffer).toEqual(payload);
    expect(onBatchFetch.mock.calls[1][1]).toBe(true);
  });
});
