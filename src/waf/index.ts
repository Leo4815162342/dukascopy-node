import { acquireChromeSession, BrowserTokenOptions } from './browser-token';
import { assertDataUrl, decodeData } from './data';
import { WafChallengeError, WafTokenError } from './errors';
import { isValidSession, WafSession, WafTokenCache } from './token-cache';
import debug from 'debug';

export type WafMode = 'auto' | 'off';
export { WafChallengeError, WafTokenError } from './errors';
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
  const stats = { tokenAcquisitions: 0, httpRequests: 0 };

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
    await loadCachedToken();
    if (!acquiring) {
      acquiring = (async () => {
        const previousToken = session?.token;
        session = undefined;
        if (previousToken) {
          await cache?.invalidate(previousToken);
        }
        options.onTokenAcquisition?.();
        log('Acquiring token in a headless browser for %s', url);
        const nextSession = await acquireSession(url);
        if (!isValidSession(nextSession)) {
          throw new WafTokenError('Browser returned an invalid WAF session');
        }
        session = nextSession;
        tokenGeneration++;
        stats.tokenAcquisitions++;
        await cache?.write(nextSession);
        log('Token acquired; browser closed. Continuing with Node fetch.');
      })().finally(() => {
        acquiring = undefined;
      });
    }
    await acquiring;
  }

  async function fetchResponse(url: string): Promise<Response> {
    assertDataUrl(url);
    await loadCachedToken();

    // One HTTP attempt, plus at most one retry after a challenge-triggered refresh.
    for (let attempt = 0; attempt < 2; attempt++) {
      if (acquiring) {
        await acquiring;
      }
      const generationUsed = tokenGeneration;
      const tokenUsed = session?.token;
      stats.httpRequests++;
      const response = await fetchFn(url, {
        headers: {
          accept: 'application/json',
          ...(session
            ? { cookie: `aws-waf-token=${session.token}`, 'user-agent': session.userAgent }
            : {})
        },
        redirect: 'error',
        signal: AbortSignal.timeout(requestTimeoutMs)
      });
      const action = response.headers.get('x-amzn-waf-action');
      log('HTTP %d %s (WAF token: %s)', response.status, url, tokenUsed ? 'yes' : 'no');

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

  return { fetchResponse, fetchBuffer, refreshToken, stats };
}
