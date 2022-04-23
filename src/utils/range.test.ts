import { expect, describe, it } from 'vitest';
import { getTimeframeFromUrl } from './range';

const TEST_NAMESPACE = 'Range utils';

const urls = [
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/BID_candles_day_1.bi5',
    timeframe: 'd1'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/01/BID_candles_hour_1.bi5',
    timeframe: 'h1'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/01/01/BID_candles_min_1.bi5',
    timeframe: 'm1'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/01/01/01h_ticks.bi5',
    timeframe: 'tick'
  }
];

describe(TEST_NAMESPACE, () => {
  describe(getTimeframeFromUrl.name, () => {
    urls.forEach(({ url, timeframe }) => {
      it(`Generates proper timeframe from URL: ${url}`, () => {
        const tf = getTimeframeFromUrl(url);
        expect(tf).toEqual(timeframe);
      });
    });
  });
});
