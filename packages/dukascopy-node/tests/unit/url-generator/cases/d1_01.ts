const input = {
  instrument: 'btcusd',
  timeframe: 'd1',
  startDate: new Date('2018-12-08T00:00:00.000Z'),
  endDate: new Date('2019-05-22T00:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/BID_candles_day_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/00/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/01/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/02/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/03/BID_candles_hour_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/04/BID_candles_hour_1.bi5'
];

export { input, expectedOutput };
