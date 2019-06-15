const config = {
  instrument: 'nzdcad',
  dates: {
    from: '2012-02-14',
    to: '2012-02-29'
  },
  timeframe: 'm1',
  priceType: 'ask',
  utcOffset: 0
};

const expectedOutput = [
  {
    timestamp: 1329177600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/14/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329264000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/15/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329350400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/16/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329436800000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/17/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329523200000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/18/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329609600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/19/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329696000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/20/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329782400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/21/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329868800000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/22/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1329955200000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/23/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1330041600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/24/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1330128000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/25/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1330214400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/26/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1330300800000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/27/ASK_candles_min_1.bi5'
  },
  {
    timestamp: 1330387200000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2012/01/28/ASK_candles_min_1.bi5'
  }
];

export { config, expectedOutput };
