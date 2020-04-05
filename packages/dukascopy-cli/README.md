<h1>dukascopy-cli</h1>

<p align="center"><img width="150" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-cli/dukascopy-cli.png?raw=true" alt="dukascopy-cli"></p>

<p align="center">
  <a href="https://api.travis-ci.org/Leo4815162342/dukascopy-node.svg?branch=master"><img src="https://api.travis-ci.org/Leo4815162342/dukascopy-node.svg?branch=master" alt="Build Status"></a>
  <a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="dukascopy-node tested with jest"></a>
</p>

> A **command line interface** for downloading historical OHLC (open, high, low, close) price data for 500+ instruments (stocks/commodities/currencies/cfd/crypto) from publicly available sources on https://www.dukascopy.com/

## Installation

#### NPM:

```bash
npm install dukascopy-cli --save-dev
```

#### yarn:

```bash
yarn add dukascopy-cli --dev
```

## Usage

#### As global dependency

```bash
dukascopy-cli -i eurusd -from 2006-01-01 -to 2020-01-01 -t d1 -f json
```

#### As dev dependency

```bash
yarn dukascopy-cli -i eurusd -from 2006-01-01 -to 2020-01-01 -t d1 -f json
```

## Options

```bash
  -d, --debug                 Output extra debugging
  -s, --silent                Hides the search config in the CLI output (default: false)
  -i, --instrument <value>    Trading instrument
  -from, --date-from <value>  From date (yyyy-mm-dd)
  -to, --date-to <value>      To date (yyyy-mm-dd)
  -t, --timeframe <value>     Timeframe aggregation (tick, m1, m30, h1, d1, mn1) (default: "d1")
  -p, --price-type <value>    Price type: (bid, ask) (default: "bid")
  -utc, --utc-offset <value>  UTC offset in minutes (default: 0)
  -v, --volumes               Include volumes (default: false)
  -fl, --flats                Include flats (0 volumes) (default: false)
  -f, --format <value>        Output format (csv, json, array) (default: "json")
  -dir, --directory <value>   Download directory (default: "./download")
  -h, --help                  display help for command
```

## Screenshots

<p><img width="550" src="https://github.com/Leo4815162342/dukascopy-node/blob/feat/workspaces/packages/dukascopy-cli/dukascopy-cli-output.png?raw=true" alt="dukascopy-cli output"></p>
