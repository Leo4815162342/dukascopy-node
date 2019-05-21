import { HistoryConfig } from './config/types';

import fetch from 'node-fetch';
import { normalizedDateInput } from './utils';
import { defaultOptions } from './config';
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

async function getQuotes(searchConfig: HistoryConfig) {
  const mergedSearchConfig = { ...defaultOptions, ...searchConfig };

  const { isValid, validationErrors } = validateConfig(mergedSearchConfig);

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
  } = mergedSearchConfig;

  const [startDate, endDate] = [start, end].map(d => normalizedDateInput(d, gmtOffset));

  const requestData = generateRequestData(symbol, startDate, endDate, timeframe, priceType);

  // console.log(requestData);

  const quotes = await Promise.all(
    requestData.map(async ({ timestamp, url }) => {
      console.log('START', url);
      const data = await fetch(url);
      const bufferedData = await data.buffer();
      console.log('END', url);
      const decompressedData = decompress(bufferedData, timeframe);
      const normalisedData = normalise(decompressedData, timeframe, timestamp, symbol, volumes);

      return normalisedData;
    })
  );

  const aggregatedData = aggregate(quotes, startDate, endDate, timeframe);

  return aggregatedData;
}

(async () => {
  try {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-01-01', end: '2019-01-04' },
      timeframe: 'd1',
      volumes: true,
      gmtOffset: 0
    };
    const quotes = await getQuotes(config);
    console.log(quotes);
    console.log(quotes.length);
    // console.log(quotes[0][0]);
    // console.log(quotes[quotes.length - 1][0]);
  } catch (error) {
    console.log('error', error);
  }
})();
