const input = {
  instrument: 'euraud',
  timeframe: 'mn1',
  startDate: new Date('2015-12-08T00:00:00.000Z'),
  endDate: new Date('2018-12-31T00:00:00.000Z'),
  priceType: 'ask'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURAUD/2015/ASK_candles_day_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURAUD/2016/ASK_candles_day_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURAUD/2017/ASK_candles_day_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURAUD/2018/ASK_candles_day_1.bi5'
];

export { input, expectedOutput };
