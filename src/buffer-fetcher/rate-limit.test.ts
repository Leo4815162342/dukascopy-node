import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createRateLimitedRequester, RateLimitError, retryAfterMs } from './rate-limit';
import { DukascopyAccessDeniedError } from '../waf/errors';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-10-19T12:00:00Z'));
  vi.spyOn(Math, 'random').mockReturnValue(0);
});
afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('Retry-After', () => {
  it.each([
    ['12', 12_000],
    ['0', 0],
    [' 15 ', 15_000],
    ['Mon, 19 Oct 2026 12:00:40 GMT', 40_000],
    ['Mon, 19 Oct 2026 11:00:00 GMT', 0],
    [null, undefined],
    ['', undefined],
    ['-1', undefined],
    ['1.5', undefined],
    ['invalid', undefined]
  ])('parses %s', (value, expected) => {
    expect(retryAfterMs(value)).toBe(expected);
  });
});

describe('concurrent requests and optional pacing', () => {
  it('starts concurrent requests by default before any response arrives', async () => {
    const responses = new Map<string, (response: Response) => void>();
    const request = vi.fn(
      (url: string) =>
        new Promise<Response>(resolve => {
          responses.set(url, resolve);
        })
    );
    const fetch = createRateLimitedRequester(request);
    const result = Promise.all(['a', 'b', 'c'].map(fetch));
    expect(request.mock.calls).toEqual([['a'], ['b'], ['c']]);
    for (const url of ['c', 'b', 'a']) responses.get(url)!(new Response(url));
    expect(await Promise.all((await result).map(r => r.text()))).toEqual(['a', 'b', 'c']);
  });

  it('does not clear a shared cooldown when an in-flight request succeeds', async () => {
    let finishSlow!: (response: Response) => void;
    const request = vi.fn((url: string) => {
      if (url === 'slow')
        return new Promise<Response>(resolve => {
          finishSlow = resolve;
        });
      return Promise.resolve(
        new Response('', { status: request.mock.calls.length === 1 ? 429 : 200 })
      );
    });
    const fetch = createRateLimitedRequester(request);
    const first = fetch('a');
    const slow = fetch('slow');
    await vi.advanceTimersByTimeAsync(0);
    const later = fetch('later');
    await vi.advanceTimersByTimeAsync(1000);
    finishSlow(new Response('ok'));
    await vi.advanceTimersByTimeAsync(3999);
    expect(request.mock.calls).toEqual([['a'], ['slow']]);
    await vi.advanceTimersByTimeAsync(1);
    await Promise.all([first, slow, later]);
    expect(
      request.mock.calls
        .slice(2)
        .map(([url]) => url)
        .sort()
    ).toEqual(['a', 'later']);
  });

  it('rechecks the deadline when another 429 extends a cooldown already being awaited', async () => {
    let finishSlow!: (response: Response) => void;
    const attempts = new Map<string, number>();
    const request = vi.fn((url: string) => {
      const attempt = (attempts.get(url) ?? 0) + 1;
      attempts.set(url, attempt);
      if (url === 'b' && attempt === 1)
        return new Promise<Response>(resolve => {
          finishSlow = resolve;
        });
      return Promise.resolve(
        new Response('', { status: url === 'a' && attempt === 1 ? 429 : 200 })
      );
    });
    const fetch = createRateLimitedRequester(request);
    const a = fetch('a');
    const b = fetch('b');
    await vi.advanceTimersByTimeAsync(0);
    const later = fetch('later');
    await vi.advanceTimersByTimeAsync(2000);
    finishSlow(new Response('', { status: 429, headers: { 'retry-after': '10' } }));
    await vi.advanceTimersByTimeAsync(9999);
    expect(request.mock.calls).toEqual([['a'], ['b']]);
    await vi.advanceTimersByTimeAsync(1);
    await Promise.all([a, b, later]);
    expect(
      request.mock.calls
        .slice(2)
        .map(([url]) => url)
        .sort()
    ).toEqual(['a', 'b', 'later']);
  });

  it('spaces a full batch of 24 requests and preserves result order', async () => {
    const startedAt: number[] = [];
    const request = vi.fn(async (url: string) => {
      startedAt.push(Date.now());
      return new Response(url);
    });
    const fetch = createRateLimitedRequester(request, { requestIntervalMs: 1000 });
    const results = Promise.all(Array.from({ length: 24 }, (_, i) => fetch(String(i))));
    await vi.runAllTimersAsync();
    expect(await Promise.all((await results).map(r => r.text()))).toEqual(
      Array.from({ length: 24 }, (_, i) => String(i))
    );
    expect(startedAt.slice(1).map((time, i) => time - startedAt[i])).toEqual(Array(23).fill(1000));
  });

  it('holds every queued file during backoff and retries only the rejected file', async () => {
    const request = vi
      .fn()
      .mockResolvedValueOnce(new Response('', { status: 429 }))
      .mockImplementation(async () => new Response('ok'));
    const fetch = createRateLimitedRequester(request, { requestIntervalMs: 1000 });
    const results = Promise.all([fetch('a'), fetch('b'), fetch('c')]);
    await vi.advanceTimersByTimeAsync(4999);
    expect(request.mock.calls).toEqual([['a']]);
    await vi.advanceTimersByTimeAsync(1);
    expect(request.mock.calls).toEqual([['a'], ['a']]);
    await vi.advanceTimersByTimeAsync(2000);
    await results;
    expect(request.mock.calls).toEqual([['a'], ['a'], ['b'], ['c']]);
  });

  it('retains the interval after a slow request or browser recovery', async () => {
    const times: number[] = [];
    const start = Date.now();
    const request = vi.fn(async () => {
      times.push(Date.now() - start);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return new Response('ok');
    });
    const fetch = createRateLimitedRequester(request, { requestIntervalMs: 1000 });
    const result = Promise.all([fetch('a'), fetch('b')]);
    await vi.runAllTimersAsync();
    await result;
    expect(times).toEqual([0, 3000]);
  });

  it.each(['30', 'Mon, 19 Oct 2026 12:00:30 GMT'])(
    'honors the longer Retry-After %s',
    async retryAfter => {
      const request = vi
        .fn()
        .mockResolvedValueOnce(
          new Response('', { status: 429, headers: { 'retry-after': retryAfter } })
        )
        .mockImplementation(async () => new Response('ok'));
      const result = createRateLimitedRequester(request)('a');
      await vi.advanceTimersByTimeAsync(29_999);
      expect(request).toHaveBeenCalledTimes(1);
      await vi.advanceTimersByTimeAsync(1);
      expect((await result).status).toBe(200);
      expect(request).toHaveBeenCalledTimes(2);
    }
  );

  it('cancels rejected bodies, bounds exponential retries and stops queued files', async () => {
    const times: number[] = [];
    const bodies: ReadableStream[] = [];
    const start = Date.now();
    const request = vi.fn(async () => {
      times.push(Date.now() - start);
      const response = new Response('Too many requests', { status: 429 });
      bodies.push(response.body!);
      return response;
    });
    const fetch = createRateLimitedRequester(request, { requestIntervalMs: 1000 });
    const result = Promise.allSettled([fetch('a'), fetch('b'), fetch('c')]);
    await vi.runAllTimersAsync();
    const errors = (await result).map(r => r.status === 'rejected' && r.reason);
    expect(times).toEqual([0, 5000, 15_000, 35_000]);
    expect(errors.every(error => error instanceof RateLimitError)).toBe(true);
    expect(errors[0]).toMatchObject({ url: 'a', retries: 3, status: 429 });
    for (const body of bodies) expect(await body.getReader().read()).toMatchObject({ done: true });
    expect(request).toHaveBeenCalledTimes(4);
  });

  it('fails without retrying early when the server asks for a very long wait', async () => {
    const request = vi.fn(
      async () =>
        new Response('', {
          status: 429,
          headers: { 'retry-after': '3600' }
        })
    );
    await expect(createRateLimitedRequester(request)('a')).rejects.toMatchObject({
      retryAfterMs: 3_600_000,
      retries: 0
    });
    expect(request).toHaveBeenCalledTimes(1);
  });

  it('cancels cooldown timers when a concurrent request stops the download', async () => {
    let finishSlow!: (response: Response) => void;
    const request = vi.fn((url: string) =>
      url === 'slow'
        ? new Promise<Response>(resolve => {
            finishSlow = resolve;
          })
        : Promise.resolve(new Response('', { status: 429 }))
    );
    const fetch = createRateLimitedRequester(request);
    const result = Promise.allSettled([fetch('a'), fetch('slow')]);
    await vi.advanceTimersByTimeAsync(1000);
    finishSlow(new Response('', { status: 429, headers: { 'retry-after': '3600' } }));
    expect((await result).every(item => item.status === 'rejected')).toBe(true);
    expect(vi.getTimerCount()).toBe(0);
    expect(request).toHaveBeenCalledTimes(2);
  });

  it('can disable 429 retries and does not retry other HTTP failures', async () => {
    const request = vi.fn(async () => new Response('', { status: 429 }));
    await expect(
      createRateLimitedRequester(request, { rateLimitRetryCount: 0 })('a')
    ).rejects.toBeInstanceOf(RateLimitError);
    expect(request).toHaveBeenCalledTimes(1);
    const unavailable = vi.fn(async () => new Response('', { status: 503 }));
    expect((await createRateLimitedRequester(unavailable)('a')).status).toBe(503);
    expect(unavailable).toHaveBeenCalledTimes(1);
  });

  it('releases the queue after an ordinary network failure', async () => {
    const request = vi
      .fn()
      .mockRejectedValueOnce(new Error('network'))
      .mockImplementation(async () => new Response('ok'));
    const fetch = createRateLimitedRequester(request, { requestIntervalMs: 1000 });
    const result = Promise.allSettled([fetch('a'), fetch('b')]);
    await vi.runAllTimersAsync();
    expect((await result).map(r => r.status)).toEqual(['rejected', 'fulfilled']);
  });

  it('stops queued requests and later calls immediately after an access denial', async () => {
    const error = new DukascopyAccessDeniedError('https://jetta.dukascopy.com/denied');
    const request = vi.fn(async () => {
      throw error;
    });
    const fetch = createRateLimitedRequester(request, { requestIntervalMs: 1000 });
    const result = await Promise.allSettled([fetch('a'), fetch('b'), fetch('c')]);
    expect(result).toEqual(Array(3).fill({ status: 'rejected', reason: error }));
    await expect(fetch('later')).rejects.toBe(error);
    expect(request).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it('wakes concurrent rate-limit cooldowns immediately when access is denied', async () => {
    let denySlow!: (error: Error) => void;
    const error = new DukascopyAccessDeniedError('https://jetta.dukascopy.com/denied');
    const request = vi.fn((url: string) =>
      url === 'slow'
        ? new Promise<Response>((_, reject) => {
            denySlow = reject;
          })
        : Promise.resolve(new Response('', { status: 429 }))
    );
    const fetch = createRateLimitedRequester(request);
    const result = Promise.allSettled([fetch('rate-limited'), fetch('slow')]);
    await vi.advanceTimersByTimeAsync(1000);
    expect(vi.getTimerCount()).toBe(1);
    denySlow(error);
    expect(await result).toEqual(Array(2).fill({ status: 'rejected', reason: error }));
    expect(vi.getTimerCount()).toBe(0);
    expect(request).toHaveBeenCalledTimes(2);
  });

  it.each([-1, NaN, Infinity, 0.5, 2_147_483_648])('rejects unsafe options: %s', value => {
    expect(() => createRateLimitedRequester(vi.fn(), { requestIntervalMs: value })).toThrow(
      RangeError
    );
    expect(() => createRateLimitedRequester(vi.fn(), { rateLimitRetryCount: value })).toThrow(
      RangeError
    );
  });
});
