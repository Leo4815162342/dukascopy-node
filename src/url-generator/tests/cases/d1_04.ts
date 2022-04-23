const input = {
  instrument: 'btcusd',
  timeframe: 'd1',
  startDate: new Date('2019-07-08T00:00:00.000Z'),
  endDate: new Date('2019-07-15T00:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/06/08/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/06/09/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/06/10/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/BTCUSD/2019/06/11/BID_candles_min_1.bi5'
];

export { input, expectedOutput };
