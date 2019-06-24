import { HistoryConfig } from './config/types';

import { normalizeDates } from './utils/date';
import { defaultConfig } from './config';
import { batchedFetch } from './buffer-fetcher';
import { validateConfig } from './config-validator';
import { generateRequestData } from './request-generator';
import { decompress } from './decompressor';
import { normalise } from './data-normaliser';
import { aggregate } from './aggregator';

async function getHistoricRates(config: HistoryConfig): Promise<number[][]> {
  const mergedConfig = { ...defaultConfig, ...config };

  const { isValid, validationErrors } = validateConfig(mergedConfig);

  if (!isValid) {
    throw validationErrors;
  }

  const {
    instrument,
    dates: { from, to },
    timeframe,
    priceType,
    volumes,
    utcOffset
  } = mergedConfig;

  const [startDate, endDate] = normalizeDates(instrument, from, to, timeframe, utcOffset);

  const requestData = generateRequestData(instrument, startDate, endDate, timeframe, priceType);

  const bufferedData = await batchedFetch(requestData.map(({ url }) => url), 10);

  const decompressed = await Promise.all(bufferedData.map(buffer => decompress(buffer, timeframe)));

  const normalized = decompressed.map((data, i) =>
    normalise(data, timeframe, requestData[i].timestamp, instrument, volumes)
  );

  const aggregated = aggregate(normalized, startDate, endDate, timeframe);

  return aggregated;
}

export { getHistoricRates };
