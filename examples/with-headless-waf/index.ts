/* eslint-disable no-console */
import { BufferFetcher } from '../../src/buffer-fetcher';
import { createHeadlessWafFetcher } from '../../src/waf';
import { assertDataUrl, decodeData } from '../../src/waf/data';

const defaultUrls = ['https://jetta.dukascopy.com/v1/candles/minute/BTC-USD/BID/2024/1/6'];

async function main() {
  const args = process.argv.slice(2).filter(arg => arg !== '--');
  const verifyRefresh = args.includes('--verify-refresh');
  const requestedUrls = args.filter(arg => arg !== '--verify-refresh');
  const urls = requestedUrls.length ? requestedUrls : defaultUrls;
  urls.forEach(assertDataUrl);

  const client = createHeadlessWafFetcher({
    tokenCache: false,
    executablePath: process.env.CHROME_PATH || undefined,
    onTokenAcquisition: () => console.error('Acquiring WAF token in headless Chrome…')
  });
  const fetcher = new BufferFetcher({
    fetcherFn: client.fetchBuffer,
    batchSize: 1,
    pauseBetweenBatchesMs: 2000,
    onItemFetch: report
  });

  function report(url: string, buffer: Buffer) {
    const rows = decodeData(url, buffer);
    const data = JSON.parse(buffer.toString('utf8'));
    console.log(
      JSON.stringify({
        url,
        bytes: buffer.length,
        sourceRows: data.times.length,
        decodedRows: rows.length,
        firstTimestamp: rows.length ? new Date(rows[0][0]).toISOString() : null,
        lastTimestamp: rows.length ? new Date(rows[rows.length - 1][0]).toISOString() : null
      })
    );
  }

  try {
    await fetcher.fetch(urls);

    if (verifyRefresh) {
      // Exercise real reacquisition without waiting for Dukascopy's unknown immunity time.
      await new Promise(resolve => setTimeout(resolve, 2000));
      await client.refreshToken(urls[0]);
      report(urls[0], await client.fetchBuffer(urls[0]));
    }
  } finally {
    console.log(JSON.stringify(client.stats));
  }
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : 'Headless WAF prototype failed');
  process.exitCode = 1;
});
