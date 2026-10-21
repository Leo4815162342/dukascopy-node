import { mkdtemp, readFile, readdir, rm, writeFile } from 'fs/promises';
import { readFileSync } from 'fs';
import { tmpdir } from 'os';
import { join, resolve } from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import debug from 'debug';
import { CacheManager } from '.';
import { getHistoricalRates } from '../getHistoricalRates';
import { run } from '../cli/cli';
import { acquireChromeSession } from '../waf/browser-token';
import { URL_ROOT } from '../url-generator';

vi.mock('../waf/browser-token', () => ({ acquireChromeSession: vi.fn() }));

const fixtures = resolve(__dirname, '../__mocks__/fixtures');
const populated = readFileSync(join(fixtures, 'candles-minute-EUR-USD-BID-2026-7-10.json'), 'utf8');
const empty = readFileSync(
  join(fixtures, 'candles-minute-EUR-USD-BID-2026-7-11-empty.json'),
  'utf8'
);
const urls = [10, 11].map(day => `${URL_ROOT}/candles/minute/EUR-USD/BID/2026/7/${day}`);
const json = (body: string) =>
  new Response(body, { headers: { 'content-type': 'application/json' } });
let directory: string;
let cacheFolderPath: string;
let debugNamespaces: string;

beforeEach(async () => {
  debugNamespaces = debug.disable();
  directory = await mkdtemp(join(tmpdir(), 'dukascopy-data-cache-'));
  cacheFolderPath = join(directory, 'market-data');
  vi.mocked(acquireChromeSession)
    .mockReset()
    .mockRejectedValue(new Error('Browser must not launch'));
});
afterEach(async () => {
  debug.enable(debugNamespaces);
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  vi.useRealTimers();
  await rm(directory, { recursive: true, force: true });
});

function mockDownloads() {
  const fetchMock = vi.fn<typeof fetch>(async input =>
    json(String(input) === urls[1] ? empty : populated)
  );
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

function blockNetwork() {
  const fetchMock = vi.fn<typeof fetch>(async () => {
    throw new Error('Network must not be used');
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

async function download(client: 'node' | 'cli', pauseBetweenBatchesMs = 0, debugMode = false) {
  if (client === 'node') {
    return getHistoricalRates({
      instrument: 'eurusd',
      dates: { from: '2026-07-10', to: '2026-07-12' },
      timeframe: 'm1',
      format: 'csv',
      volumes: false,
      useCache: true,
      cacheFolderPath,
      wafTokenCache: false,
      batchSize: 1,
      pauseBetweenBatchesMs
    });
  }
  await run([
    'node',
    'dukascopy-node',
    '-i',
    'eurusd',
    '-from',
    '2026-07-10',
    '-to',
    '2026-07-12',
    '-t',
    'm1',
    '-f',
    'csv',
    '--cache',
    '--cache-path',
    cacheFolderPath,
    '--no-waf-token-cache',
    '--batch-size',
    '1',
    '--batch-pause',
    String(pauseBetweenBatchesMs),
    '--directory',
    directory,
    '--file-name',
    'result',
    ...(debugMode ? ['--debug'] : [])
  ]);
  return readFile(join(directory, 'result.csv'), 'utf8');
}

describe('market-data cache through Node and CLI clients', () => {
  it.each(['node', 'cli'] as const)(
    '%s reuses disk data, including empty datasets, without HTTP, a browser or batch waits',
    async client => {
      const coldFetch = mockDownloads();
      const coldOutput = await download(client);
      expect(coldFetch.mock.calls.map(([url]) => url)).toEqual(urls);
      expect(coldOutput.trim().split('\n').length).toBeGreaterThan(1);
      expect(await readdir(cacheFolderPath)).toHaveLength(2);

      const offlineFetch = blockNetwork();
      // Each public call creates a fresh cache manager, reading its manifest from disk.
      const warmOutput = await download(client, 60_000);
      expect(warmOutput).toBe(coldOutput);
      expect(offlineFetch).not.toHaveBeenCalled();
      expect(acquireChromeSession).not.toHaveBeenCalled();
    }
  );

  it.each(['node', 'cli'] as const)('%s downloads only a missing cache entry', async client => {
    const fetchMock = mockDownloads();
    const original = await download(client);
    const manager = new CacheManager({ cacheFolderPath });
    const missing = join(
      cacheFolderPath,
      `${encodeURIComponent(manager.getCacheKeyFromUrl(urls[0]))}.json`
    );
    await rm(missing);
    fetchMock.mockClear();

    expect(await download(client)).toBe(original);
    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([urls[0]]);
    const offlineFetch = blockNetwork();
    expect(await download(client)).toBe(original);
    expect(offlineFetch).not.toHaveBeenCalled();
  });

  it.each(['node', 'cli'] as const)('%s replaces a zero-byte cache entry once', async client => {
    const fetchMock = mockDownloads();
    const original = await download(client);
    const manager = new CacheManager({ cacheFolderPath });
    const file = join(
      cacheFolderPath,
      `${encodeURIComponent(manager.getCacheKeyFromUrl(urls[0]))}.json`
    );
    await writeFile(file, '');
    fetchMock.mockClear();

    expect(await download(client)).toBe(original);
    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([urls[0]]);
    const offlineFetch = blockNetwork();
    expect(await download(client)).toBe(original);
    expect(offlineFetch).not.toHaveBeenCalled();
  });

  it('shares cached response files between the CLI and Node API', async () => {
    mockDownloads();
    const cliOutput = await download('cli');
    const offlineFetch = blockNetwork();
    expect((await download('node')).trim()).toBe(cliOutput.trim());
    expect(offlineFetch).not.toHaveBeenCalled();
    expect(acquireChromeSession).not.toHaveBeenCalled();
  });

  it('ignores existing cached data when useCache is false', async () => {
    const fetchMock = mockDownloads();
    await download('node');
    fetchMock.mockClear();
    await getHistoricalRates({
      instrument: 'eurusd',
      dates: { from: '2026-07-10', to: '2026-07-12' },
      timeframe: 'm1',
      useCache: false,
      cacheFolderPath,
      wafTokenCache: false
    });
    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual(urls);
  });

  it('keeps an active time bucket fresh instead of using or overwriting a cached snapshot', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-10T12:00:00Z'));
    const from = new Date('2026-07-10T00:00:00Z');
    const activeUrl = `${URL_ROOT}/candles/minute/EUR-USD/BID?from=${+from}`;
    const manager = new CacheManager({ cacheFolderPath });
    await manager.writeItemsToCache([{ url: activeUrl, buffer: Buffer.from(empty) }]);
    const fetchMock = mockDownloads();
    for (let i = 0; i < 2; i++) {
      const rows = await getHistoricalRates({
        instrument: 'eurusd',
        timeframe: 'm1',
        dates: { from, to: new Date() },
        useCache: true,
        cacheFolderPath,
        wafTokenCache: false
      });
      expect(rows.length).toBeGreaterThan(0);
    }
    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([activeUrl, activeUrl]);
    expect(await manager.readItemFromCache(activeUrl)).toEqual(Buffer.from(empty));
  });

  it.each(['node', 'cli'] as const)(
    '%s debug output reports cache hits and files requiring fetch',
    async client => {
      const stderr = vi.spyOn(process.stderr, 'write').mockImplementation(() => true);
      const logs = () => stderr.mock.calls.map(([chunk]) => String(chunk)).join('');
      const fetcherLines = () =>
        logs()
          .split('\n')
          .filter(line => line.includes(':fetcher '));
      if (client === 'node') {
        debug.enable('dukascopy-node:*');
      }

      const coldFetch = mockDownloads();
      const original = await download(client, 0, true);
      expect(coldFetch).toHaveBeenCalledTimes(2);
      expect(logs()).toContain('Cache hits: 0/2 files; files requiring fetch: 2.');
      expect(logs()).not.toContain('dukascopy-node:waf HTTP 200');
      expect(fetcherLines()).toHaveLength(2);
      expect(fetcherLines().every(line => line.includes('network (WAF token: no)'))).toBe(true);
      stderr.mockClear();

      const offlineFetch = blockNetwork();
      expect(await download(client, 60_000, true)).toBe(original);
      expect(logs()).toContain('Cache hits: 2/2 files; files requiring fetch: 0.');
      expect(offlineFetch).not.toHaveBeenCalled();
      expect(acquireChromeSession).not.toHaveBeenCalled();
      expect(fetcherLines()).toHaveLength(2);
      expect(fetcherLines().every(line => line.includes('| cache'))).toBe(true);
      expect(logs()).not.toContain('WAF token:');
      stderr.mockClear();

      const manager = new CacheManager({ cacheFolderPath });
      await rm(
        join(cacheFolderPath, `${encodeURIComponent(manager.getCacheKeyFromUrl(urls[0]))}.json`)
      );
      const partialFetch = mockDownloads();
      partialFetch.mockResolvedValueOnce(
        new Response('', { status: 202, headers: { 'x-amzn-waf-action': 'challenge' } })
      );
      vi.mocked(acquireChromeSession).mockResolvedValueOnce({
        token: 'debug-test-token',
        userAgent: 'Debug test browser'
      });
      expect(await download(client, 0, true)).toBe(original);
      expect(partialFetch.mock.calls.map(([url]) => url)).toEqual([urls[0], urls[0]]);
      expect(logs()).toContain('Cache hits: 1/2 files; files requiring fetch: 1.');
      expect(fetcherLines()).toHaveLength(2);
      expect(fetcherLines().filter(line => line.includes('network (WAF token: yes)'))).toHaveLength(
        1
      );
      expect(logs()).not.toContain('dukascopy-node:waf HTTP 200');
      expect(logs()).toContain('dukascopy-node:waf HTTP 202');
      expect(logs()).not.toContain('debug-test-token');
    }
  );
});
