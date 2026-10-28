import { mkdtemp, readFile, readdir, rm, stat, writeFile } from 'fs/promises';
import { homedir, tmpdir } from 'os';
import { dirname, join } from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createHeadlessWafFetcher, DukascopyAccessDeniedError, WafChallengeError } from '.';
import { WafTokenCache } from './token-cache';

const url = 'https://jetta.dukascopy.com/v1/candles/minute/BTC-USD/BID/2024/1/6';
const challenge = () =>
  new Response('', { status: 202, headers: { 'x-amzn-waf-action': 'challenge' } });
const success = () => new Response('{}', { headers: { 'content-type': 'application/json' } });
const session = (token: string) => ({ token, userAgent: 'Headless test browser' });
let directory: string;
let path: string;
let cache: WafTokenCache;

beforeEach(async () => {
  directory = await mkdtemp(join(tmpdir(), 'dukascopy-token-cache-'));
  path = join(directory, 'private', 'waf-token.json');
  cache = new WafTokenCache(path);
});
afterEach(async () => {
  await rm(directory, { recursive: true, force: true });
});

function client(options: Parameters<typeof createHeadlessWafFetcher>[0] = {}) {
  const acquireSession = vi.fn(async () => session('fresh-token'));
  const fetchFn = vi.fn<typeof fetch>().mockImplementation(async () => success());
  return {
    acquireSession,
    fetchFn,
    transport: createHeadlessWafFetcher({
      tokenCachePath: path,
      acquireSession,
      fetchFn,
      ...options
    })
  };
}

describe('WAF token disk cache', () => {
  it('uses a per-user location independent of the working directory', () => {
    expect(new WafTokenCache().path).toBe(join(homedir(), '.dukascopy-node', 'waf-token.json'));
  });

  it('creates private files and atomically replaces an existing token', async () => {
    await cache.write(session('old-token'));
    if (process.platform !== 'win32') {
      expect((await stat(dirname(path))).mode & 0o777).toBe(0o700);
      expect((await stat(path)).mode & 0o777).toBe(0o600);
    }
    await cache.write(session('replacement-token'));
    expect(await new WafTokenCache(path).read()).toEqual(session('replacement-token'));
    expect(await readdir(dirname(path))).toEqual(['waf-token.json']);
  });

  it.each([
    'not JSON',
    'null',
    '{}',
    JSON.stringify({ version: 1, origin: 'https://jetta.dukascopy.com', token: 'token' }),
    JSON.stringify({ version: 2, origin: 'https://jetta.dukascopy.com', token: 'token' }),
    JSON.stringify({
      version: 2,
      origin: 'https://jetta.dukascopy.com',
      token: 'token',
      userAgent: 'bad\r\nheader'
    }),
    JSON.stringify({ version: 2, origin: 'https://example.com', ...session('token') }),
    JSON.stringify({ version: 2, origin: 'https://jetta.dukascopy.com', ...session('bad;cookie') }),
    JSON.stringify({
      version: 2,
      origin: 'https://jetta.dukascopy.com',
      ...session('bad\r\nheader')
    })
  ])('ignores corrupt or incompatible cache contents: %s', async contents => {
    await cache.write(session('old-token'));
    await writeFile(path, contents);
    expect(await cache.read()).toBeUndefined();
  });

  it('treats missing files as cache misses and tolerates failed writes', async () => {
    expect(await cache.read()).toBeUndefined();
    const blockedParent = join(directory, 'file-not-directory');
    await writeFile(blockedParent, 'keep');
    const unavailableCache = new WafTokenCache(join(blockedParent, 'token.json'));
    await expect(unavailableCache.write(session('token'))).resolves.toBeUndefined();
    expect(await unavailableCache.read()).toBeUndefined();
    expect(await readFile(blockedParent, 'utf8')).toBe('keep');
  });

  it('leaves a complete cache record when clients write concurrently', async () => {
    await Promise.all(
      ['one', 'two', 'three'].map(token => new WafTokenCache(path).write(session(token)))
    );
    expect(['one', 'two', 'three']).toContain((await cache.read())?.token);
    expect(await readdir(dirname(path))).toEqual(['waf-token.json']);
  });

  it('does not invalidate a newer cached value', async () => {
    await cache.write(session('new-token'));
    await cache.invalidate('old-token');
    expect(await cache.read()).toEqual(session('new-token'));
    await cache.invalidate('new-token');
    expect(await cache.read()).toBeUndefined();
  });
});

describe('WAF transport persistence', () => {
  it('replaces a legacy token-only cache with the browser session on the next challenge', async () => {
    await cache.write(session('old-token'));
    await writeFile(
      path,
      JSON.stringify({
        version: 1,
        origin: 'https://jetta.dukascopy.com',
        token: 'legacy-token'
      })
    );
    const { transport, fetchFn, acquireSession } = client();
    fetchFn.mockResolvedValueOnce(challenge());
    await transport.fetchResponse(url);
    expect(fetchFn.mock.calls[0][1]?.headers).not.toHaveProperty('cookie');
    expect(acquireSession).toHaveBeenCalledTimes(1);
    expect(JSON.parse(await readFile(path, 'utf8'))).toMatchObject({
      version: 2,
      ...session('fresh-token')
    });
    expect(fetchFn.mock.calls[1][1]?.headers).toHaveProperty('user-agent', 'Headless test browser');
  });

  it('reuses an acquired token in a separate client without launching Chrome', async () => {
    const first = client();
    first.fetchFn.mockResolvedValueOnce(challenge());
    await first.transport.fetchResponse(url);
    expect(first.acquireSession).toHaveBeenCalledTimes(1);

    const second = client();
    await second.transport.fetchResponse(url);
    expect(second.acquireSession).not.toHaveBeenCalled();
    expect(second.fetchFn).toHaveBeenCalledTimes(1);
    expect(second.fetchFn.mock.calls[0][1]?.headers).toHaveProperty(
      'user-agent',
      'Headless test browser'
    );
    expect(second.fetchFn.mock.calls[0][1]?.headers).toHaveProperty(
      'cookie',
      'aws-waf-token=fresh-token'
    );
  });

  it('refreshes a rejected disk token once and saves the replacement', async () => {
    await cache.write(session('expired-token'));
    const { transport, fetchFn, acquireSession } = client();
    fetchFn.mockResolvedValueOnce(challenge());
    await transport.fetchResponse(url);
    expect(fetchFn.mock.calls[0][1]?.headers).toHaveProperty(
      'cookie',
      'aws-waf-token=expired-token'
    );
    expect(fetchFn.mock.calls[1][1]?.headers).toHaveProperty('cookie', 'aws-waf-token=fresh-token');
    expect(acquireSession).toHaveBeenCalledTimes(1);
    expect(await cache.read()).toEqual(session('fresh-token'));
  });

  it('coalesces concurrent refreshes of the same disk token', async () => {
    await cache.write(session('expired-token'));
    const { transport, fetchFn, acquireSession } = client();
    fetchFn.mockResolvedValueOnce(challenge()).mockResolvedValueOnce(challenge());
    await Promise.all([transport.fetchResponse(url), transport.fetchResponse(url)]);
    expect(acquireSession).toHaveBeenCalledTimes(1);
    expect(fetchFn).toHaveBeenCalledTimes(4);
    expect(await cache.read()).toEqual(session('fresh-token'));
  });

  it('removes a rejected token even if browser acquisition fails', async () => {
    await cache.write(session('expired-token'));
    const { transport, fetchFn, acquireSession } = client();
    fetchFn.mockResolvedValueOnce(challenge());
    acquireSession.mockRejectedValueOnce(new Error('Chrome unavailable'));
    await expect(transport.fetchResponse(url)).rejects.toThrow('Chrome unavailable');
    expect(await cache.read()).toBeUndefined();
  });

  it('does not retain a replacement that is also rejected', async () => {
    await cache.write(session('expired-token'));
    const { transport, fetchFn, acquireSession } = client();
    fetchFn.mockImplementation(async () => challenge());
    await expect(transport.fetchResponse(url)).rejects.toBeInstanceOf(WafChallengeError);
    expect(acquireSession).toHaveBeenCalledTimes(1);
    expect(await cache.read()).toBeUndefined();
  });

  it('continues downloading if persistence is unavailable', async () => {
    const blockedParent = join(directory, 'file-not-directory');
    await writeFile(blockedParent, 'keep');
    const { transport, fetchFn } = client({ tokenCachePath: join(blockedParent, 'token.json') });
    fetchFn.mockResolvedValueOnce(challenge());
    expect((await transport.fetchResponse(url)).status).toBe(200);
  });

  it('does not read or overwrite the cache when persistence is disabled', async () => {
    await cache.write(session('cached-token'));
    const { transport, fetchFn } = client({ tokenCache: false });
    fetchFn.mockResolvedValueOnce(challenge());
    await transport.fetchResponse(url);
    expect(fetchFn.mock.calls[0][1]?.headers).not.toHaveProperty('cookie');
    expect(fetchFn.mock.calls[1][1]?.headers).toHaveProperty('cookie', 'aws-waf-token=fresh-token');
    expect(await cache.read()).toEqual(session('cached-token'));
  });

  it('does not use the cache or Chrome when WAF handling is off', async () => {
    await cache.write(session('cached-token'));
    const { transport, fetchFn, acquireSession } = client({ mode: 'off' });
    fetchFn.mockResolvedValueOnce(challenge());
    await expect(transport.fetchResponse(url)).rejects.toBeInstanceOf(WafChallengeError);
    expect(fetchFn.mock.calls[0][1]?.headers).not.toHaveProperty('cookie');
    expect(acquireSession).not.toHaveBeenCalled();
    expect(await cache.read()).toEqual(session('cached-token'));
  });

  it('preserves a cached token on HTTP 429 and does not launch Chrome', async () => {
    await cache.write(session('cached-token'));
    const { transport, fetchFn, acquireSession } = client();
    fetchFn.mockResolvedValueOnce(new Response('', { status: 429 }));
    expect((await transport.fetchResponse(url)).status).toBe(429);
    expect(acquireSession).not.toHaveBeenCalled();
    expect(await cache.read()).toEqual(session('cached-token'));
  });

  it('preserves the disk and in-memory token on a plain HTTP 403 without launching Chrome', async () => {
    await cache.write(session('cached-token'));
    const contents = await readFile(path, 'utf8');
    const { transport, fetchFn, acquireSession } = client();
    fetchFn.mockResolvedValueOnce(new Response('', { status: 403 }));

    await expect(transport.fetchResponse(url)).rejects.toBeInstanceOf(DukascopyAccessDeniedError);
    expect(await readFile(path, 'utf8')).toBe(contents);
    expect(await cache.read()).toEqual(session('cached-token'));
    expect(acquireSession).not.toHaveBeenCalled();

    // This download stays stopped, while a fresh transport for a later manual
    // attempt can still reuse the unchanged session from disk.
    await expect(transport.fetchResponse(url)).rejects.toBeInstanceOf(DukascopyAccessDeniedError);
    expect(fetchFn).toHaveBeenCalledTimes(1);
    const next = client();
    expect((await next.transport.fetchResponse(url)).status).toBe(200);
    expect(next.fetchFn.mock.calls[0][1]?.headers).toHaveProperty(
      'cookie',
      'aws-waf-token=cached-token'
    );
    expect(next.acquireSession).not.toHaveBeenCalled();
  });

  it('does not launch Chrome if access is denied while token invalidation is pending', async () => {
    await cache.write(session('cached-token'));
    let invalidationStarted!: () => void;
    const started = new Promise<void>(resolve => {
      invalidationStarted = resolve;
    });
    let releaseInvalidation!: () => void;
    const gate = new Promise<void>(resolve => {
      releaseInvalidation = resolve;
    });
    const invalidate = vi
      .spyOn(WafTokenCache.prototype, 'invalidate')
      .mockImplementationOnce(() => {
        invalidationStarted();
        return gate;
      });
    let respondDenied!: (response: Response) => void;
    const onTokenAcquisition = vi.fn();
    const { transport, fetchFn, acquireSession } = client({ onTokenAcquisition });
    fetchFn.mockResolvedValueOnce(challenge()).mockReturnValueOnce(
      new Promise(resolve => {
        respondDenied = resolve;
      })
    );
    const challenged = transport.fetchResponse(url);
    const denied = transport.fetchResponse(url);
    const results = Promise.allSettled([challenged, denied]);
    try {
      await started;
      expect(fetchFn).toHaveBeenCalledTimes(2);
      respondDenied(new Response('', { status: 403 }));
      const error = await denied.catch(error => error);
      expect(error).toBeInstanceOf(DukascopyAccessDeniedError);
      releaseInvalidation();
      expect(await results).toEqual(Array(2).fill({ status: 'rejected', reason: error }));
      expect(acquireSession).not.toHaveBeenCalled();
      expect(onTokenAcquisition).not.toHaveBeenCalled();
      expect(fetchFn).toHaveBeenCalledTimes(2);
    } finally {
      releaseInvalidation();
      respondDenied(new Response('', { status: 403 }));
      await results;
      invalidate.mockRestore();
    }
  });

  it('keeps a token acquired while another request is denied', async () => {
    let acquisitionStarted!: () => void;
    const started = new Promise<void>(resolve => {
      acquisitionStarted = resolve;
    });
    let finishAcquisition!: () => void;
    const { transport, fetchFn, acquireSession } = client();
    acquireSession.mockImplementationOnce(
      () =>
        new Promise<ReturnType<typeof session>>(resolve => {
          acquisitionStarted();
          finishAcquisition = () => resolve(session('fresh-token'));
        })
    );
    let respondDenied!: (response: Response) => void;
    fetchFn.mockResolvedValueOnce(challenge()).mockReturnValueOnce(
      new Promise(resolve => {
        respondDenied = resolve;
      })
    );
    const challenged = transport.fetchResponse(url);
    const denied = transport.fetchResponse(url);
    await started;
    respondDenied(new Response('', { status: 403 }));
    const error = await denied.catch((error: unknown) => error);
    expect(error).toBeInstanceOf(DukascopyAccessDeniedError);

    finishAcquisition();
    await expect(challenged).rejects.toBe(error);
    expect(await cache.read()).toEqual(session('fresh-token'));
    expect(fetchFn).toHaveBeenCalledTimes(2);
  });
});
