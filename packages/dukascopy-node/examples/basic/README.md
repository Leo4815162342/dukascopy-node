## Basic usage of `dukascopy-node`

There are three basic output formats: `array`, `json` and `csv`

### [basic-array.js](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-array.js)

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
      format: 'array'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```


Example output: [basic-array.output.json](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-array.output.json)

---

### [basic-json.js](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-json.js)

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
      format: 'json'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

Example output: [basic-json.output.json](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-json.output.json)

---


### [basic-csv.js](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-csv.js)

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
      format: 'csv'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
```

Example output: [basic-csv.output.csv](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-csv.output.csv)


