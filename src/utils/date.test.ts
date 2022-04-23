import { expect, describe, it } from 'vitest';
import { getDateFromUrl } from './date';

const urls = [
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/BID_candles_day_1.bi5',
    isoString: '2018-01-01T00:00:00.000Z'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/01/BID_candles_hour_1.bi5',
    isoString: '2018-02-01T00:00:00.000Z'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/01/01/BID_candles_min_1.bi5',
    isoString: '2018-02-01T00:00:00.000Z'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/01/01/01h_ticks.bi5',
    isoString: '2018-02-01T01:00:00.000Z'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2016/BID_candles_day_1.bi5',
    isoString: '2016-01-01T00:00:00.000Z'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2016/08/BID_candles_hour_1.bi5',
    isoString: '2016-09-01T00:00:00.000Z'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2016/01/28/BID_candles_min_1.bi5',
    isoString: '2016-02-28T00:00:00.000Z'
  },
  {
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2016/11/31/00h_ticks.bi5',
    isoString: '2016-12-31T00:00:00.000Z'
  }
];

describe('Date utils', () => {
  describe(getDateFromUrl.name, () => {
    urls.forEach(({ url, isoString }) => {
      it(`Generates proper date from URL: ${url}`, () => {
        const date = getDateFromUrl(url);
        expect(date.toISOString()).toEqual(isoString);
      });
    });
  });
});
