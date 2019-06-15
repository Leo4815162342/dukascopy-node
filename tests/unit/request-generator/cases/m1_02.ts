const config = {
  instrument: 'cadchf',
  dates: {
    from: '2016-05-01',
    to: '2016-05-07'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: -120
};

const expectedOutput = [
  {
    timestamp: 1461974400000,
    url: 'https://datafeed.dukascopy.com/datafeed/CADCHF/2016/03/30/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1462060800000,
    url: 'https://datafeed.dukascopy.com/datafeed/CADCHF/2016/04/01/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1462147200000,
    url: 'https://datafeed.dukascopy.com/datafeed/CADCHF/2016/04/02/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1462233600000,
    url: 'https://datafeed.dukascopy.com/datafeed/CADCHF/2016/04/03/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1462320000000,
    url: 'https://datafeed.dukascopy.com/datafeed/CADCHF/2016/04/04/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1462406400000,
    url: 'https://datafeed.dukascopy.com/datafeed/CADCHF/2016/04/05/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1462492800000,
    url: 'https://datafeed.dukascopy.com/datafeed/CADCHF/2016/04/06/BID_candles_min_1.bi5'
  }
];

export { config, expectedOutput };
