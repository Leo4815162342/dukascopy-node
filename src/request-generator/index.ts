import { HistoryConfig } from './../types';
import { RequestObject, EndopointToFilePeriodMap } from './types';

import addMinutes from 'date-fns/addMinutes';
import parseISO from 'date-fns/parseISO';
import { getStarOfUtc } from './../utils';

import getUrl from './get-url';
import getEndpointType from './get-endpoint-type';

const endopointToFilePeriodMap: EndopointToFilePeriodMap = {
  tick: 'hour',
  min: 'day',
  hour: 'month'
};

function normalizedDateInput(date: string): Date {
  const parsedDate = parseISO(date);

  return addMinutes(parsedDate, -parsedDate.getTimezoneOffset());
}

function generateRequestData(searchConfig: Partial<HistoryConfig>): RequestObject[] {
  const {
    symbol,
    dates: { start, end },
    timeframe,
    priceType,
    gmtOffset
  } = searchConfig;

  const endpointType = getEndpointType(timeframe);

  const [normStart, normEnd] = [start, end].map(normalizedDateInput);

  const offsetStart = getStarOfUtc(
    addMinutes(normStart, gmtOffset),
    endopointToFilePeriodMap[endpointType]
  );
  const offsetEnd = getStarOfUtc(addMinutes(normEnd, gmtOffset), 'hour');

  const requestData = [];

  let tempStartDate = offsetStart;

  while (tempStartDate < offsetEnd) {
    const timestamp = +tempStartDate;
    const url = getUrl(symbol, tempStartDate, endpointType, priceType);
    requestData.push({ timestamp, url });
    tempStartDate = getStarOfUtc(tempStartDate, endopointToFilePeriodMap[endpointType], 1);
  }

  return requestData;
}

export { generateRequestData };
