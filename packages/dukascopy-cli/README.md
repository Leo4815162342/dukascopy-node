<h1>dukascopy-cli</h1>

<p align="center"><img width="150" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-cli/dukascopy-cli.png?raw=true" alt="dukascopy-cli"></p>

<p align="center">
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="dukascopy-node tested with jest"></a>
</p>

> A **command line interface** for fetching and aggregation of historical OHLC (open, high, low, close) price data for 500+ instruments (stocks/commodities/currencies/cfd/crypto) from publicly available sources on https://www.dukascopy.com/

## Installation

#### NPM:

```bash
npm install dukascopy-cli --save
```

#### yarn:

```bash
yarn add dukascopy-cli
```

## Options

```bash
Options:
  -d, --debug                 Output extra debugging
  -s, --silent                Prints out the search config (default: false)
  -i, --instrument <value>    Trading instrument
  -from, --date-from <value>  From date
  -to, --date-to <value>      To date
  -t, --timeframe <value>     Timeframe aggregation (default: "d1")
  -p, --price-type <value>    Price type: (bid, ask) (default: "bid")
  -utc, --utc-offset <value>  UTC offset in minutes (default: 0)
  -v, --volumes               Include volumes (default: false)
  -fl, --flats                Include flats (0 volumes) (default: false)
  -f, --format <value>        Output format (csv, json, array) (default: "json")
  -dir, --directory <value>   Download directory (default: "./download")
  -h, --help                  display help for command
```
