## With tick data

`dukascopy-node` allows you to download `tick` data on top of all other offered timeframes.

Since `tick` timeframe represents a raw price change, the output will NOT contain OHLC data (`open`, `high`, `low`, `close` prices).

### Example: [with-tick-data.js](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-tick-data/with-tick-data.js)

```javascript
const { getHistoricalRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricalRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-03-30'),
        to: new Date('2021-03-31'),
      },
      timeframe: 'tick'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

or via CLI:

```bash
npx dukascopy-node -i eurusd -from 2021-03-30 -to 2021-03-31 -t tick
```

Output shape:

```json
[
    {
    "timestamp": 1585526400104,
    "askPrice": 1.11369,
    "bidPrice": 1.11361,
    "askVolume": 0.75,
    "bidVolume": 0.75
  },
]
```

Full example output: [with-tick-data.output.json](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-tick-data/with-tick-data.output.json)

 ### ❗Keep in mind❗

When downloading tick data, expect slow loading times and big output, and consider adjusting `batchSize` and `pauseBetweenBatchesMs` parameters. More info: [With custom batching](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-custom-batching)
