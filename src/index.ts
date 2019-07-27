import { Optional } from 'utility-types';

import { instruments } from './config/instruments';
import { timeframes } from './config/timeframes';
import { priceTypes } from './config/price-types';

import { validateConfig } from './config-validator';
import { normaliseDates } from './dates-normaliser';
import { generateUrls } from './url-generator';
import { batchedFetch } from './buffer-fetcher';
import { processData } from './processor';

export type HistoryConfig = {
  instrument: keyof typeof instruments;
  dates: {
    from: string;
    to: string;
  };
  timeframe: keyof typeof timeframes;
  priceType: keyof typeof priceTypes;
  utcOffset: number;
  volumes: boolean;
};

const defaultKeys: Pick<HistoryConfig, 'timeframe' | 'priceType' | 'utcOffset' | 'volumes'> = {
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 0,
  volumes: true
};

async function getHistoricRates(config: Optional<HistoryConfig, keyof typeof defaultKeys>) {
  const mergedConfig = { ...defaultKeys, ...config };

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
    utcOffset
  } = mergedConfig;

  const [startDate, endDate] = normaliseDates({
    instrument,
    startDate: from,
    endDate: to,
    timeframe,
    utcOffset
  });

  const urls = generateUrls({ instrument, timeframe, priceType, startDate, endDate });

  const bufferredData = await batchedFetch(urls);

  const processedData = await processData({
    instrument,
    requestedTimeframe: timeframe,
    bufferObjects: bufferredData,
    priceType,
    volumes
  });

  const [startDateMs, endDateMs] = [+startDate, +endDate];

  const filteredData = processedData.filter(
    ([timestamp]) => timestamp && timestamp >= startDateMs && timestamp < endDateMs
  );

  return filteredData;
}

export { getHistoricRates };
