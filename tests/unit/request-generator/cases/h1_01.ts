const config = {
  instrument: 'usdcad',
  dates: {
    from: '2017-01-01',
    to: '2018-01-01'
  },
  timeframe: 'h1',
  priceType: 'ask',
  utcOffset: 0
};

const expectedOutput = [
  {
    timestamp: 1483228800000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/00/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1485907200000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/01/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1488326400000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/02/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1491004800000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/03/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1493596800000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/04/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1496275200000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/05/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1498867200000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/06/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1501545600000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/07/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1504224000000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/08/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1506816000000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/09/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1509494400000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/10/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1512086400000,
    url: 'https://datafeed.dukascopy.com/datafeed/USDCAD/2017/11/ASK_candles_hour_1.bi5'
  }
];

export { config, expectedOutput };
