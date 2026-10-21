import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { chromium } from 'playwright-core';
import { acquireChromeSession } from './browser-token';

vi.mock('playwright-core', () => ({
  chromium: { launch: vi.fn(), executablePath: vi.fn(() => '/managed/chromium') }
}));
vi.mock('fs', async importOriginal => ({
  ...(await importOriginal<typeof import('fs')>()),
  existsSync: vi.fn(() => true)
}));

const url = 'https://jetta.dukascopy.com/v1/candles/minute/EUR-USD/BID/2026/7/10';
const body = readFileSync(
  resolve(__dirname, '../__mocks__/fixtures/candles-minute-EUR-USD-BID-2026-7-10.json')
);
const response = { body: vi.fn(async () => body) };
const page = {
  on: vi.fn(),
  evaluate: vi.fn(async () => 'Actual headless browser user agent'),
  waitForResponse: vi.fn(async () => response),
  goto: vi.fn(async () => {})
};
const context = {
  newPage: vi.fn(async () => page),
  cookies: vi.fn(async () => [{ name: 'aws-waf-token', value: 'test-token' }])
};
const browser = {
  newContext: vi.fn(async () => context),
  close: vi.fn(async () => {})
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(existsSync).mockReturnValue(true);
  vi.mocked(chromium.launch).mockResolvedValue(
    browser as unknown as Awaited<ReturnType<typeof chromium.launch>>
  );
});
afterEach(() => vi.useRealTimers());

describe('Headless browser token acquisition', () => {
  it('uses managed Chromium headlessly, extracts only its WAF cookie, and closes it', async () => {
    expect(await acquireChromeSession(url)).toEqual({
      token: 'test-token',
      userAgent: 'Actual headless browser user agent'
    });
    expect(chromium.launch).toHaveBeenCalledWith({
      channel: 'chromium',
      headless: true,
      timeout: 60_000
    });
    expect(context.cookies).toHaveBeenCalledWith(url);
    expect(browser.close).toHaveBeenCalledTimes(1);
  });

  it('falls back to installed Chrome when managed Chromium has not been installed', async () => {
    vi.mocked(existsSync).mockReturnValue(false);
    await acquireChromeSession(url);
    expect(chromium.launch).toHaveBeenCalledWith({
      channel: 'chrome',
      headless: true,
      timeout: 60_000
    });
  });

  it('honors a custom executable including Windows paths with spaces', async () => {
    const executablePath = 'C:\\Program Files\\Chromium\\chrome.exe';
    await acquireChromeSession(url, { executablePath });
    expect(chromium.launch).toHaveBeenCalledWith({
      executablePath,
      headless: true,
      timeout: 60_000
    });
  });

  it('provides a setup command if neither browser can be launched', async () => {
    vi.mocked(existsSync).mockReturnValue(false);
    vi.mocked(chromium.launch).mockRejectedValueOnce(new Error('Executable does not exist'));
    await expect(acquireChromeSession(url)).rejects.toThrow('dukascopy-node --install-browser');
    expect(browser.close).not.toHaveBeenCalled();
  });

  it('closes Chrome when navigation fails and does not expose challenge contents', async () => {
    page.goto.mockRejectedValueOnce(new Error('private challenge contents'));
    await expect(acquireChromeSession(url)).rejects.toThrow('Headless browser could not acquire');
    expect(browser.close).toHaveBeenCalledTimes(1);
  });

  it('rejects success without a token and closes Chrome', async () => {
    context.cookies.mockResolvedValueOnce([]);
    await expect(acquireChromeSession(url)).rejects.toThrow('Headless browser could not acquire');
    expect(browser.close).toHaveBeenCalledTimes(1);
  });

  it('bounds body reads as well as navigation and closes Chrome on timeout', async () => {
    vi.useFakeTimers();
    let bodyStarted!: () => void;
    const started = new Promise<void>(resolve => {
      bodyStarted = resolve;
    });
    response.body.mockImplementationOnce(() => {
      bodyStarted();
      return new Promise<Buffer>(() => {});
    });
    const result = expect(acquireChromeSession(url, { timeoutMs: 100 })).rejects.toThrow(
      'Headless browser could not acquire'
    );
    await started;
    await vi.advanceTimersByTimeAsync(101);
    await result;
    expect(browser.close).toHaveBeenCalledTimes(1);
  });
});
