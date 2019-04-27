import { HistoryConfig } from './types';

import { endOfMonth, addMinutes, addHours, addDays, addMonths, subDays } from 'date-fns';
import { pad } from './utils';

const API_ROOT = 'https://datafeed.dukascopy.com/datafeed';

function getUrl(
  symbol: HistoryConfig['symbol'],
  date: Date,
  timeframe: HistoryConfig['timeframe'],
  priceType: HistoryConfig['priceType']
) {
  const [year, month, day, hour] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ].map(pad);

  let url = `${API_ROOT}/${symbol.toUpperCase()}/${year}/${month}/`;

  if (timeframe === 'tick') {
    url += `${day}/${hour}h_ticks.bi5`;
  } else if (timeframe === 'm1' || timeframe === 'm30') {
    url += `${day}/${priceType.toLocaleUpperCase()}_candles_min_1.bi5`;
  } else {
    url += `${priceType.toLocaleUpperCase()}_candles_hour_1.bi5`;
  }

  return url;
}

function incrementDate(date: Date, timeframe: HistoryConfig['timeframe']): Date {
  let newDate;

  if (timeframe === 'tick') {
    newDate = addHours(date, 1);
  } else if (timeframe === 'm1' || timeframe === 'm30') {
    newDate = addDays(date, 1);
  } else {
    newDate = addMonths(date, 1);
  }

  return newDate;
}

type RequestData = {
  timestamp: number;
  url: string;
}[];

function generateRequestData(searchConfig: HistoryConfig): RequestData {
  const {
    symbol,
    dates: { start, end },
    timeframe,
    priceType,
    gmtOffset
  } = searchConfig;

  // TODO:
  // format start/end date to closest beginning of day or hour
  // normalize with minimum start date
  const offsetStart = addMinutes(start, gmtOffset);
  const offsetEnd = addMinutes(end, gmtOffset);

  const requestData = [];

  let tempStartDate = offsetStart;

  const upperLimitDate = ['h1', 'd1', 'w1', 'mn1'].some(tf => tf === timeframe)
    ? endOfMonth(subDays(offsetEnd, 1))
    : offsetEnd;

  while (tempStartDate < upperLimitDate) {
    const url = getUrl(symbol, tempStartDate, timeframe, priceType);
    const timestamp = +tempStartDate;
    requestData.push({ timestamp, url });
    tempStartDate = incrementDate(tempStartDate, timeframe);
  }

  return requestData;
}

export { generateRequestData };
