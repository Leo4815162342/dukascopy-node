import fetch from 'node-fetch';
import { DateInput } from './config';
import { FormatType } from './config/format';
import { InstrumentType } from './config/instruments';
import { instrumentMetaData } from './config/instruments-metadata';
import { PriceType } from './config/price-types';
import { TimeframeType } from './config/timeframes';
import { formatOutput } from './output-formatter';
import { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';

export type CurrentRatesConfigBase = {
  instrument: InstrumentType;
  timeframe?: TimeframeType;
  volumes?: boolean;
  format?: FormatType;
  priceType?: PriceType;
};

export type CurrentRatesConfigWithDates = CurrentRatesConfigBase & {
  dates: {
    from: DateInput;
    to?: DateInput;
  };
  limit?: never;
};

export type CurrentRatesConfigWithLimit = CurrentRatesConfigBase & {
  limit: number;
  dates?: never;
};

export type CurrentRatesConfig = CurrentRatesConfigWithDates | CurrentRatesConfigWithLimit;

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

export type CurrentRatesConfigArrayItem = CurrentRatesConfig & {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'array';
};

export type CurrentRatesConfigArrayTickItem = CurrentRatesConfig & {
  timeframe?: 'tick';
  format?: 'array';
};

export type CurrentRatesConfigJsonItem = CurrentRatesConfig & {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'json';
};

export type CurrentRatesConfigJsonTickItem = CurrentRatesConfig & {
  timeframe?: 'tick';
  format?: 'json';
};

export type CurrentRatesConfigCsv = CurrentRatesConfig & {
  format?: 'csv';
};

export async function getCurrentRates(config: CurrentRatesConfigArrayItem): Promise<ArrayItem[]>;
export async function getCurrentRates(
  config: CurrentRatesConfigArrayTickItem
): Promise<ArrayTickItem[]>;
export async function getCurrentRates(config: CurrentRatesConfigJsonItem): Promise<JsonItem[]>;
export async function getCurrentRates(
  config: CurrentRatesConfigJsonTickItem
): Promise<JsonItemTick[]>;
export async function getCurrentRates(config: CurrentRatesConfigCsv): Promise<string>;

/**
 * Get realtime rates for a given instrument.
 *
 * @experimental This function is experimental and may change in the future.
 */
export async function getCurrentRates({
  instrument,
  priceType = 'bid',
  timeframe = 'd1',
  volumes = true,
  format = 'array',
  dates,
  limit
}: CurrentRatesConfig): Promise<Output> {
  const mappedTimeframe = timeframeMap[timeframe];
  const instrumentName = instrumentMetaData[instrument].name;
  const offerSide = priceType === 'bid' ? 'B' : 'A';
  // const timeDirection = order === 'asc' ? 'N' : 'P';
  const timeDirection = 'N';

  const now = new Date();

  let fromDate: Date = now;
  let toDate: Date = now;

  if (dates) {
    const { from, to = now } = dates;
    fromDate = typeof from === 'string' || typeof from === 'number' ? new Date(from) : from;
    toDate = typeof to === 'string' || typeof to === 'number' ? new Date(to) : to;
  } else {
    fromDate = getTimeframeLimit(timeframe, now, limit || 10);
    toDate = now;
  }

  let targetTimestamp = +toDate;
  let shouldFetch = true;

  let rates: number[][] = [];

  while (targetTimestamp > +fromDate && shouldFetch) {
    const fetchSeed = generateSeed();

    const urlParams = new URLSearchParams({
      path: 'chart/json3',
      instrument: instrumentName,
      offer_side: offerSide,
      interval: mappedTimeframe,
      splits: 'true',
      stocks: 'true',
      init: 'true',
      time_direction: timeDirection,
      timestamp: String(targetTimestamp),
      jsonp: `_callbacks____${fetchSeed}`
    });

    const url = `https://freeserv.dukascopy.com/2.0/index.php?${urlParams.toString()}`;

    let fetchedRates: number[][] = [];

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
      fetchedRates = JSON.parse(responseClean);

      if (fetchedRates.length > 0) {
        const start = +new Date(fetchedRates[0][0]);
        targetTimestamp = start;
        rates.unshift(...fetchedRates);
      } else {
        shouldFetch = false;
      }
    } catch (err: unknown) {
      // TODO: handle silent failure
      shouldFetch = false;
    }
  }

  if (limit) {
    rates = rates.slice(-limit);
  }

  if (!volumes) {
    if (timeframe === 'tick') {
      rates = rates.map(item => [item[0], item[1], item[2]]);
    } else {
      rates = rates.map(item => [item[0], item[1], item[2], item[3], item[4]]);
    }
  }

  // TODO: handle perf issues for low-volume low-timeframe requests
  const filteredRates = rates.filter(function (item) {
    let key = item[0];

    const isWithinBounds = item[0] >= +fromDate && item[0] < +toDate;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const isUnique = !this.has(key);
    if (isWithinBounds && isUnique) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      this.add(key);
      return true;
    }

    return false;
  }, new Set());

  const output = formatOutput({ processedData: filteredRates, format, timeframe });

  return output;
}

function generateSeed() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 10; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function getTimeframeLimit(timeframe: TimeframeType, now: Date, limit: number) {
  const nowTimestamp = +now;
  const bufferMultiplier = 5; // needed to account for weekends and holidays or holes in the datafeed

  const timeframeLimits: Record<TimeframeType, number> = {
    tick: 1000,
    s1: 1000,
    m1: 60 * 1000,
    m5: 5 * 60 * 1000,
    m15: 15 * 60 * 1000,
    m30: 30 * 60 * 1000,
    h1: 60 * 60 * 1000,
    h4: 4 * 60 * 60 * 1000,
    d1: 24 * 60 * 60 * 1000,
    mn1: 30 * 24 * 60 * 60 * 1000
  };

  return new Date(nowTimestamp - limit * bufferMultiplier * timeframeLimits[timeframe]);
}
