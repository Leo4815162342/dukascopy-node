const config = {
  instrument: 'gbpjpy',
  dates: {
    from: '2018-01-01',
    to: '2018-12-31'
  },
  timeframe: 'h1',
  priceType: 'bid',
  utcOffset: -420
};

const expectedOutput = [
  {
    timestamp: 1512086400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2017/11/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1514764800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/00/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1517443200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/01/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1519862400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/02/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1522540800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/03/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1525132800000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/04/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1527811200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/05/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1530403200000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/06/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1533081600000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/07/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1535760000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/08/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1538352000000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/09/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1541030400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/10/BID_candles_hour_1.bi5'
  },
  {
    timestamp: 1543622400000,
    url: 'https://datafeed.dukascopy.com/datafeed/GBPJPY/2018/11/BID_candles_hour_1.bi5'
  }
];

export { config, expectedOutput };
