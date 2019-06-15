const config = {
  instrument: 'ethusd',
  dates: {
    from: '2018-01-01',
    to: '2019-03-01'
  },
  timeframe: 'mn1',
  priceType: 'ask',
  utcOffset: 0
};

const expectedOutput = [
  {
    timestamp: 1514764800000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/00/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1517443200000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/01/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1519862400000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/02/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1522540800000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/03/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1525132800000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/04/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1527811200000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/05/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1530403200000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/06/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1533081600000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/07/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1535760000000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/08/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1538352000000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/09/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1541030400000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/10/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1543622400000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2018/11/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1546300800000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2019/00/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1548979200000,
    url: 'https://datafeed.dukascopy.com/datafeed/ETHUSD/2019/01/ASK_candles_hour_1.bi5'
  }
];

export { config, expectedOutput };
