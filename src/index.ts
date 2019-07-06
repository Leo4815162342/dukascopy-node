import { HistoryConfig } from './config/types';

import { normalizeDates } from './utils/date';
import { defaultConfig } from './config/default-config';
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

  const [startDate, endDate] = normalizeDates(instrument, from, to, timeframe, utcOffset);

  const requestData = generateRequestData(instrument, startDate, endDate, timeframe, priceType);

  const buffers = await batchedFetch(requestData.map(({ url }) => url), 10);

  const decompressed = await Promise.all(buffers.map(buffer => decompress({ buffer, timeframe })));

  const normalized = decompressed.map((data, i) =>
    normalise({ data, timeframe, startTs: requestData[i].timestamp, instrument, volumes })
  );

  const aggregated = aggregate({ data: normalized, startDate, endDate, timeframe });

  return aggregated;
}

export { getHistoricRates };
