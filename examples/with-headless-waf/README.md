# Headless browser WAF recovery

The Node API and CLI now recover AWS WAF challenges automatically. A challenged
request launches invisible Chromium or Chrome in an isolated temporary session, lets
Dukascopy's challenge script run, reads the fresh `aws-waf-token`, and closes
the browser. Node then retries with that cookie, the actual browser `User-Agent`,
and `Accept: application/json`. The token and user agent are saved to `~/.dukascopy-node/waf-token.json` and reused by subsequent
CLI processes and Node API calls before attempting browser recovery.

Requires **Node.js 20+**. `playwright-core` is a required runtime dependency;
Google Chrome is optional. Use the setup command to download the matching full
Chromium build on Windows, macOS, or Linux. The browser uses an isolated temporary
profile and runs in new headless mode (`channel: 'chromium'`).

## Beta setup

These commands work in PowerShell, Command Prompt, and macOS/Linux shells:

```sh
npx dukascopy-node@beta --install-browser
npx dukascopy-node@beta -i btcusd -from 2024-01-06 -to 2024-01-07 -t m1 -f json --debug
```

For projects installing the library, use `npm install dukascopy-node@beta`, then
`npx dukascopy-node --install-browser`. On Linux, add `--with-deps` to install
system libraries (administrator access may be required). The setup command uses
the package's own Playwright version, supports its `PLAYWRIGHT_BROWSERS_PATH`
environment variable, and does not need instrument or date arguments.

The installer is explicit; npm install does not download a browser. If setup is
skipped, an existing Google Chrome installation can be used. If neither browser
is available, the error explains how to run setup. Custom `chromePath` settings
take priority. Repeat setup after a Playwright dependency upgrade.

## Run the integrated clients from this checkout

```sh
pnpm install
pnpm build
node dist/cli/index.js --install-browser
```

Node API:

```js
const { getHistoricalRates } = require('./dist/index.js');

async function main() {
  const candles = await getHistoricalRates({
    instrument: 'btcusd',
    dates: { from: '2024-01-06', to: '2024-01-07' },
    timeframe: 'm1',
    format: 'json',
    volumes: true,
    ignoreFlats: false,
    batchSize: 1,
    pauseBetweenBatchesMs: 2000,
    wafMode: 'auto' // Default; also supported by getRealTimeRates.
  });
  console.log(candles.length, candles[0], candles[candles.length - 1]);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
```

Set `DEBUG=dukascopy-node:waf` when running the Node example to see the flow.

CLI:

```sh
node dist/cli/index.js -i btcusd -from 2024-01-06 -to 2024-01-07 \
  -t m1 -f json -v --flats --batch-size 1 --batch-pause 2000 \
  --directory .cache/waf-live --file-name cli-btcusd-m1 --debug
```

For a nonstandard Chrome/Chromium installation, use `chromePath` in Node or
`--chrome-path <executable>` in the CLI. Token acquisition defaults to a 60-second
timeout, configurable through `wafTimeoutMs` / `--waf-timeout <ms>`.
Use `wafMode: 'off'` / `--waf-mode off` to disable token caching and browser recovery.

Persistence is enabled by default, independently of the market-data cache:

| Node option | CLI option | Behavior |
| --- | --- | --- |
| `wafTokenCache: false` | `--no-waf-token-cache` | Keep tokens in memory for this download only |
| `wafTokenCachePath: '/path/token.json'` | `--waf-token-cache-path /path/token.json` | Override the per-user token file |

Delete the token file to clear it. Its contents are an opaque token, browser user agent,
origin, format version, and save time. Version 1 files are ignored because they lack
the user agent; the next browser acquisition writes a version 2 session. Expiry is determined by the server: a rejected
token is removed, and successful browser acquisition saves a replacement.
Missing or corrupt files are ignored; an unwritable cache falls back to memory.
Files are atomically replaced with mode `0600`, and new directories use `0700`
on macOS/Linux. On Windows, the default token path is
`%USERPROFILE%\.dukascopy-node\waf-token.json`; Windows account permissions apply.
Concurrent cold CLI processes may each acquire a token; the
single-acquisition guarantee applies within one download.

## Behavior

- Successful native HTTP requests do not launch a browser. Concurrent challenged
  requests within a download share acquisition. Batches reuse the in-memory
  token, and later downloads load it from disk.
- Each request gets at most one challenge-triggered recovery, including when
  ordinary retries are zero. Late responses for older tokens reuse the newer
  token. Persistent challenges, CAPTCHA, or failed browser acquisition report
  typed errors instead of repeatedly launching browsers.
- The built-in downloader runs up to 10 file requests concurrently by default,
  with a 1000 ms pause between batches. Per-request pacing defaults to zero;
  setting a positive interval opts into sequential requests. HTTP 429 pauses new
  requests and retries while in-flight requests finish, retrying each rejected file up to
  three times with backoff (5, 10, 20 seconds plus jitter) and `Retry-After` handling.
  `requestIntervalMs` / `--request-interval` and `rateLimitRetryCount` /
  `--rate-limit-retries` configure these separately from ordinary retries. Exhaustion
  stops queued network requests with `RateLimitError`. HTTP 429 does not trigger
  token refresh. The standalone diagnostic uses a custom fetcher and its own batching.
- JSON is validated before caching. Valid empty-market JSON remains cacheable;
  failed zero-byte responses are not cached, and old zero-byte cache entries are
  fetched again. By default, download failures throw even with zero retries.
- The CLI writes a temporary file and moves it to the requested destination only
  after success. A failed download removes its partial file and preserves an
  existing destination.
- Tokens are only sent to Dukascopy's HTTPS data origin; redirects are rejected.
  Only the WAF cookie and its browser user agent are persisted; other cookies and
  challenge bodies are not saved.
  Cookie values are never logged.
  The browser always closes after acquisition; there is no visible-browser fallback.

## Standalone diagnostic prototype

The original prototype remains available. It disables disk token caching, eagerly
acquires a token before its first Node request, and prints source/decoded row
counts and request counters:

```sh
pnpm prototype:waf
pnpm prototype:waf --verify-refresh
pnpm prototype:waf 'https://jetta.dukascopy.com/v1/ticks/USD-CAD/2026/10/16/19'
```

Set `CHROME_PATH` to override Chrome's executable for this diagnostic script.
`--verify-refresh` explicitly acquires a second token and downloads again;
it does not wait for natural token expiry. The integrated clients instead wait
for a challenge before acquiring or refreshing a token.

## Verification

```sh
pnpm test
pnpm type-check
pnpm lint
pnpm build
```

Tests in `src/waf` cover browser cleanup, timeout handling, token refresh and
concurrency, disk token reuse and invalidation, private file permissions, Node API
recovery, CLI flags, and failure cleanup. Other fetcher and cache tests cover error
propagation and cache integrity. Browser setup tests verify exact-version CLI
resolution, shell-free execution, setup failures, and custom Windows paths.
The browser packaging verification passed all 194 tests then present, type checking,
lint, and the CJS/ESM/declaration builds. See the later multi-file verification below.

CI is configured to run tests, builds, browser installation, and a headless
launch smoke check on Windows, macOS, and Linux (Node 22, plus Node 20 on Linux).
The smoke check uses a local page, avoiding dependence on upstream WAF acceptance.
The ESM CLI setup entry is also checked after building.

The beta was packed and installed into an isolated project with production
dependencies only and install scripts disabled. Its setup command and a real Node
API download succeeded using managed Chromium 156.0.8078.4 on macOS. Both the CLI
and packaged Node API completed fresh WAF recovery with token caching disabled
and returned the same 1,440 BTC/USD minute candles. The final tarball's ESM setup
entry also passed. Windows/Linux runtime checks are configured in CI and have not
been executed locally. Evidence is in `.cache/waf-live/beta-verification.json`.

The live persistence check on October 19, 2026 used separate CLI processes with
the default per-user cache. The first process acquired and saved a token in
2.1 seconds; the second loaded it and received HTTP 200 without launching Chrome
in 62 ms. A separate Node API process then reused the CLI's token successfully,
even with an invalid Chrome executable path configured. All three downloads
matched exactly (1,440 BTC/USD minute candles). File mode was verified as `0600`.
Logs, outputs, and `persistence-verification.json` are in `.cache/waf-live/`.

On October 19, 2026, both built clients (`dist/index.js` and `dist/cli/index.js`)
were initially tested against the BTC/USD minute endpoint for January 6, 2024,
before token persistence was added and with market-data caching disabled. Each
independently received HTTP 202, acquired a fresh token in headless
Chrome, closed Chrome, and received HTTP 200 through Node fetch. Their outputs
matched exactly: 1,440 candles from 00:00 through 23:59 UTC. The Node run took
2.8 seconds and the CLI run took 1.9 seconds. Local outputs and verification are
saved under `.cache/waf-live/` (gitignored). All 164 tests, type checking, lint,
and the CJS/ESM/declaration builds passed.

The original live prototype test on macOS / Node 24 downloaded 1,438 source
candles for January 6, 2024. The existing decoder adds flat candles for missing
minutes, producing 1,440 candles spanning 00:00 through 23:59 UTC. That single-file
test did not expose the user-agent requirement later observed across multiple files.
Natural token expiry was
not observed; mocked responses cover challenge-triggered refresh.

A subsequent multi-file investigation isolated a user-agent-dependent 429: the same
file succeeded with the browser user agent and failed with Node's default, independent
of Accept, language, or referrer. Sessions now persist the actual browser user agent
alongside the token, while bounded retries handle genuine rate limits.

The fixed clients were then verified with the full BTC/USD tick day from January 13,
2019: all 24 hourly files returned HTTP 200 with no 429s. The CLI completed in 27.4
seconds using managed headless Chromium; a separate Node process reused its saved
session without launching a browser and completed in 23.6 seconds. Both produced
identical CSV content containing 20,986 ticks. All 228 tests, type checking, lint,
and builds pass. Logs and `rate-limit/verification.json` are in `.cache/waf-live/`.

Concurrent batching was subsequently restored as the default (10 files at once,
1000 ms between batches, no per-request pacing). The same 24-file request succeeded
with a measured peak of 10 concurrent HTTP calls and no 429s: the CLI took 7.6 seconds
including one shared session refresh, and the Node API took 2.2 seconds with the cached
session. Both CSVs matched the sequential result exactly (20,986 ticks). All 234 tests,
type checking, lint, and builds pass. Evidence is in
`.cache/waf-live/concurrent/verification.json`.

References: [Playwright browser launch](https://playwright.dev/docs/api/class-browsertype#browser-type-launch),
[AWS WAF token acquisition](https://docs.aws.amazon.com/waf/latest/developerguide/waf-js-challenge-api-get-token.html).
