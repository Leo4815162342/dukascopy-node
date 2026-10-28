# Browser setup and download examples

Requires Node.js 20 or higher. Downloads may require Chromium or Google Chrome;
the browser runs in the background.

## Setup

Install Chromium if Google Chrome is not available, then download data:

```sh
npx dukascopy-node --install-browser
npx dukascopy-node -i btcusd -from 2024-01-06 -to 2024-01-07 -t m1 -f json
```

For a project with the package already installed, use
`npx dukascopy-node --install-browser`. On Linux, add `--with-deps` to install
required system libraries. Run setup again if an upgrade asks for a newer browser.

## Run from this checkout

```sh
pnpm install
pnpm build
node dist/cli/index.js --install-browser
```

Download through the CLI:

```sh
node dist/cli/index.js -i btcusd -from 2024-01-06 -to 2024-01-07 -t m1 -f json
```

Or use the Node API from the repository root:

```js
const { getHistoricalRates } = require('./dist/index.js');

async function main() {
  const candles = await getHistoricalRates({
    instrument: 'btcusd',
    dates: { from: '2024-01-06', to: '2024-01-07' },
    timeframe: 'm1',
    format: 'json'
  });
  console.log(candles.length, candles[0], candles[candles.length - 1]);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
```

For a browser installed in a custom location, use `chromePath` in Node or
`--chrome-path <executable>` in the CLI.

## Access denied after a challenge

If the data URL returns a plain **HTTP 403** during browser recovery, acquisition
stops immediately instead of waiting for its token timeout. The browser closes,
and the download reports `DukascopyAccessDeniedError` with `status: 403`, the URL,
`source: 'browser'`, and `code: 'DUKASCOPY_ACCESS_DENIED'`. No later request in
that download starts another browser. See
[HTTP 403 and browser challenges](../../README.md#http-403-and-browser-challenges)
for what to check.

With `failAfterRetryCount: false`, the error is suppressed: files after the denial
come back empty and the download still completes. Keep the default `true` to see
the error.
