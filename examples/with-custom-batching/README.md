## With custom batching

To download historical prices, `dukascopy-node` generates Dukascopy JSON API URLs, downloads them in batches, expands the compact JSON columns, and aggregates them to the requested timeframe.

For example, fetching minutely `eurusd` data for June 2019:

```javascript
const { getHistoricalRates } = require('dukascopy-node');

(async () => {
  const data = await getHistoricalRates({
    instrument: 'eurusd',
    dates: {
      from: new Date('2019-06-01'),
      to: new Date('2019-07-01')
    },
    timeframe: 'm1'
  });

  console.log(data);
})();
```

or via CLI:

```bash
npx dukascopy-node -i eurusd -from 2019-06-01 -to 2019-07-01 -t m1
```

generates one URL per completed day. The API uses unpadded, 1-based months:

```javascript
const { URL_ROOT } = require('dukascopy-node');

[
  `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/6/1`,
  `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/6/2`,
  // ...
  `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/6/30`
]
```

By default, URLs are split into batches of `10` (`batchSize`) with a `1000 ms` pause (`pauseBetweenBatchesMs`) between batches. Cache hits do not incur the batch pause.

To use batches of 15 with a two-second pause:

```javascript
const { getHistoricalRates } = require('dukascopy-node');

(async () => {
  const data = await getHistoricalRates({
    instrument: 'eurusd',
    dates: {
      from: new Date('2019-06-01'),
      to: new Date('2019-07-01')
    },
    timeframe: 'm1',
    batchSize: 15,
    pauseBetweenBatchesMs: 2000
  });

  console.log(data);
})();
```

or:

```bash
npx dukascopy-node -i eurusd -from 2019-06-01 -to 2019-07-01 -t m1 --batch-size 15 --batch-pause 2000
```

The lower-level batching API still passes raw `Buffer` objects to callbacks. Those buffers now contain compact JSON bytes and can be inspected directly or passed to `processData` for delta expansion and aggregation:

```javascript
const { BufferFetcher, processData, URL_ROOT } = require('dukascopy-node');
const urls = [
  `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/6/1`,
  `${URL_ROOT}/candles/minute/EUR-USD/BID/2019/6/2`
];

const fetcher = new BufferFetcher({
  batchSize: 10,
  pauseBetweenBatchesMs: 1000,
  onBatchFetch: async (bufferObjects, isLastBatch) => {
    const compactPayload = JSON.parse(bufferObjects[0].buffer.toString('utf8'));
    console.log(`Received ${compactPayload.times.length} compact rows`);

    const rows = processData({
      instrument: 'eurusd',
      requestedTimeframe: 'm1',
      bufferObjects,
      priceType: 'bid',
      volumes: true,
      volumeUnits: 'millions',
      ignoreFlats: true
    });

    console.log(rows, { isLastBatch });
  }
});

await fetcher.fetch_optimized(urls);
```

For large tick ranges, use a smaller `batchSize` and a longer `pauseBetweenBatchesMs` to reduce request pressure on Dukascopy.
