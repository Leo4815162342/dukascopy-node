import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { chromium } from 'playwright-core';
import { acquireChromeSession } from './browser-token';
import { DukascopyAccessDeniedError, WafTokenError } from './errors';

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
  function notify(status: number, action?: string, target = url) {
    const listener = page.on.mock.calls.find(([event]) => event === 'response')?.[1];
    expect(listener).toBeTypeOf('function');
    listener({
      url: () => target,
      status: () => status,
      headers: () => (action ? { 'x-amzn-waf-action': action } : {})
    });
  }

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

  it('stops immediately on challenge followed by plain 403 without waiting for navigation', async () => {
    vi.useFakeTimers();
    page.waitForResponse.mockImplementationOnce(() => new Promise(() => {}));
    page.goto.mockImplementationOnce(() => {
      notify(202, 'challenge');
      notify(403);
      return new Promise(() => {});
    });
    await expect(acquireChromeSession(url, { timeoutMs: 60_000 })).rejects.toMatchObject({
      name: 'DukascopyAccessDeniedError',
      code: 'DUKASCOPY_ACCESS_DENIED',
      status: 403,
      url
    });
    expect(browser.close).toHaveBeenCalledTimes(1);
    expect(response.body).not.toHaveBeenCalled();
    expect(context.cookies).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('does not classify subresource failures or explicit challenges as plain access denials', async () => {
    page.goto.mockImplementationOnce(async () => {
      notify(403, undefined, 'https://example.com/unrelated-resource');
      notify(202, 'challenge');
      notify(403, 'challenge');
      notify(200);
    });
    expect(await acquireChromeSession(url)).toEqual({
      token: 'test-token',
      userAgent: 'Actual headless browser user agent'
    });
    expect(browser.close).toHaveBeenCalledTimes(1);
  });

  it.each(['context', 'page'] as const)(
    'wraps %s setup failures as terminal token errors',
    async stage => {
      const operation = stage === 'context' ? browser.newContext : context.newPage;
      operation.mockRejectedValueOnce(new Error('private browser setup details'));
      const result = acquireChromeSession(url);
      await expect(result).rejects.toBeInstanceOf(WafTokenError);
      await expect(result).rejects.not.toThrow('private browser setup details');
      expect(browser.close).toHaveBeenCalledTimes(1);
    }
  );

  it.each(['context', 'page'] as const)(
    'bounds hanging %s setup and closes the browser',
    async stage => {
      vi.useFakeTimers();
      let setupStarted!: () => void;
      const started = new Promise<void>(resolve => {
        setupStarted = resolve;
      });
      const operation = stage === 'context' ? browser.newContext : context.newPage;
      operation.mockImplementationOnce((): Promise<never> => {
        setupStarted();
        return new Promise(() => {});
      });
      const result = expect(acquireChromeSession(url, { timeoutMs: 100 })).rejects.toBeInstanceOf(
        WafTokenError
      );
      await started;
      await vi.advanceTimersByTimeAsync(101);
      await result;
      expect(browser.close).toHaveBeenCalledTimes(1);
      expect(vi.getTimerCount()).toBe(0);
    }
  );

  it('preserves the access-denied error when browser cleanup also fails', async () => {
    page.waitForResponse.mockImplementationOnce(() => new Promise(() => {}));
    page.goto.mockImplementationOnce(async () => {
      notify(403);
    });
    browser.close.mockRejectedValueOnce(new Error('private cleanup details'));
    const result = acquireChromeSession(url);
    await expect(result).rejects.toBeInstanceOf(DukascopyAccessDeniedError);
    await expect(result).rejects.not.toThrow('private cleanup details');
    expect(browser.close).toHaveBeenCalledTimes(1);
  });

  it('preserves terminal token failure when navigation and browser cleanup both fail', async () => {
    page.goto.mockRejectedValueOnce(new Error('private navigation details'));
    browser.close.mockRejectedValueOnce(new Error('private cleanup details'));
    const result = acquireChromeSession(url);
    await expect(result).rejects.toBeInstanceOf(WafTokenError);
    await expect(result).rejects.toThrow('Headless browser could not acquire');
    expect(browser.close).toHaveBeenCalledTimes(1);
  });

  it('reports cleanup failures after success as terminal token errors', async () => {
    browser.close.mockRejectedValueOnce(new Error('private cleanup details'));
    await expect(acquireChromeSession(url)).rejects.toMatchObject({
      code: 'DUKASCOPY_WAF_TOKEN',
      message: 'Could not close the headless WAF browser'
    });
    expect(browser.close).toHaveBeenCalledTimes(1);
  });
});
