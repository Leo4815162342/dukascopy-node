## With custom batching

In order to download historical price data, `dukascopy-node` needs to generate a list of URLs of all artifacts. These artifacts will be then downloaded from Dukascopy datafeed servers, decompressed, parsed and aggregated.

In some cases such list of URLs can be huge. Since we do not want to overwhelm Dukascopy servers with a lot of requests at the same time, and in order not to fall under the rate-limiting restrictions, we need to break this list down into groups (a.k.a. batches) and download them one-by-one with a pause in between.

For example - fetching historical price data for `eurusd` for the whole month of June in 2019, with minutely aggregation (`m1` timeframe):

```javascript
const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2019-06-01'),
        to: new Date('2019-07-01'),
      },
      timeframe: 'm1'
    });
    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

will generate 30 urls under the hood:

```javascript
[
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/01/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/02/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/03/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/04/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/05/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/06/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/07/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/08/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/09/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/10/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/11/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/12/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/13/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/14/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/15/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/16/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/17/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/18/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/19/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/20/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/21/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/24/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/25/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/26/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/27/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/28/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/29/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/30/BID_candles_min_1.bi5'
]
```

By default `dukascopy-node` will split this list into groups (batches) of `10` items (this is controlled by the config parameter `batchSize`) and will start downloading these groups with the first one. After first group of `10` items is downloaded, it will wait `1000 ms` (parameter `pauseBetweenBatchesMs`) and will proceed to the next group, and so on.

This can also be expressed as a sequence of the following steps:

```
1) Download URLs in group 1 (items 1-10)
2) Wait 1000 ms
3) Download URLs in group 2 (items 11-20)
4) Wait 1000 ms
5) Download URLs in group 3 (items 21-30)
```

If you want to change those values, to let's say `batchSize: 15` and `pauseBetweenBatchesMs: 2000`

### Example: [with-custom-batching.js](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/with-custom-batching/with-custom-batching.js)

```javascript
const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2019-06-01'),
        to: new Date('2019-07-01'),
      },
      timeframe: 'm1',
      batchSize: 15,
      pauseBetweenBatchesMs: 2000
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

you can expect the following sequence of steps

```
1) Download URLs in group 1 (items 1-15)
2) Wait 2000 ms
3) Download URLs in group 2 (items 15-30)
```
