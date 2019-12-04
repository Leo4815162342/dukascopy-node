const input = {
  instrument: 'eurusd',
  timeframe: 'd1',
  startDate: new Date('2017-12-08T00:00:00.000Z'),
  endDate: new Date('2018-05-22T00:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2017/BID_candles_day_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2018/BID_candles_day_1.bi5'
];

export { input, expectedOutput };
