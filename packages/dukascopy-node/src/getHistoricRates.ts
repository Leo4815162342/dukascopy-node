import {
  validateConfig,
  normaliseDates,
  generateUrls,
  BufferFetcher,
  processData,
  HistoryConfig,
  DefaultHistoryConfig
} from 'dukascopy-core';

const defaultConfig: DefaultHistoryConfig = {
  timeframe: 'd1',
  priceType: 'bid',
  utcOffset: 0,
  volumes: true,
  ignoreFlats: true,
  format: 'array'
};
// TODO: rewrite as a class
// custom fetch method
// fetchoptions
// subscriptions?
// requestThrottling/debouncing
// exponential backoff
// progress reporting
async function getHistoricRates(config: HistoryConfig): Promise<number[][]> {
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

  const bufferFetcher = new BufferFetcher();

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
