import { HistoryConfig } from './config/types';

import { normalizedDateInput } from './utils';
import { defaultConfig } from './config';
import { fetchBufferedData } from './buffer-fetcher';
import { validateConfig } from './validator';
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
    symbol,
    dates: { start, end },
    timeframe,
    priceType,
    gmtOffset,
    volumes
  } = mergedConfig;

  const [startDate, endDate] = [start, end].map(d => normalizedDateInput(d, gmtOffset));

  const requestData = generateRequestData(symbol, startDate, endDate, timeframe, priceType);

  const bufferedData = await fetchBufferedData(requestData.map(({ url }) => url));

  const decompressed = bufferedData.map(buffer => decompress(buffer, timeframe));

  const normalized = decompressed.map((data, i) =>
    normalise(data, timeframe, requestData[i].timestamp, symbol, volumes)
  );

  const aggregated = aggregate(normalized, startDate, endDate, timeframe);

  return aggregated;
}

export { getHistoricRates };
