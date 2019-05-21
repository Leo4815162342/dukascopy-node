import { HistoryConfig } from '../config/types';
import { RequestObject, EndopointToFilePeriodMap } from './types';
import { getStarOfUtc } from './../utils';

import getUrl from './get-url';
import getEndpointType from './get-endpoint-type';

const endopointToFilePeriodMap: EndopointToFilePeriodMap = {
  tick: 'hour',
  min: 'day',
  hour: 'month'
};

function generateRequestData(
  symbol: HistoryConfig['symbol'],
  startDate: Date,
  endDate: Date,
  timeframe: HistoryConfig['timeframe'],
  priceType: HistoryConfig['priceType']
): RequestObject[] {
  const endpointType = getEndpointType(timeframe);

  const requestData = [];

  let tempStartDate = getStarOfUtc(startDate, endopointToFilePeriodMap[endpointType]);

  while (tempStartDate < endDate) {
    const timestamp = +tempStartDate;
    const url = getUrl(symbol, tempStartDate, endpointType, priceType);
    requestData.push({ timestamp, url });
    tempStartDate = getStarOfUtc(tempStartDate, endopointToFilePeriodMap[endpointType], 1);
  }

  return requestData;
}

export { generateRequestData };
