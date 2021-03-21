## Usage with cache

With cache enabled (`{ useCache: true }`), all the binary artifacts (which are downloaded from the dukascopy servers) will be stored in the file system, and all the subseqent requests with similar instruments and date ranges will no longer be downloaded from those servers, and will be fetched from the file system instead.


### Example: [with-cache.js](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/with-cache/with-cache.js)

```javascript
const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-02-01'),
        to: new Date('2021-03-01')
      },
      timeframe: 'd1',
      format: 'json',
      useCache: true,
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

After running, you can see that `dukascopy-node` has created the cache folder called `.dukascopy-cache` and stored the downloaded artifacts there.

If you run the same code again, the you will notice that it's faster, since the date comes from your local disk rather then from network.

### Example: [with-cache-custom-folder.js](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/with-cache/with-cache-custom-folder.js)

```javascript
const { getHistoricRates } = require('dukascopy-node');

(async () => {
  try {
    const data = await getHistoricRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-02-01'),
        to: new Date('2021-03-01')
      },
      timeframe: 'd1',
      format: 'json',
      useCache: true,
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

### Why it is useful?

### How it works