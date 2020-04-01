import {
  validateConfig,
  normaliseDates,
  generateUrls,
  BufferFetcher,
  processData,
  formatOutput,
  Config,
  DefaultConfig,
  Price,
  Timeframe,
  Format,
  Output
} from 'dukascopy-core';

const defaultConfig: DefaultConfig = {
  timeframe: Timeframe.d1,
  priceType: Price.bid,
  utcOffset: 0,
  volumes: true,
  ignoreFlats: true,
  format: Format.array
};

async function getHistoricRates(config: Config): Promise<Output> {
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
    ignoreFlats,
    format
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

  const formattedData = formatOutput({ processedData: filteredData, format, timeframe });

  return formattedData;
}

export { getHistoricRates };
