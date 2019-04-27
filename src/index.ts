import { HistoryConfig } from './types';

import fetch from 'node-fetch';
import { generateRequestData } from './request-generator';
import { decompress } from './decompress';
import { normaliseData, getNormaliser } from './normalise';

import { symbols } from './symbols';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/18/22h_ticks.bi5';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/BID_candles_min_1.bi5';
// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/21/ASK_candles_min_1.bi5';

// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/BID_candles_hour_1.bi5';
// 'https://datafeed.dukascopy.com/datafeed/AALUSUSD/2019/02/ASK_candles_hour_1.bi5';

function getStructFormat(timeframe: HistoryConfig['timeframe']) {
  return timeframe === 'tick' ? '>3i2f' : '>5i1f';
}

async function getDecompressedData(url: string, structFormat: '>3i2f' | '>5i1f') {
  const data = await fetch(url);
  const bufferedData = await data.buffer();
  const decompressed = decompress(bufferedData, structFormat);

  return decompressed;
}

async function getQuotes(searchConfig: HistoryConfig) {
  const requestData = generateRequestData(searchConfig);

  const quotes = await Promise.all(
    requestData.map(async ({ timestamp, url }) => {
      console.log('START', url);
      const structFormat = getStructFormat(searchConfig.timeframe);
      const decompressedData = await getDecompressedData(url, structFormat);
      console.log('END', url);
      const normalizer = getNormaliser(searchConfig.timeframe, timestamp, 100000, true);
      const normalizedData = normaliseData(decompressedData, normalizer);

      return normalizedData;
    })
  );

  return quotes;
}

(async () => {
  try {
    let searchConfig: HistoryConfig = {
      symbol: 'eurusd',
      dates: {
        start: new Date('2019-03-21'),
        end: new Date('2019-03-22')
      },
      timeframe: 'm1',
      priceType: 'bid',
      gmtOffset: 0,
      volumes: true
    };

    const quotes = await getQuotes(searchConfig);

    console.log(quotes);
  } catch (error) {
    console.log(error);
  }
})();
