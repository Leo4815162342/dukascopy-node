## With typescript 

`dukascopy-node` is built with Typescript and is shipped with all the interfaces and enums for easier development experience.

```typescript

import { getHistoricalRates, Config, Instrument, Timeframe, Format } from 'dukascopy-node';

const config: Config = {
  instrument: Instrument.eurusd,
  dates: {
    from: new Date('2021-03-30'),
    to: new Date('2021-03-31')
  },
  timeframe: Timeframe.d1,
  format: Format.json,
  priceType: Price.bid
};

getHistoricalRates(config).then(data => console.log(data));

```

### Config awareness

Through the power of overloads in Typescript, `dukascopy-node` knows the precise shape of the output.

#### `JsonItem`

When `json` is requested as format for non-tick timeframe

```typescript

import { getHistoricalRates, Config, Instrument, Timeframe, Format } from 'dukascopy-node';

const config: Config = {
  instrument: Instrument.eurusd,
  dates: {
    from: new Date('2021-03-30'),
    to: new Date('2021-03-31')
  },
  timeframe: Timeframe.d1,
  format: Format.json,
  priceType: Price.bid
};

getHistoricalRates(config).then(data => console.log(data));
```

![JsonItem](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-typescript/json_item.png?raw=true)

---

#### `ArrayItem`

When `array` is requested as format for non-tick timeframe

```typescript

import { getHistoricalRates, Config, Instrument, Timeframe, Format } from 'dukascopy-node';

const config: Config = {
  instrument: Instrument.eurusd,
  dates: {
    from: new Date('2021-03-30'),
    to: new Date('2021-03-31')
  },
  timeframe: Timeframe.d1,
  format: Format.array,
  priceType: Price.bid
};

getHistoricalRates(config).then(data => console.log(data));
```

![ArrayItem](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-typescript/array_item.png?raw=true)

---

#### `JsonItemTick`

When `json` is requested as format for tick timeframe

```typescript

import { getHistoricalRates, Config, Instrument, Timeframe, Format } from 'dukascopy-node';

const config: Config = {
  instrument: Instrument.eurusd,
  dates: {
    from: new Date('2021-03-30'),
    to: new Date('2021-03-31')
  },
  timeframe: Timeframe.tick,
  format: Format.json,
  priceType: Price.bid
};

getHistoricalRates(config).then(data => console.log(data));
```

![JsonItemTick](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-typescript/json_item_tick.png?raw=true)

---

#### `ArrayTickItem`

When `array` is requested as format for tick timeframe

```typescript

import { getHistoricalRates, Config, Instrument, Timeframe, Format } from 'dukascopy-node';

const config: Config = {
  instrument: Instrument.eurusd,
  dates: {
    from: new Date('2021-03-30'),
    to: new Date('2021-03-31')
  },
  timeframe: Timeframe.tick,
  format: Format.array,
  priceType: Price.bid
};

getHistoricalRates(config).then(data => console.log(data));
```

![ArrayTickItem](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-typescript/array_tick_item.png?raw=true)

---

#### `string`

When `csv` is requested as format

```typescript

import { getHistoricalRates, Config, Instrument, Timeframe, Format } from 'dukascopy-node';

const config: Config = {
  instrument: Instrument.eurusd,
  dates: {
    from: new Date('2021-03-30'),
    to: new Date('2021-03-31')
  },
  timeframe: Timeframe.d1,
  format: Format.csv,
  priceType: Price.bid
};

getHistoricalRates(config).then(data => console.log(data));
```

![string](https://github.com/Leo4815162342/dukascopy-node/blob/master/examples/with-typescript/string.png?raw=true)

