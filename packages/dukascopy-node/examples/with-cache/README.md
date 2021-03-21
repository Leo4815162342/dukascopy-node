## With cache

Be default caching capabilities are disabled.

In order to enable them, set `useCache` flag to `true` and optionally specify the `cacheFolderPath` (default is `.dukascopy-cache`).

All the binary artifacts (which are downloaded from the dukascopy servers) will be stored in the file system, and all the subsequent requests with similar instruments and date ranges will no longer be downloaded from those servers, and will be fetched from the file system instead.

---

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

![dukascopy-node default cache folder](https://raw.githubusercontent.com/Leo4815162342/dukascopy-tools/docs/node_examples/packages/dukascopy-node/examples/with-cache/with-cache.png "dukascopy-node default cache folder")

If you run the same code again, then you will notice that it's faster, since the data comes from your local disk rather than from network.

---

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
      cacheFolderPath: './my-custom-cache-folder'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

![dukascopy-node custom cache folder](https://raw.githubusercontent.com/Leo4815162342/dukascopy-tools/docs/node_examples/packages/dukascopy-node/examples/with-cache/with-cache-custom-folder.png "dukascopy-node custom cache folder")