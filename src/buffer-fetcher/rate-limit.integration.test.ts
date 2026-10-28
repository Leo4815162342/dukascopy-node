import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join, resolve } from 'path';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';
import {
  BufferFetcher,
  DukascopyAccessDeniedError,
  getHistoricalRates,
  getRealTimeRates,
  RateLimitError,
  WafTokenError
} from '../index';
import { validateConfigNode } from '../config-validator';
import { run } from '../cli/cli';
import { acquireChromeSession } from '../waf/browser-token';

vi.mock('../waf/browser-token', () => ({ acquireChromeSession: vi.fn() }));
const fixture = readFileSync(
  resolve(__dirname, '../__mocks__/fixtures/candles-minute-EUR-USD-BID-2026-7-10.json'),
  'utf8'
);
const outputDir = mkdtempSync(join(tmpdir(), 'dukascopy-rate-limit-test-'));
const config = {
  instrument: 'eurusd' as const,
  dates: { from: '2026-07-10', to: '2026-07-11' },
  timeframe: 'm1' as const,
  wafTokenCache: false
};

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
afterAll(() => rmSync(outputDir, { recursive: true, force: true }));

describe('Node and CLI rate-limit integration', () => {
  it.each(['fetch', 'fetch_optimized'] as const)(
    'does not ordinarily retry or start paced files after plain 403 in %s',
    async method => {
      vi.useFakeTimers();
      const fetchMock = vi.fn(async () => new Response('Forbidden', { status: 403 }));
      vi.stubGlobal('fetch', fetchMock);
      const fetcher = new BufferFetcher({
        batchSize: 3,
        requestIntervalMs: 1000,
        retryCount: 5,
        wafTokenCache: false
      });
      const urls = Array.from(
        { length: 7 },
        (_, i) => `https://jetta.dukascopy.com/v1/candles/minute/EUR-USD/BID/2026/7/${i + 1}`
      );
      const result = expect(fetcher[method](urls)).rejects.toBeInstanceOf(
        DukascopyAccessDeniedError
      );
      await vi.runAllTimersAsync();
      await result;
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(vi.getTimerCount()).toBe(0);
    }
  );

  it('does not retry already concurrent files or begin later batches after plain 403', async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn(async () => new Response('Forbidden', { status: 403 }));
    vi.stubGlobal('fetch', fetchMock);
    const fetcher = new BufferFetcher({ batchSize: 3, retryCount: 5, wafTokenCache: false });
    const urls = Array.from(
      { length: 7 },
      (_, i) => `https://jetta.dukascopy.com/v1/candles/minute/EUR-USD/BID/2026/7/${i + 1}`
    );
    const result = expect(fetcher.fetch(urls)).rejects.toBeInstanceOf(DukascopyAccessDeniedError);
    await vi.runAllTimersAsync();
    await result;
    // The initial batch was already in flight when the first denial arrived.
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(vi.getTimerCount()).toBe(0);
  });

  it('preserves opt-in empty results while suppressing further denied requests', async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn(async () => new Response('Forbidden', { status: 403 }));
    vi.stubGlobal('fetch', fetchMock);
    const fetcher = new BufferFetcher({
      batchSize: 2,
      requestIntervalMs: 1000,
      retryCount: 5,
      failAfterRetryCount: false,
      wafTokenCache: false
    });
    const urls = Array.from(
      { length: 5 },
      (_, i) => `https://jetta.dukascopy.com/v1/candles/minute/EUR-USD/BID/2026/7/${i + 1}`
    );
    const result = fetcher.fetch(urls);
    await vi.runAllTimersAsync();
    expect(await result).toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it('exposes access-denied errors through historical and realtime APIs', async () => {
    const fetchMock = vi.fn(async () => new Response('Forbidden', { status: 403 }));
    vi.stubGlobal('fetch', fetchMock);
    await expect(getHistoricalRates({ ...config, retryCount: 5 })).rejects.toMatchObject({
      name: 'DukascopyAccessDeniedError',
      code: 'DUKASCOPY_ACCESS_DENIED',
      status: 403
    });
    await expect(getRealTimeRates(config)).rejects.toBeInstanceOf(DukascopyAccessDeniedError);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('propagates browser access denial and prevents recovery for queued files', async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn(
      async () => new Response('', { status: 202, headers: { 'x-amzn-waf-action': 'challenge' } })
    );
    vi.stubGlobal('fetch', fetchMock);
    const denied = new DukascopyAccessDeniedError(
      'https://jetta.dukascopy.com/v1/candles/minute/EUR-USD/BID/2026/7/10'
    );
    vi.mocked(acquireChromeSession).mockReset().mockRejectedValueOnce(denied);
    const result = expect(
      getHistoricalRates({
        ...config,
        dates: { from: '2026-07-10', to: '2026-07-20' },
        requestIntervalMs: 1000,
        retryCount: 5
      })
    ).rejects.toBe(denied);
    await vi.runAllTimersAsync();
    await result;
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(acquireChromeSession).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
    vi.mocked(acquireChromeSession).mockReset();
  });

  it.each(['fetch', 'fetch_optimized'] as const)(
    'restores 10/10/4 concurrent requests and batch pauses in %s',
    async method => {
      vi.useFakeTimers();
      const urls = Array.from(
        { length: 24 },
        (_, i) => `https://jetta.dukascopy.com/v1/candles/minute/EUR-USD/BID/2026/7/${i + 1}`
      );
      const release: (() => void)[] = [];
      const fetchMock = vi.fn(
        () =>
          new Promise<Response>(resolve => {
            release.push(() =>
              resolve(
                new Response(fixture, {
                  headers: { 'content-type': 'application/json' }
                })
              )
            );
          })
      );
      vi.stubGlobal('fetch', fetchMock);
      const completedUrls: string[] = [];
      const fetcher = new BufferFetcher({
        wafTokenCache: false,
        onBatchFetch: async batch => {
          completedUrls.push(...batch.map(item => item.url));
        }
      });
      const result = fetcher[method](urls);
      await vi.advanceTimersByTimeAsync(0);
      // None of these responses have arrived yet; all ten requests must be in flight.
      expect(fetchMock).toHaveBeenCalledTimes(10);
      for (const finish of release.slice(0, 10).reverse()) finish();
      await vi.advanceTimersByTimeAsync(999);
      expect(fetchMock).toHaveBeenCalledTimes(10);
      await vi.advanceTimersByTimeAsync(1);
      expect(fetchMock).toHaveBeenCalledTimes(20);
      for (const finish of release.slice(10, 20).reverse()) finish();
      await vi.advanceTimersByTimeAsync(999);
      expect(fetchMock).toHaveBeenCalledTimes(20);
      await vi.advanceTimersByTimeAsync(1);
      expect(fetchMock).toHaveBeenCalledTimes(24);
      for (const finish of release.slice(20).reverse()) finish();
      const output = await result;
      expect(Array.isArray(output) ? output.map(item => item.url) : completedUrls).toEqual(urls);
    }
  );

  it('shares browser failure across concurrent requests and stops later batches', async () => {
    const fetchMock = vi.fn(
      async () =>
        new Response('', {
          status: 202,
          headers: { 'x-amzn-waf-action': 'challenge' }
        })
    );
    vi.stubGlobal('fetch', fetchMock);
    vi.mocked(acquireChromeSession).mockRejectedValueOnce(new WafTokenError('Browser unavailable'));
    await expect(
      getHistoricalRates({ ...config, dates: { from: '2026-07-10', to: '2026-07-30' } })
    ).rejects.toThrow('Browser unavailable');
    expect(fetchMock).toHaveBeenCalledTimes(10);
    expect(acquireChromeSession).toHaveBeenCalledTimes(1);
    vi.mocked(acquireChromeSession).mockClear();
  });

  it('recovers 429 with zero ordinary retries and leaves the browser alone', async () => {
    vi.useFakeTimers();
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response('', { status: 429 }))
      .mockImplementation(
        async () =>
          new Response(fixture, {
            headers: { 'content-type': 'application/json' }
          })
      );
    vi.stubGlobal('fetch', fetchMock);
    const result = getHistoricalRates({ ...config, retryCount: 0 });
    await vi.runAllTimersAsync();
    expect((await result).length).toBeGreaterThan(0);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(acquireChromeSession).not.toHaveBeenCalled();
  });

  it('bounds retries per concurrent file independently of ordinary retries', async () => {
    vi.useFakeTimers();
    const fetchMock = vi.fn(async () => new Response('', { status: 429 }));
    vi.stubGlobal('fetch', fetchMock);
    const result = getHistoricalRates({
      ...config,
      dates: { from: '2026-07-10', to: '2026-07-20' },
      retryCount: 10
    });
    const rejected = expect(result).rejects.toBeInstanceOf(RateLimitError);
    await vi.runAllTimersAsync();
    await rejected;
    const requestsByUrl = new Map<string, number>();
    for (const [url] of fetchMock.mock.calls as unknown as [string][]) {
      requestsByUrl.set(url, (requestsByUrl.get(url) ?? 0) + 1);
    }
    expect(requestsByUrl.size).toBe(10);
    expect(Math.max(...requestsByUrl.values())).toBe(4);
    expect(fetchMock.mock.calls.length).toBeLessThanOrEqual(40);
    expect(acquireChromeSession).not.toHaveBeenCalled();
  });

  it('forwards the realtime retry budget', async () => {
    const fetchMock = vi.fn(async () => new Response('', { status: 429 }));
    vi.stubGlobal('fetch', fetchMock);
    await expect(getRealTimeRates({ ...config, rateLimitRetryCount: 0 })).rejects.toMatchObject({
      code: 'DUKASCOPY_RATE_LIMIT',
      retries: 0
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('rejects invalid rate controls before any HTTP request', () => {
    expect(validateConfigNode({ ...config, requestIntervalMs: -1 }).isValid).toBe(false);
    expect(validateConfigNode({ ...config, requestIntervalMs: Infinity }).isValid).toBe(false);
    expect(validateConfigNode({ ...config, rateLimitRetryCount: 0.5 }).isValid).toBe(false);
  });

  it('does not cache 429 bodies even with failAfterRetryCount disabled', async () => {
    const fetchMock = vi.fn(async () => new Response('', { status: 429 }));
    vi.stubGlobal('fetch', fetchMock);
    const data = await new BufferFetcher({
      wafTokenCache: false,
      rateLimitRetryCount: 0,
      failAfterRetryCount: false
    }).fetch([
      'https://jetta.dukascopy.com/v1/ticks/BTC-USD/2019/1/13/0',
      'https://jetta.dukascopy.com/v1/ticks/BTC-USD/2019/1/13/1'
    ]);
    expect(data).toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('honors CLI flags, preserves the token and existing output, and removes partial files', async () => {
    const target = join(outputDir, 'ticks.csv');
    const tokenFile = join(outputDir, 'token.json');
    const cache = JSON.stringify({
      version: 2,
      origin: 'https://jetta.dukascopy.com',
      token: 'rate-limit-test-token',
      userAgent: 'Headless test browser',
      savedAt: new Date().toISOString()
    });
    writeFileSync(target, 'previous complete download');
    writeFileSync(tokenFile, cache);
    const fetchMock = vi.fn(async () => new Response('', { status: 429 }));
    vi.stubGlobal('fetch', fetchMock);
    const exit = vi.spyOn(process, 'exit').mockImplementation(() => {
      throw new Error('CLI exit');
    });
    await expect(
      run([
        'node',
        'dukascopy-node',
        '-i',
        'btcusd',
        '-from',
        '2019-01-13',
        '-to',
        '2019-01-14',
        '-t',
        'tick',
        '-f',
        'csv',
        '--directory',
        outputDir,
        '--file-name',
        'ticks',
        '--rate-limit-retries',
        '0',
        '--retries',
        '10',
        '--request-interval',
        '0',
        '--waf-token-cache-path',
        tokenFile
      ])
    ).rejects.toThrow('CLI exit');
    expect(exit).toHaveBeenCalledWith(1);
    expect(fetchMock).toHaveBeenCalledTimes(10);
    expect(fetchMock.mock.calls[0]).toEqual([
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          cookie: 'aws-waf-token=rate-limit-test-token',
          'user-agent': 'Headless test browser'
        })
      })
    ]);
    expect(acquireChromeSession).not.toHaveBeenCalled();
    expect(readFileSync(tokenFile, 'utf8')).toBe(cache);
    expect(readFileSync(target, 'utf8')).toBe('previous complete download');
    expect(readdirSync(outputDir).some(file => file.endsWith('.part'))).toBe(false);
  });
});
