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


async function fetchBufferedData(urls: string[]): Promise<Buffer[]> {

  return await Promise.all(urls.map(async url => {
    const data = await fetch(url);
    const buffer = await data.buffer();
    return buffer;
  }))

}

async function getHistoricRates(searchConfig: HistoryConfig) {
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

  const bufferedData = await fetchBufferedData(requestData.map(({url}) => url));
  
  const decompressed = bufferedData.map(buffer => decompress(buffer, timeframe));

  const normalized = decompressed.map((data, i) =>
    normalise(data, timeframe, requestData[i].timestamp, symbol, volumes)
  );

  const aggregated = aggregate(normalized, startDate, endDate, timeframe);

  return aggregated;
}

(async () => {
  try {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-01-04 00:12', end: '2019-01-04 00:15' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };
    const quotes = await getHistoricRates(config);
    console.log(quotes);
    console.log(quotes.length);
    // console.log(quotes[0][0]);
    // console.log(quotes[quotes.length - 1][0]);
  } catch (error) {
    console.log('error', error);
  }
})();
