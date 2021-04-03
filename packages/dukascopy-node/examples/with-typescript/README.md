## With typescript 

`dukascopy-node` is built with Typescript and is shipped with all the interfaces and enums for easier development experience.

```typescript

import { getHistoricRates, Config, Instrument, Timeframe, Format } from 'dukascopy-node';

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

getHistoricRates(config).then(data => console.log(data));

```

### Config awareness

Through the power of overloads in Typescript, `dukascopy-node` knows the precise shape of the output.

#### `JsonItem`

When `json` is requested as format for non-tick timeframe

#### `ArrayItem`

When `array` is requested as timeframe for non-tick timeframe

#### `JsonItemTick`

When `json` is requested as format for tick timeframe

#### `ArrayTickItem`

When `array` is requested as timeframe for tick timeframe

#### `string`

When `csv` is requested as timeframe

