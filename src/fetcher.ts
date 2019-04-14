import fetch from 'node-fetch';

import { symbols } from './symbols';

const API_ROOT = 'https://datafeed.dukascopy.com/datafeed';

const ASK_1_MIN_FILE = 'ASK_candles_min_1.bi5';
const BID_1_MIN_FILE = 'BID_candles_min_1.bi5';

const ASK_1_HOUR_FILE = 'ASK_candles_hour_1.bi5';
const BID_1_HOUR_FILE = 'BID_candles_hour_1.bi5';

'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/18/22h_ticks.bi5';

'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/BID_candles_min_1.bi5';
'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/ASK_candles_min_1.bi5';

'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/BID_candles_hour_1.bi5';
'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/ASK_candles_hour_1.bi5';

/*
'30m' => '1min'
'1h' => '1min'
'1d' => '1h'
*/

const timeframes = {
  tick: 1,
  '1min': 1,
  '30min': 1,
  '1hour': 1,
  '1day': 1,
  '1week': 1,
  '1month': 1
};
type Timeframe = keyof typeof timeframes;

const priceTypes = {
  avg: 1,
  ask: 1,
  bid: 1
};

type PriceType = keyof typeof priceTypes;

interface PeriodRange {
  start: Date | string | number;
  end: Date | string | number;
}

interface HistoryConfig {
  symbol: string;
  // periodRange: PeriodRange;
  // timeframe: Timeframe;
  // priceType?: PriceType;
  // gmtOffset?: number;
  // includeVolume?: boolean;
}

interface ValidationStatus {
  valid: boolean;
  errors: string[];
}

const defaultConfig: HistoryConfig = {
  symbol: 'eurusd',
  periodRange: { start: '2019-01-01', end: '2019-02-01' },
  timeframe: '1min',
  priceType: 'avg',
  gmtOffset: 0,
  includeVolume: true
};

function validateSymbol(symbol: HistoryConfig['symbol']) {
  return !!symbol && symbols.hasOwnProperty(symbol);
}

function validatePeriodRange(periodRange: HistoryConfig['periodRange']) {
  const status: ValidationStatus = { valid: true, errors: [] };

  const { start, end } = periodRange;

  if (!start || !end) {
    status.valid = false;
    status.errors.push('Empty start/end date values');
  }

  return status;
}

function validateTimeframe(timeframe: HistoryConfig['timeframe']) {
  const status: ValidationStatus = { valid: true, errors: [] };

  if (!timeframe) {
    status.valid = false;
    status.errors.push('Timeframe cannot be empty');
  }

  if (!timeframes.hasOwnProperty(timeframe)) {
    status.valid = false;
    status.errors.push(`Timeframe ${timeframe} is not supported`);
  }

  return status;
}

function validatePriceType(priceType: HistoryConfig['priceType']) {
  const status: ValidationStatus = { valid: true, errors: [] };

  if (!priceType) {
    status.valid = false;
    status.errors.push('Price type cannot be empty');
  }

  if (!priceTypes.hasOwnProperty(priceType)) {
    status.valid = false;
    status.errors.push(`Price type ${priceType} is not supported`);
  }

  return status;
}

type ConfigValue = HistoryConfig[keyof HistoryConfig];

type ValidationFunction = (val: any) => boolean;

interface Validation {
  fn: ValidationFunction;
  invalidMessage: string;
}

function validate(value: ConfigValue, conditions: Validation[]) {
  const status: ValidationStatus = { valid: true, errors: [] };

  conditions.forEach(({ fn, invalidMessage }) => {
    if (!fn(value)) {
      status.valid = false;
      status.errors.push(invalidMessage);
    }
  });

  return status;
}

type ConfigValidators = { [key in keyof HistoryConfig]: Validation[] };

const configValidators: ConfigValidators = {
  symbol: [
    {
      fn: (val: HistoryConfig['symbol']) => !!val,
      invalidMessage: 'Symbol cannot be empty'
    },
    {
      fn: (val: HistoryConfig['symbol']) => symbols.hasOwnProperty(val),
      invalidMessage: 'Symbol is not supported'
    }
  ]
  // periodRange: ,
  // timeframe: ,
  // priceType:
  // gmtOffset
  // includeVolume
};

// function generateUrl(config: HistoryConfig) {}

async function getHistory(config: HistoryConfig) {
  const { isConfigValid, errorMessages } = Object.keys(configValidators).reduce(
    (all, item) => {
      const { valid, errors } = validate(config[item], configValidators[item]);

      return all;
    },
    { isConfigValid: true, errorMessages: [] }
  );

  // const normalizedConfig = { ...{}, ...defaultConfig, ...config };
}
