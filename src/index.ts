import { HistoryConfig } from './config/types';

import { normalizedDateInput } from './utils';
import { defaultConfig } from './config';
import { fetchBufferedData } from './buffer-fetcher';
import { validateConfig } from './validator';
import { generateRequestData } from './request-generator';
import { decompress } from './decompressor';
import { normalise } from './data-normaliser';
import { aggregate } from './aggregator';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/18/22h_ticks.bi5';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/BID_candles_min_1.bi5';
// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/ASK_candles_min_1.bi5';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/BID_candles_hour_1.bi5';
// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/ASK_candles_hour_1.bi5';

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

// (async () => {
//   try {
//     const config: HistoryConfig = {
//       symbol: 'eurusd',
//       dates: { start: '2019-02-04 00:12', end: '2019-02-04 00:15' },
//       timeframe: 'm1',
//       volumes: true,
//       gmtOffset: 0
//     };
//     const quotes = await getHistoricRates(config);
//     console.log(quotes);
//     console.log(quotes.length);
//     // console.log(quotes[0][0]);
//     // console.log(quotes[quotes.length - 1][0]);
//   } catch (error) {
//     console.log('error', error);
//   }
// })();
