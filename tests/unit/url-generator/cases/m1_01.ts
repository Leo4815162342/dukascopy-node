const input = {
  instrument: 'gbpusd',
  timeframe: 'm1',
  startDate: new Date('2019-03-02T00:00:00.000Z'),
  endDate: new Date('2019-03-09T00:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/GBPUSD/2019/02/02/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/GBPUSD/2019/02/03/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/GBPUSD/2019/02/04/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/GBPUSD/2019/02/05/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/GBPUSD/2019/02/06/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/GBPUSD/2019/02/07/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/GBPUSD/2019/02/08/BID_candles_min_1.bi5'
];

export { input, expectedOutput };
