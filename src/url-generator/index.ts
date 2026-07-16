import { instrumentMetaData } from '../config/instruments-metadata';
import { DATA_API_ROOT } from '../config/data-api';
import { TimeframeType } from '../config/timeframes';
import { getStartOfUtc, getYMDH } from '../utils/date';
import { GenerateUrlsInput } from './types';

export const URL_ROOT = DATA_API_ROOT;

type DataSource = 'tick' | 'minute' | 'hour' | 'day';

const sourceByTimeframe: Record<TimeframeType, DataSource> = {
  tick: 'tick',
  s1: 'tick',
  m1: 'minute',
  m5: 'minute',
  m15: 'minute',
  m30: 'minute',
  h1: 'hour',
  h4: 'hour',
  d1: 'day',
  mn1: 'day'
};

function getBucketStart(date: Date, source: DataSource): Date {
  if (source === 'tick') {
    return getStartOfUtc(date, 'hour');
  }

  if (source === 'minute') {
    return getStartOfUtc(date, 'day');
  }

  if (source === 'hour') {
    return getStartOfUtc(date, 'month');
  }

  return getStartOfUtc(date, 'year');
}

function getNextBucket(date: Date, source: DataSource): Date {
  if (source === 'tick') {
    return getStartOfUtc(date, 'hour', 1);
  }

  if (source === 'minute') {
    return getStartOfUtc(date, 'day', 1);
  }

  if (source === 'hour') {
    return getStartOfUtc(date, 'month', 1);
  }

  return getStartOfUtc(date, 'year', 1);
}

function getCompletedPeriodUrl(
  instrumentCode: string,
  source: DataSource,
  priceType: GenerateUrlsInput['priceType'],
  date: Date
): string {
  const [year, zeroBasedMonth, day, hour] = getYMDH(date);
  const month = zeroBasedMonth + 1;

  if (source === 'tick') {
    return `${URL_ROOT}/ticks/${instrumentCode}/${year}/${month}/${day}/${hour}`;
  }

  const base = `${URL_ROOT}/candles/${source}/${instrumentCode}/${priceType.toUpperCase()}`;

  if (source === 'minute') {
    return `${base}/${year}/${month}/${day}`;
  }

  if (source === 'hour') {
    return `${base}/${year}/${month}`;
  }

  return `${base}/${year}`;
}

function getActivePeriodUrl(
  instrumentCode: string,
  source: DataSource,
  priceType: GenerateUrlsInput['priceType'],
  date: Date
): string {
  const base =
    source === 'tick'
      ? `${URL_ROOT}/ticks/${instrumentCode}`
      : `${URL_ROOT}/candles/${source}/${instrumentCode}/${priceType.toUpperCase()}`;

  return `${base}?from=${+date}`;
}

export function generateUrls({
  instrument,
  timeframe,
  priceType,
  startDate,
  endDate,
  nowDate = new Date()
}: GenerateUrlsInput): string[] {
  const source = sourceByTimeframe[timeframe];
  const instrumentCode = instrumentMetaData[instrument].code;
  const dateLimit = endDate < nowDate ? endDate : nowDate;

  if (startDate >= dateLimit) {
    return [];
  }

  const urls: string[] = [];
  let bucketStart = getBucketStart(startDate, source);

  while (bucketStart < dateLimit) {
    const bucketEnd = getNextBucket(bucketStart, source);
    const isActiveBucket = nowDate >= bucketStart && nowDate < bucketEnd;

    urls.push(
      isActiveBucket
        ? getActivePeriodUrl(instrumentCode, source, priceType, bucketStart)
        : getCompletedPeriodUrl(instrumentCode, source, priceType, bucketStart)
    );

    bucketStart = bucketEnd;
  }

  return urls;
}

export { sourceByTimeframe };
