import { acquireChromeSession, BrowserTokenOptions } from './browser-token';
import { assertDataUrl, decodeData } from './data';
import { DukascopyAccessDeniedError, WafChallengeError, WafTokenError } from './errors';
import { isValidSession, WafSession, WafTokenCache } from './token-cache';
import debug from 'debug';
import { DATA_API_REFERER, DATA_API_USER_AGENT } from '../config/data-api';

export type WafMode = 'auto' | 'off';
export { DukascopyAccessDeniedError, WafChallengeError, WafTokenError } from './errors';
const log = debug('dukascopy-node:waf');

interface WafFetcherOptions extends BrowserTokenOptions {
  mode?: WafMode;
  tokenCache?: boolean;
  tokenCachePath?: string;
  requestTimeoutMs?: number;
  acquireSession?: (url: string) => Promise<WafSession>;
  fetchFn?: typeof fetch;
  onTokenAcquisition?: () => void;
}

/** Per-download transport with a shared disk cache. Chrome only runs during acquisition. */
export function createHeadlessWafFetcher(options: WafFetcherOptions = {}) {
  const requestTimeoutMs = options.requestTimeoutMs ?? 30_000;
  const fetchFn = options.fetchFn ?? fetch;
  const acquireSession = options.acquireSession ?? (url => acquireChromeSession(url, options));
  const cache =
    options.tokenCache === false || options.mode === 'off'
      ? undefined
      : new WafTokenCache(options.tokenCachePath);
  let session: WafSession | undefined;
  let tokenGeneration = 0;
  let acquiring: Promise<void> | undefined;
  let loading: Promise<void> | undefined;
  let accessDenied: DukascopyAccessDeniedError | undefined;
  const stats = { tokenAcquisitions: 0, httpRequests: 0 };
  const responseTokenUsage = new WeakMap<Response, boolean>();

  function loadCachedToken(): Promise<void> {
    if (!loading) {
      loading = (async () => {
        session = await cache?.read();
        if (session) {
          tokenGeneration++;
          log('Loaded WAF token from %s', cache?.path);
        }
      })();
    }
    return loading;
  }

  // Share acquisition among concurrent callers, including failures. A later call may retry.
  async function refreshToken(url: string): Promise<void> {
    assertDataUrl(url);
    if (accessDenied) throw accessDenied;
    await loadCachedToken();
    if (accessDenied) throw accessDenied;
    if (!acquiring) {
      acquiring = (async () => {
        const previousToken = session?.token;
        session = undefined;
        if (previousToken) {
          await cache?.invalidate(previousToken);
        }
        // Another in-flight request can be denied while disk invalidation
        // yields. Recheck before announcing or launching browser recovery.
        if (accessDenied) throw accessDenied;
        options.onTokenAcquisition?.();
        log('Acquiring token in a headless browser for %s', url);
        // Keep a token acquired while another request was denied. Callers still
        // stop at the access-denied checks before any further HTTP request.
        const nextSession = await acquireSession(url);
        if (!isValidSession(nextSession)) {
          throw new WafTokenError('Browser returned an invalid WAF session');
        }
        session = nextSession;
        tokenGeneration++;
        stats.tokenAcquisitions++;
        await cache?.write(nextSession);
        log('Token acquired; browser closed. Continuing with Node fetch.');
      })()
        .catch(error => {
          if (error instanceof DukascopyAccessDeniedError) {
            accessDenied ??= error;
          }
          throw accessDenied ?? error;
        })
        .finally(() => {
          acquiring = undefined;
        });
    }
    await acquiring;
  }

  async function fetchResponse(url: string): Promise<Response> {
    assertDataUrl(url);
    if (accessDenied) throw accessDenied;
    await loadCachedToken();

    // One HTTP attempt, plus at most one retry after a challenge-triggered refresh.
    for (let attempt = 0; attempt < 2; attempt++) {
      if (acquiring) {
        await acquiring;
      }
      if (accessDenied) throw accessDenied;
      const generationUsed = tokenGeneration;
      const tokenUsed = session?.token;
      stats.httpRequests++;
      const response = await fetchFn(url, {
        headers: {
          accept: 'application/json',
          referer: DATA_API_REFERER,
          'user-agent': session?.userAgent ?? DATA_API_USER_AGENT,
          ...(session ? { cookie: `aws-waf-token=${session.token}` } : {})
        },
        redirect: 'error',
        signal: AbortSignal.timeout(requestTimeoutMs)
      });
      responseTokenUsage.set(response, Boolean(tokenUsed));
      // Responses already in flight when another request is denied complete
      // normally, so their data is kept. The access-denied checks still stop
      // them from starting browser recovery or another attempt.
      const action = response.headers.get('x-amzn-waf-action');
      if (response.status !== 200 || action === 'challenge' || action === 'captcha') {
        log('HTTP %d %s (WAF token: %s)', response.status, url, tokenUsed ? 'yes' : 'no');
      }

      if (action === 'challenge' || action === 'captcha') {
        await response.body?.cancel();
        if (options.mode === 'off' || action === 'captcha' || attempt === 1) {
          if (tokenUsed) {
            if (tokenGeneration === generationUsed && !acquiring) {
              session = undefined;
            }
            await cache?.invalidate(tokenUsed);
          }
          throw new WafChallengeError(url, response.status, action);
        }
        // A late response for an older token must not trigger another browser launch.
        if (tokenGeneration === generationUsed) {
          await refreshToken(url);
        }
        continue;
      }

      if (response.status === 403) {
        // A plain access denial is not evidence that the cached token expired.
        // Retain the session and stop without another browser or HTTP attempt.
        // Concurrent denials report the first one.
        accessDenied ??= new DukascopyAccessDeniedError(url);
        await response.body?.cancel().catch(() => {});
        throw accessDenied;
      }

      return response;
    }
    throw new Error(`Dukascopy request failed for ${url}`);
  }

  // Retain the standalone prototype adapter, which deliberately prewarms Chrome.
  async function fetchBuffer(url: string): Promise<Buffer> {
    assertDataUrl(url);
    await loadCachedToken();
    if (options.mode !== 'off' && (!session || acquiring)) {
      await refreshToken(url);
    }
    const response = await fetchResponse(url);

    if (response.status !== 200) {
      await response.body?.cancel();
      throw new Error(`Dukascopy request failed for ${url} (HTTP ${response.status})`);
    }
    if (!(response.headers.get('content-type') || '').toLowerCase().includes('application/json')) {
      await response.body?.cancel();
      throw new Error(`Expected Dukascopy JSON for ${url}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    decodeData(url, buffer);
    return buffer;
  }

  return {
    fetchResponse,
    fetchBuffer,
    refreshToken,
    stats,
    wasTokenUsed: (response: Response) => responseTokenUsage.get(response)
  };
}
