const input = {
  instrument: 'eurusd',
  timeframe: 'h1',
  startDate: new Date('2018-12-20T00:00:00.000Z'),
  endDate: new Date('2019-07-07T12:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/11/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/00/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/02/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/03/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/04/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/01/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/02/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/03/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/04/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/05/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/06/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/07/BID_candles_min_1.bi5'
];

export { input, expectedOutput };
