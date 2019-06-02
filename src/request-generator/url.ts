import { HistoryConfig } from '../config/types';

import { EndpointType } from './types';
import { pad } from '../utils';

const URL_ROOT = 'https://datafeed.dukascopy.com/datafeed';

function getUrl(
  instrument: HistoryConfig['instrument'],
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

  let url = `${URL_ROOT}/${instrument.toUpperCase()}/${yearPad}/${monthPad}/`;

  if (endpointType === 'tick') {
    url += `${dayPad}/${hourPad}h_ticks.bi5`;
  } else if (endpointType === 'min') {
    url += `${dayPad}/${priceType.toUpperCase()}_candles_min_1.bi5`;
  } else if (endpointType === 'hour') {
    url += `${priceType.toUpperCase()}_candles_hour_1.bi5`;
  }

  return url;
}

export { URL_ROOT, getUrl };
