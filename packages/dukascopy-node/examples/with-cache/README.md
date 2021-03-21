## Usage with cache

With cache enabled, all the binary artifacts (which are downloaded from the dukacopy servers) will be stored in the file system, and all the subseqent requests either with similar instruments and date ranges will no longer needed to be downloaded from those servers, and will be fetched from the file system instead.


```javascript
const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'btcusd',
      dates: {
        from: new Date('2020-01-01'),
        to: new Date('2021-01-01')
      },
      timeframe: 'd1',
      format: 'json',
      useCache: true
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

### Why it is useful?

### How it works