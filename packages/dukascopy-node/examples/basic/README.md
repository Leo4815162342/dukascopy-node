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
Output shape:

```json
[
  [ 1612137600000, 1.21225, 1.21363, 1.2056, 1.20676, 165569.8187 ],
  [ 1612224000000, 1.20676, 1.20877, 1.20115, 1.20365, 147916.4607 ],
  [ 1612310400000, 1.20365, 1.205, 1.2004, 1.20412, 119397.1138 ],
//   ...
]
```

Full example output: [basic-array.output.json](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-array.output.json)

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

Output shape:

```json
[
  {
    "timestamp": 1612137600000,
    "open": 1.21225,
    "high": 1.21363,
    "low": 1.2056,
    "close": 1.20676,
    "volume": 165569.8187
  },
//   ...
]
```

Full example output: [basic-json.output.json](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-json.output.json)

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

Output shape:

```
timestamp,open,high,low,close,volume
1612137600000,1.21225,1.21363,1.2056,1.20676,165569.8187
1612224000000,1.20676,1.20877,1.20115,1.20365,147916.4607
1612310400000,1.20365,1.205,1.2004,1.20412,119397.1138
...
```

Full example output: [basic-csv.output.csv](https://github.com/Leo4815162342/dukascopy-tools/blob/docs/node_examples/packages/dukascopy-node/examples/basic/basic-csv.output.csv)


