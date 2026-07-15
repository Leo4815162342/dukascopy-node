import { Config, DateInput } from './config';
import { FormatType } from './config/format';
import { InstrumentType } from './config/instruments';
import { PriceType } from './config/price-types';
import { TimeframeType } from './config/timeframes';
import { getHistoricalRates } from './getHistoricalRates';
import { formatOutput } from './output-formatter';
import { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick } from './output-formatter/types';

export type RealTimeRatesConfigBase = {
  instrument: InstrumentType;
  timeframe?: TimeframeType;
  dates?: {
    from: DateInput;
    to?: DateInput;
  };
  last?: number;
  volumes?: boolean;
  format?: FormatType;
  priceType?: PriceType;
};

export type RealTimeRatesConfigArrayItem = RealTimeRatesConfigBase & {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'array';
};

export type RealTimeRatesConfigArrayTickItem = RealTimeRatesConfigBase & {
  timeframe?: 'tick';
  format?: 'array';
};

export type RealTimeRatesConfigJsonItem = RealTimeRatesConfigBase & {
  timeframe?: Exclude<TimeframeType, 'tick'>;
  format?: 'json';
};

export type RealTimeRatesConfigJsonTickItem = RealTimeRatesConfigBase & {
  timeframe?: 'tick';
  format?: 'json';
};

export type RealTimeRatesConfigCsv = RealTimeRatesConfigBase & {
  timeframe?: TimeframeType;
  format?: 'csv';
};

export type RealTimeRatesConfig =
  | RealTimeRatesConfigArrayItem
  | RealTimeRatesConfigArrayTickItem
  | RealTimeRatesConfigJsonItem
  | RealTimeRatesConfigJsonTickItem
  | RealTimeRatesConfigCsv;

export async function getRealTimeRates(config: RealTimeRatesConfigArrayItem): Promise<ArrayItem[]>;
export async function getRealTimeRates(
  config: RealTimeRatesConfigArrayTickItem
): Promise<ArrayTickItem[]>;
export async function getRealTimeRates(config: RealTimeRatesConfigJsonItem): Promise<JsonItem[]>;
export async function getRealTimeRates(
  config: RealTimeRatesConfigJsonTickItem
): Promise<JsonItemTick[]>;
export async function getRealTimeRates(config: RealTimeRatesConfigCsv): Promise<string>;

/**
 * Get realtime rates for a given instrument.
 * @experimental This function is experimental and may change in the future.
 */
export async function getRealTimeRates({
  instrument,
  priceType = 'bid',
  timeframe = 'd1',
  volumes = true,
  format = 'array',
  dates,
  last = 10
}: RealTimeRatesConfig) {
  const now = new Date();
  const fromDate = dates ? toDate(dates.from) : getTimeframeLimit(timeframe, now, last || 10);
  const toDateValue = dates?.to ? toDate(dates.to) : now;

  const rates = (await getHistoricalRates({
    instrument,
    dates: {
      from: fromDate,
      to: toDateValue
    },
    timeframe,
    priceType,
    volumes,
    format: 'array'
  } as Config)) as number[][];

  const filteredRates = dates ? rates : rates.slice((last || 10) * -1);

  return formatOutput({ processedData: filteredRates, format, timeframe });
}

function toDate(input: DateInput): Date {
  return input instanceof Date ? new Date(input) : new Date(input);
}

function getTimeframeLimit(timeframe: TimeframeType, now: Date, limit: number): Date {
  const bufferMultiplier = 5;
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

  return new Date(+now - limit * bufferMultiplier * timeframeLimits[timeframe]);
}

export const getCurrentRates = getRealTimeRates;
