import { HistoryConfig } from '../types';

import { RequestObject, EndpointType } from './types';

import { pad } from '../utils';

const API_ROOT = 'https://datafeed.dukascopy.com/datafeed';

function getRequestObject(
  symbol: HistoryConfig['symbol'],
  date: Date,
  endpointType: EndpointType,
  priceType: HistoryConfig['priceType']
): RequestObject {
  const [year, month, day, hour] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  const [yearPad, monthPad, dayPad, hourPad] = [year, month, day, hour].map(pad);

  const requetObject: RequestObject = {
    timestamp: 0,
    url: `${API_ROOT}/${symbol.toUpperCase()}/${yearPad}/${monthPad}/`
  };

  if (endpointType === 'tick') {
    requetObject.url += `${dayPad}/${hourPad}h_ticks.bi5`;
    requetObject.timestamp = +new Date(Date.UTC(year, month, day, hour));
  } else if (endpointType === 'min') {
    requetObject.url += `${dayPad}/${priceType.toLocaleUpperCase()}_candles_min_1.bi5`;
    requetObject.timestamp = +new Date(Date.UTC(year, month, day));
  } else if (endpointType === 'hour') {
    requetObject.url += `${priceType.toLocaleUpperCase()}_candles_hour_1.bi5`;
    requetObject.timestamp = +new Date(Date.UTC(year, month));
  }

  return requetObject;
}

export default getRequestObject;
