import { HistoryConfig } from '../config/types';

import { EndpointType } from './types';
import { pad } from '../utils';

const API_ROOT = 'https://datafeed.dukascopy.com/datafeed';

function getUrl(
  symbol: HistoryConfig['symbol'],
  date: Date,
  endpointType: EndpointType,
  priceType: HistoryConfig['priceType']
): string {
  const [year, month, day, hour] = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  ];

  const [yearPad, monthPad, dayPad, hourPad] = [year, month, day, hour].map(pad);

  let url = `${API_ROOT}/${symbol.toUpperCase()}/${yearPad}/${monthPad}/`;

  if (endpointType === 'tick') {
    url += `${dayPad}/${hourPad}h_ticks.bi5`;
  } else if (endpointType === 'min') {
    url += `${dayPad}/${priceType.toLocaleUpperCase()}_candles_min_1.bi5`;
  } else if (endpointType === 'hour') {
    url += `${priceType.toLocaleUpperCase()}_candles_hour_1.bi5`;
  }

  return url;
}

export default getUrl;
