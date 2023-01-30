import { InstrumentType } from './config/instruments';
import { instrumentMetaData } from './config/instruments-metadata';
import { PriceType } from './config/price-types';
import { TimeframeType } from './config/timeframes';
import { ArrayItem, ArrayTickItem } from './output-formatter/types';

export type RealtimeRatesArgs = {
  instrument: InstrumentType;
  timeframe?: TimeframeType;
  last?: number;
  volumes?: boolean;
  priceType?: PriceType;
  order?: 'asc' | 'desc';
  onItemDownload?: (item: unknown) => void;
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

export type RealtimeRatesArgsArrayItem = RealtimeRatesArgs & {
  timeframe?: Exclude<TimeframeType, 'tick'> | undefined;
};

export type RealtimeRatesArgsArrayTickItem = RealtimeRatesArgs & {
  timeframe?: 'tick' | undefined;
};

export async function getRealtimeRates(config: RealtimeRatesArgsArrayItem): Promise<ArrayItem[]>;

export async function getRealtimeRates(
  config: RealtimeRatesArgsArrayTickItem
): Promise<ArrayTickItem[]>;

export async function getRealtimeRates(
  config: RealtimeRatesArgs
): Promise<ArrayItem[] | ArrayTickItem[]>;

/**
 * Get realtime rates for a given instrument.
 *
 * @experimental This function is experimental and may change in the future.
 */
export async function getRealtimeRates({
  instrument,
  last = 100000,
  priceType = 'bid',
  order = 'asc',
  timeframe = 'd1',
  volumes = true
}: RealtimeRatesArgs): Promise<ArrayItem[] | ArrayTickItem[]> {
  const mappedTimeframe = timeframeMap[timeframe];
  const instrumentName = instrumentMetaData[instrument].name;
  const offerSide = priceType === 'bid' ? 'B' : 'A';
  const timeDirection = order === 'asc' ? 'N' : 'P';

  const fetchSeed = generateSeed();

  const urlParams = new URLSearchParams({
    path: 'chart/json3',
    instrument: instrumentName,
    offer_side: offerSide,
    interval: mappedTimeframe,
    splits: 'true',
    stocks: 'true',
    init: 'true',
    limit: String(last * 2),
    time_direction: timeDirection,
    timestamp: String(+new Date()),
    jsonp: `_callbacks____${fetchSeed}`
  });

  const url = `https://freeserv.dukascopy.com/2.0/index.php?${urlParams.toString()}`;

  let rates: ArrayItem[] | ArrayTickItem[] = [];

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

  rates = rates.length <= last ? rates : rates.slice(0, last);

  if (!volumes) {
    if (timeframe === 'tick') {
      rates = rates.map(item => [item[0], item[1], item[2]]);
    } else {
      rates = rates.map(item => [item[0], item[1], item[2], item[3]]);
    }
  }

  return rates;
}

function generateSeed() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 10; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
