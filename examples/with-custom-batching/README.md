## With custom batching

To download historical prices, `dukascopy-node` generates Dukascopy JSON API URLs, downloads them in batches, expands the compact JSON columns, and aggregates them to the requested timeframe.

In some cases such list of URLs can be huge. Since we do not want to overwhelm Dukascopy servers with a lot of requests at the same time, and in order not to fall under the rate-limiting restrictions, we need to break this list down into groups (a.k.a. batches) and download them one-by-one with a pause in between.

For example - fetching historical price data for `eurusd` for the whole month of June in 2019, with minutely aggregation (`m1` timeframe):

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

It generates 30 URLs (one per completed day).

```javascript

[
  `/candles/minute/EUR-USD/BID/2019/6/1`,
  `/candles/minute/EUR-USD/BID/2019/6/2`,
  // ...
  `/candles/minute/EUR-USD/BID/2019/6/30`
]
```

By default, URLs are split into batches of `10` (`batchSize`) with a `1000 ms` pause (`pauseBetweenBatchesMs`) between batches. Cache hits do not incur the batch pause.

This can also be expressed as a sequence of the following steps:

```
1) Download URLs in group 1 (items 1-10)
2) Wait 1000 ms
3) Download URLs in group 2 (items 11-20)
4) Wait 1000 msf
5) Download URLs in group 3 (items 21-30)
```

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

For large tick ranges, use a smaller `batchSize` and a longer `pauseBetweenBatchesMs` to reduce request pressure on Dukascopy.
