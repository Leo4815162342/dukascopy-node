## With cache

Be default caching capabilities are disabled.

In order to enable them, set `useCache` flag to `true` and optionally specify the `cacheFolderPath` (default is `.dukascopy-cache`).

All the binary artifacts (which are downloaded from the dukascopy servers) will be stored on disk, and all the subsequent requests with similar instruments and date ranges will no longer be downloaded from those servers, and will be fetched from the file system instead.

---

via CLI:

```bash
npx dukascopy-node -i eurusd -from 2021-02-01 -to 2021-03-01 -t m1 -f json --cache
```

or via Node.js:

```javascript
const { getHistoricalRates } = require("dukascopy-node");

(async () => {
  try {
    const data = await getHistoricalRates({
      instrument: "eurusd",
      dates: {
        from: new Date("2021-02-01"),
        to: new Date("2021-03-01"),
      },
      timeframe: "d1",
      format: "json",
      useCache: true,
    });

    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
})();
```

After running, you can see that `dukascopy-node` has created the cache folder called `.dukascopy-cache` and stored the downloaded artifacts there.

If you run the same code again, then you will notice that it's faster, since the data comes from your local disk rather than from network.

#### First run (populating cache) - download time - 5.9s

<img width="585" alt="Screenshot 2023-03-30 at 10 46 38" src="https://user-images.githubusercontent.com/12486774/228782294-c09d5ab4-0b90-4bf1-acc1-6922cda61ec7.png">

#### Second run (using cache) - download time - 163ms

<img width="586" alt="Screenshot 2023-03-30 at 10 46 44" src="https://user-images.githubusercontent.com/12486774/228782316-93f787e2-20e9-47b9-b726-fb36a1466d43.png">


