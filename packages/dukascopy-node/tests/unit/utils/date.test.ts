import { getDateFromUrl, getUTCDateFromString } from '../../../src/utils/date';

const TEST_NAMESPACE = 'Date utils';

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

describe(TEST_NAMESPACE, () => {
  describe(getDateFromUrl.name, () => {
    urls.forEach(({ url, isoString }) => {
      it(`Generates proper date from URL: ${url}`, () => {
        const date = getDateFromUrl(url);
        expect(date.toISOString()).toEqual(isoString);
      });
    });
  });
});

const dateStrings = [
  { string: '2019-01-01', output: '2019-01-01T00:00:00.000Z' },
  { string: '2019-01-01 12:34', output: '2019-01-01T12:34:00.000Z' },
  { string: '2019-01-01T12:21', output: '2019-01-01T12:21:00.000Z' },
  { string: '2019-01-01T12:00:00', output: '2019-01-01T12:00:00.000Z' },
  { string: '2019-01-01T12:00:00.000Z', output: '2019-01-01T12:00:00.000Z' },
  { string: '2019-01-01T12:34:56.789Z', output: '2019-01-01T12:34:00.000Z' },
  { string: '2019-02-29T12:34:56.789Z', output: false },
  { string: '2019-01-0', output: false },
  { string: 'abcde', output: false }
];

describe(TEST_NAMESPACE, () => {
  describe(getUTCDateFromString.name, () => {
    dateStrings.forEach(({ string, output }) => {
      it(`Generates proper output for string: ${string}`, () => {
        const parsedDate = getUTCDateFromString(string);

        if (parsedDate) {
          expect(parsedDate.toISOString()).toEqual(output);
        } else {
          expect(parsedDate).toEqual(false);
        }
      });
    });
  });
});
