import { HistoryConfig } from './config/types';

import fetch from 'node-fetch';
import { defaultOptions } from './config';
import { validateConfig } from './validator';
import { generateRequestData } from './request-generator';
import { decompress } from './decompress';
import { normaliseData, getNormaliser } from './normalise';

import { symbols } from './config/symbols';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/18/22h_ticks.bi5';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/BID_candles_min_1.bi5';
// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/ASK_candles_min_1.bi5';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/BID_candles_hour_1.bi5';
// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/ASK_candles_hour_1.bi5';

async function getQuotes(searchConfig: HistoryConfig) {
  const mergedSearchConfig = { ...defaultOptions, ...searchConfig };

  const { isValid, validationErrors } = validateConfig(mergedSearchConfig);

  if (!isValid) {
    throw validationErrors;
  }

  const requestData = generateRequestData(mergedSearchConfig);

  // console.log(requestData);

  const quotes = await Promise.all(
    requestData.map(async ({ timestamp, url }) => {
      console.log('START', url);
      const data = await fetch(url);
      const bufferedData = await data.buffer();
      console.log('END', url);
      const decompressedData = decompress(bufferedData, mergedSearchConfig.timeframe);
      const normalizer = getNormaliser(mergedSearchConfig.timeframe, timestamp, 100000, true); // TODO: use real decimal factor
      const normalizedData = normaliseData(decompressedData, normalizer);

      return normalizedData;
    })
  );

  const sorted = quotes.filter(arr => arr.length > 0).sort((a, b) => a[0][0] - b[0][0]);
  const merged = [].concat(...sorted);

  // const aggregatedDate; // TODO: aggregation logic

  return merged;
}

(async () => {
  try {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-03-22', end: '2019-03-23' },
      timeframe: 'h1',
      volumes: false,
      gmtOffset: 0
    };
    const quotes = await getQuotes(config);
    console.log(quotes);
    // console.log(quotes[0][0]);
    // console.log(quotes[quotes.length - 1][0]);
  } catch (error) {
    console.log('error', error);
  }
})();
