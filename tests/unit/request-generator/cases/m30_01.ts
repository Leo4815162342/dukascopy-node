const config = {
  instrument: 'eurhkd',
  dates: {
    from: '2010-11-15',
    to: '2010-12-01'
  },
  timeframe: 'm30',
  priceType: 'bid',
  utcOffset: 0
};

const expectedOutput = [
  {
    timestamp: 1289779200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/15/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1289865600000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/16/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1289952000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/17/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290038400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/18/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290124800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/19/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290211200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/20/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290297600000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/21/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290384000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/22/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290470400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/23/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290556800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/24/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290643200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/25/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290729600000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/26/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290816000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/27/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290902400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/28/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1290988800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/29/BID_candles_min_1.bi5'
  },
  {
    timestamp: 1291075200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURHKD/2010/10/30/BID_candles_min_1.bi5'
  }
];

export { config, expectedOutput };
