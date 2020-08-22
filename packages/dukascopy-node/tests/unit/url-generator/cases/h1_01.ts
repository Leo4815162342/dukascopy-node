const input = {
  instrument: 'eurusd',
  timeframe: 'h1',
  startDate: new Date('2019-01-01T00:00:00.000Z'),
  endDate: new Date('2019-05-01T00:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/00/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/02/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/03/BID_candles_hour_1.bi5'
];

export { input, expectedOutput };
