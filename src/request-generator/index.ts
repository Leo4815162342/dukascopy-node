import { HistoryConfig } from '../config/types';
import { RequestObject, EndopointToFilePeriodMap, EndpointType } from './types';
import { getStarOfUtc } from './../utils';

import { getUrl } from './url';

const endopointToFilePeriodMap: EndopointToFilePeriodMap = {
  tick: 'hour',
  min: 'day',
  hour: 'month'
};

function getEndpointType(timeframe: HistoryConfig['timeframe']): EndpointType {
  if (timeframe === 'tick') {
    return 'tick';
  } else if (timeframe === 'm1' || timeframe === 'm30') {
    return 'min';
  } else {
    return 'hour';
  }
}

function generateRequestData(
  instrument: HistoryConfig['instrument'],
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
    const url = getUrl(instrument, tempStartDate, endpointType, priceType);
    requestData.push({ timestamp, url });
    tempStartDate = getStarOfUtc(tempStartDate, endopointToFilePeriodMap[endpointType], 1);
  }
  return requestData;
}

export { generateRequestData };
