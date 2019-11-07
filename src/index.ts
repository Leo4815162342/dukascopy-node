import { OptionalKeys } from 'utility-types';

import { instruments } from './config/instruments';
import { timeframes } from './config/timeframes';
import { priceTypes } from './config/price-types';

import { validateConfig } from './config-validator';
import { normaliseDates } from './dates-normaliser';
import { generateUrls } from './url-generator';
import { BuffetFetcher } from './buffer-fetcher';
import { processData } from './processor';

export type HistoryConfig = {
  instrument: keyof typeof instruments;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: keyof typeof timeframes;
  priceType?: keyof typeof priceTypes;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
};

const defaultConfig: Required<Pick<HistoryConfig, OptionalKeys<HistoryConfig>>> = {
  timeframe: 'd1',
  priceType: 'bid',
  utcOffset: 0,
  volumes: true,
  ignoreFlats: true
};

async function getHistoricRates(config: HistoryConfig) {
  const mergedConfig = { ...defaultConfig, ...config };

  const { isValid, validationErrors } = validateConfig(mergedConfig);

  if (!isValid) {
    throw { validationErrors };
  }

  const {
    instrument,
    dates: { from, to },
    timeframe,
    priceType,
    volumes,
    utcOffset,
    ignoreFlats
  } = mergedConfig;

  const [startDate, endDate] = normaliseDates({
    instrument,
    startDate: from,
    endDate: to,
    timeframe,
    utcOffset
  });

  const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

  const bufferFetcher = new BuffetFetcher();

  const bufferredData = await bufferFetcher.fetch(urls);

  const processedData = processData({
    instrument,
    requestedTimeframe: timeframe,
    bufferObjects: bufferredData,
    priceType,
    volumes,
    ignoreFlats
  });

  const [startDateMs, endDateMs] = [+startDate, +endDate];

  const filteredData = processedData.filter(
    ([timestamp]) => timestamp && timestamp >= startDateMs && timestamp < endDateMs
  );

  return filteredData;
}

export { getHistoricRates };
