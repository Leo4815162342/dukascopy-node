import debug from 'debug';
import { WafChallengeError, WafTokenError } from '../waf/errors';

const log = debug('dukascopy-node:rate-limit');
const MAX_RETRY_WAIT_MS = 5 * 60_000;

export const rateLimitDefaults = {
  requestIntervalMs: 0,
  rateLimitRetryCount: 3
};

export class RateLimitError extends Error {
  readonly code = 'DUKASCOPY_RATE_LIMIT';
  readonly status = 429;

  constructor(readonly url: string, readonly retries: number, readonly retryAfterMs?: number) {
    super(
      `Dukascopy returned status 429 (Too Many Requests) for ${url} after ${retries} rate-limit retries. ` +
        (retryAfterMs === undefined ? '' : `Retry-After: ${retryAfterMs} ms. `) +
        'Download stopped. Wait before trying again; a WAF token does not remove rate limits. ' +
        'For bulk exports, see https://www.dukascopy.com/wiki/en/development/data-export/'
    );
    this.name = 'RateLimitError';
  }
}

/** Retry-After accepts nonnegative whole seconds or an HTTP date. */
export function retryAfterMs(value: string | null, now = Date.now()): number | undefined {
  if (!value?.trim()) return undefined;
  const text = value.trim();
  if (/^\d+$/.test(text)) {
    const ms = Number(text) * 1000;
    return Number.isFinite(ms) ? ms : Number.MAX_SAFE_INTEGER;
  }
  // Do not let Date.parse interpret malformed numeric values as calendar dates.
  if (!/[a-z]/i.test(text)) return undefined;
  const date = Date.parse(text);
  return Number.isFinite(date) ? Math.max(0, date - now) : undefined;
}

/** Preserve batch concurrency by default, sharing a cooldown only when rate limited. */
export function createRateLimitedRequester(
  request: (url: string) => Promise<Response>,
  {
    requestIntervalMs = rateLimitDefaults.requestIntervalMs,
    rateLimitRetryCount = rateLimitDefaults.rateLimitRetryCount
  } = {}
) {
  for (const [name, value] of Object.entries({ requestIntervalMs, rateLimitRetryCount })) {
    if (!Number.isSafeInteger(value) || value < 0 || value > 2_147_483_647) {
      throw new RangeError(`${name} must be a nonnegative integer no greater than 2147483647`);
    }
  }
  let queue: Promise<void> = Promise.resolve();
  let nextRequestAt = 0;
  let stopped: Error | undefined;
  const waiting = new Set<() => void>();

  function stop(error: Error): Error {
    stopped ??= error;
    // Wake sleeping retries immediately instead of keeping the process alive after failure.
    for (const wake of waiting) wake();
    return stopped;
  }

  function waitForCooldown(ms: number): Promise<void> {
    return new Promise(resolve => {
      const wake = () => {
        clearTimeout(timer);
        waiting.delete(wake);
        resolve();
      };
      const timer = setTimeout(wake, ms);
      waiting.add(wake);
    });
  }

  async function performRequest(url: string): Promise<Response> {
    for (let attempt = 0; ; attempt++) {
      // Another in-flight response can extend the cooldown while this request waits.
      for (;;) {
        if (stopped) throw stopped;
        const pause = nextRequestAt - Date.now();
        if (pause <= 0) break;
        await waitForCooldown(pause);
      }
      let response: Response;
      try {
        response = await request(url);
      } catch (error) {
        // A terminal browser failure must not launch another browser for each queued file.
        if (error instanceof WafChallengeError || error instanceof WafTokenError) {
          stop(error);
        }
        throw error;
      } finally {
        // Recovery can take seconds and make another HTTP attempt. Start the interval
        // after it completes so the next file cannot immediately follow that retry.
        if (requestIntervalMs > 0) {
          nextRequestAt = Math.max(nextRequestAt, Date.now() + requestIntervalMs);
        }
      }
      if (response.status !== 429) return response;

      const retryAfter = retryAfterMs(response.headers.get('retry-after'));
      await response.body?.cancel();
      // Never shorten a server-mandated wait. Long waits fail with guidance instead.
      if (attempt >= rateLimitRetryCount || (retryAfter ?? 0) > MAX_RETRY_WAIT_MS) {
        throw stop(new RateLimitError(url, attempt, retryAfter));
      }
      const backoff = Math.min(60_000, 5000 * 2 ** attempt);
      const delay = Math.max(retryAfter ?? 0, backoff + Math.floor(Math.random() * 1000));
      nextRequestAt = Math.max(nextRequestAt, Date.now() + delay);
      log(
        'HTTP 429 for %s; pausing all requests for %d ms (retry %d/%d)',
        url,
        nextRequestAt - Date.now(),
        attempt + 1,
        rateLimitRetryCount
      );
    }
  }

  return (url: string): Promise<Response> => {
    // No queue on the default path: BufferFetcher controls concurrency through batchSize.
    if (requestIntervalMs === 0) return performRequest(url);
    const result = queue.then(() => performRequest(url));
    // A failed ordinary request must not poison the queue; exhausted 429s stop it explicitly.
    queue = result.then(
      () => {},
      () => {}
    );
    return result;
  };
}
