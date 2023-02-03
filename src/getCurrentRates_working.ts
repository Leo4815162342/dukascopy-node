// working
import fetch from 'node-fetch';
import { FormatType } from './config/format';
import { InstrumentType } from './config/instruments';
import { instrumentMetaData } from './config/instruments-metadata';
import { PriceType } from './config/price-types';
import { TimeframeType } from './config/timeframes';
import { formatOutput } from './output-formatter';
import { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';

export type CurrentRatesArgs = {
  instrument: InstrumentType;
  timeframe?: TimeframeType;
  limit?: number;
  volumes?: boolean;
  format?: FormatType;
  priceType?: PriceType;
  order?: 'asc' | 'desc';
};

const timeframeMap: Record<TimeframeType, string> = {
  tick: 'TICK',
  s1: '1SEC',
  m1: '1MIN',
  m5: '5MIN',
  m15: '15MIN',
  m30: '30MIN',
  h1: '1HOUR',
  h4: '4HOUR',
  d1: '1DAY',
  mn1: '1MONTH'
};

export type CurrentRatesArgsArrayItem = CurrentRatesArgs & {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'array';
};

export type CurrentRatesArgsArrayTickItem = CurrentRatesArgs & {
  timeframe?: 'tick';
  format?: 'array';
};

export type CurrentRatesArgsJsonItem = CurrentRatesArgs & {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'json';
};

export type CurrentRatesArgsJsonTickItem = CurrentRatesArgs & {
  timeframe?: 'tick';
  format?: 'json';
};

export type CurrentRatesArgsCsv = CurrentRatesArgs & {
  format?: 'csv';
};

const fromDate = +new Date('2023-01-25');

export async function getCurrentRates(config: CurrentRatesArgsArrayItem): Promise<ArrayItem[]>;
export async function getCurrentRates(
  config: CurrentRatesArgsArrayTickItem
): Promise<ArrayTickItem[]>;
export async function getCurrentRates(config: CurrentRatesArgsJsonItem): Promise<JsonItem[]>;
export async function getCurrentRates(
  config: CurrentRatesArgsJsonTickItem
): Promise<JsonItemTick[]>;
export async function getCurrentRates(config: CurrentRatesArgsCsv): Promise<string>;

/**
 * Get realtime rates for a given instrument.
 *
 * @experimental This function is experimental and may change in the future.
 */
export async function getCurrentRates({
  instrument,
  limit = 3000,
  priceType = 'bid',
  order = 'asc',
  timeframe = 'd1',
  volumes = true,
  format = 'array'
}: CurrentRatesArgs): Promise<Output> {
  const mappedTimeframe = timeframeMap[timeframe];
  const instrumentName = instrumentMetaData[instrument].name;
  const offerSide = priceType === 'bid' ? 'B' : 'A';
  const timeDirection = order === 'asc' ? 'N' : 'P';

  let targetTimestamp = +new Date('2023-01-04');

  const fetchSeed = generateSeed();

  const urlParams = new URLSearchParams({
    path: 'chart/json3',
    instrument: instrumentName,
    offer_side: offerSide,
    interval: mappedTimeframe,
    splits: 'true',
    stocks: 'true',
    init: 'true',
    // limit: String(limit * 2),
    time_direction: timeDirection,
    timestamp: String(targetTimestamp),
    jsonp: `_callbacks____${fetchSeed}`
  });

  const url = `https://freeserv.dukascopy.com/2.0/index.php?${urlParams.toString()}`;

  let rates: number[][] = [];

  try {
    const rawResponse = await fetch(url, {
      headers: {
        Referer: 'https://freeserv.dukascopy.com/2.0'
      }
    });
    const rawResponseText = await rawResponse.text();

    const responseClean = rawResponseText
      .replace(`_callbacks____${fetchSeed}(`, '')
      .replace(');', '');
    rates = JSON.parse(responseClean);
  } catch (err: unknown) {
    // TODO: handle silent failure
    rates = [];
  }

  // rates = rates.length <= limit ? rates : rates.slice(0, limit);

  if (!volumes) {
    if (timeframe === 'tick') {
      rates = rates.map(item => [item[0], item[1], item[2]]);
    } else {
      rates = rates.map(item => [item[0], item[1], item[2], item[3], item[4]]);
    }
  }

  const output = formatOutput({ processedData: rates, format, timeframe });

  return output;
}

function generateSeed() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 10; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

getCurrentRates({
  instrument: 'btcusd',
  timeframe: 'm1',
  format: 'array'
}).then(rates => {
  const first = rates[0];
  const last = rates[rates.length - 1];
  console.log('size', rates.length);
  console.log('first', new Date(first[0]));
  console.log('last', new Date(last[0]));
  rates.forEach(rate => {
    // console.log(new Date(rate[0]), ...rate);
  });
});
