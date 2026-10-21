import { readFileSync, writeFileSync, readdirSync, mkdtempSync, rmSync } from 'fs';
import { join, resolve } from 'path';
import { tmpdir } from 'os';
import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getHistoricalRates, getRealTimeRates, WafChallengeError } from '../index';
import { validateConfigNode } from '../config-validator';
import { run } from '../cli/cli';
import { acquireChromeSession } from './browser-token';

vi.mock('./browser-token', () => ({ acquireChromeSession: vi.fn() }));

const outputDir = mkdtempSync(join(tmpdir(), 'dukascopy-waf-test-'));
const fixture = readFileSync(
  resolve(__dirname, '../__mocks__/fixtures/candles-minute-EUR-USD-BID-2026-7-10.json'),
  'utf8'
);
const empty = readFileSync(
  resolve(__dirname, '../__mocks__/fixtures/candles-minute-EUR-USD-BID-2026-7-11-empty.json'),
  'utf8'
);
const json = (body = fixture) =>
  new Response(body, { headers: { 'content-type': 'application/json' } });
const challenge = () =>
  new Response('', { status: 202, headers: { 'x-amzn-waf-action': 'challenge' } });
const base = {
  instrument: 'eurusd' as const,
  dates: { from: '2026-07-10', to: '2026-07-11' },
  timeframe: 'm1' as const,
  batchSize: 1,
  pauseBetweenBatchesMs: 0,
  requestIntervalMs: 0,
  wafTokenCache: false
};

beforeEach(() => {
  vi.mocked(acquireChromeSession)
    .mockReset()
    .mockResolvedValue({ token: 'integration-token', userAgent: 'Headless test browser' });
});
afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});
afterAll(() => rmSync(outputDir, { recursive: true, force: true }));

describe('Node and CLI WAF integration', () => {
  it('keeps successful Node requests browser-free', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => json())
    );
    expect((await getHistoricalRates({ ...base })).length).toBeGreaterThan(0);
    expect(acquireChromeSession).not.toHaveBeenCalled();
  });

  it('recovers a challenge with zero retries and reuses the token across Node batches', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(challenge())
      .mockResolvedValueOnce(json())
      .mockResolvedValueOnce(json(empty));
    vi.stubGlobal('fetch', fetchMock);
    const rows = await getHistoricalRates({
      ...base,
      dates: { from: '2026-07-10', to: '2026-07-12' },
      chromePath: '/custom/chrome',
      wafTimeoutMs: 9000,
      retryCount: 0
    });
    expect(rows.length).toBeGreaterThan(0);
    expect(acquireChromeSession).toHaveBeenCalledTimes(1);
    expect(acquireChromeSession).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ executablePath: '/custom/chrome', timeoutMs: 9000 })
    );
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(fetchMock.mock.calls[0][1].headers).not.toHaveProperty('cookie');
    expect(fetchMock.mock.calls[2][1].headers.cookie).toBe('aws-waf-token=integration-token');
  });

  it('shares one acquisition across concurrent challenged Node requests', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(challenge())
      .mockResolvedValueOnce(challenge())
      .mockImplementation(async () => json());
    vi.stubGlobal('fetch', fetchMock);
    await getHistoricalRates({
      ...base,
      dates: { from: '2026-07-10', to: '2026-07-12' },
      batchSize: 2
    });
    expect(acquireChromeSession).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(4);
  });

  it('preserves typed WAF errors and bounds recovery even when retries are configured', async () => {
    const fetchMock = vi.fn(async () => challenge());
    vi.stubGlobal('fetch', fetchMock);
    await expect(getHistoricalRates({ ...base, retryCount: 5 })).rejects.toBeInstanceOf(
      WafChallengeError
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(acquireChromeSession).toHaveBeenCalledTimes(1);
  });

  it('supports disabling recovery in historical and realtime APIs', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => challenge())
    );
    await expect(getHistoricalRates({ ...base, wafMode: 'off' })).rejects.toBeInstanceOf(
      WafChallengeError
    );
    await expect(getRealTimeRates({ ...base, wafMode: 'off' })).rejects.toBeInstanceOf(
      WafChallengeError
    );
    expect(acquireChromeSession).not.toHaveBeenCalled();
  });

  it('validates WAF options before making requests', () => {
    expect(validateConfigNode({ ...base, wafTimeoutMs: 0 }).isValid).toBe(false);
    expect(validateConfigNode({ ...base, wafMode: 'invalid' as 'auto' }).isValid).toBe(false);
    expect(validateConfigNode({ ...base, retryCount: -1 }).isValid).toBe(false);
    expect(
      validateConfigNode({ ...base, wafTokenCache: 'yes' as unknown as boolean }).isValid
    ).toBe(false);
    expect(
      validateConfigNode({ ...base, wafTokenCachePath: 123 as unknown as string }).isValid
    ).toBe(false);
  });

  it('shares the default-enabled cache between historical and realtime Node calls', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(challenge())
      .mockImplementation(async () => json());
    vi.stubGlobal('fetch', fetchMock);
    const config = {
      ...base,
      wafTokenCache: undefined,
      wafTokenCachePath: join(outputDir, 'node-token.json')
    };
    await getHistoricalRates(config);
    await getHistoricalRates(config);
    await getRealTimeRates(config);
    expect(acquireChromeSession).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(fetchMock.mock.calls[2][1].headers.cookie).toBe('aws-waf-token=integration-token');
    expect(fetchMock.mock.calls[3][1].headers.cookie).toBe('aws-waf-token=integration-token');
  });

  it('recovers through CLI flags and reuses its token on the next run', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(challenge())
      .mockImplementation(async () => json());
    vi.stubGlobal('fetch', fetchMock);
    const argv = [
      'node',
      'dukascopy-node',
      '-i',
      'eurusd',
      '-from',
      '2026-07-10',
      '-to',
      '2026-07-11',
      '-t',
      'm1',
      '--waf-mode',
      'auto',
      '--chrome-path',
      '/cli/chrome',
      '--waf-timeout',
      '8000',
      '--waf-token-cache-path',
      join(outputDir, 'cli-token.json'),
      '--directory',
      outputDir,
      '--file-name',
      'waf-success'
    ];
    await run(argv);
    const rows = JSON.parse(readFileSync(join(outputDir, 'waf-success.json'), 'utf8'));
    expect(rows.length).toBeGreaterThan(0);
    expect(acquireChromeSession).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ executablePath: '/cli/chrome', timeoutMs: 8000 })
    );
    await run(argv);
    expect(acquireChromeSession).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(fetchMock.mock.calls[2][1].headers.cookie).toBe('aws-waf-token=integration-token');

    await run([...argv, '--no-waf-token-cache']);
    expect(fetchMock.mock.calls[3][1].headers).not.toHaveProperty('cookie');
  });

  it('exits unsuccessfully for a CLI challenge with recovery disabled', async () => {
    const existingFile = join(outputDir, 'waf-failed.json');
    writeFileSync(existingFile, 'previous complete download');
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => challenge())
    );
    const exit = vi.spyOn(process, 'exit').mockImplementation(() => {
      throw new Error('CLI exit');
    });
    await expect(
      run([
        'node',
        'dukascopy-node',
        '-i',
        'eurusd',
        '-from',
        '2026-07-10',
        '-to',
        '2026-07-11',
        '-t',
        'm1',
        '--waf-mode',
        'off',
        '--directory',
        outputDir,
        '--file-name',
        'waf-failed'
      ])
    ).rejects.toThrow('CLI exit');
    expect(exit).toHaveBeenCalledWith(1);
    expect(acquireChromeSession).not.toHaveBeenCalled();
    expect(readFileSync(existingFile, 'utf8')).toBe('previous complete download');
    expect(readdirSync(outputDir).some(file => file.endsWith('.part'))).toBe(false);
  });
});
