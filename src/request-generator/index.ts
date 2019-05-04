import { HistoryConfig } from './../types';
import { RequestObject, EndopointToFilePeriodMap } from './types';

import { addMinutes } from 'date-fns';
import { getStarOfUtc } from './../utils';

import getRequestObject from './get-request-object';
import getEndpointType from './get-endpoint-type';

const endopointToFilePeriodMap: EndopointToFilePeriodMap = {
  tick: 'hour',
  min: 'day',
  hour: 'month'
};

function generateRequestData(searchConfig: HistoryConfig): RequestObject[] {
  const {
    symbol,
    dates: { start, end },
    timeframe,
    priceType,
    gmtOffset
  } = searchConfig;

  const endpointType = getEndpointType(timeframe);
  const offsetStart = getStarOfUtc(
    addMinutes(start, gmtOffset),
    endopointToFilePeriodMap[endpointType]
  );
  const offsetEnd = getStarOfUtc(addMinutes(end, gmtOffset), 'hour');

  process.env.TZ = 'America/Resolute';
  // process.env.TZ = 'Australia/Sydney';

  const requestData = [];

  let tempStartDate = offsetStart;

  while (tempStartDate < offsetEnd) {
    const { timestamp, url } = getRequestObject(symbol, tempStartDate, endpointType, priceType);
    requestData.push({ timestamp, url });
    tempStartDate = getStarOfUtc(tempStartDate, endopointToFilePeriodMap[endpointType], 1);
  }

  return requestData;
}

export { generateRequestData };
