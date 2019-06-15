const config = {
  instrument: 'nzdcad',
  dates: {
    from: '2008-01-01',
    to: '2010-01-01'
  },
  timeframe: 'd1',
  priceType: 'ask',
  utcOffset: 0
};

const expectedOutput = [
  {
    timestamp: 1199145600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/00/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1201824000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/01/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1204329600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/02/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1207008000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/03/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1209600000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/04/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1212278400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/05/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1214870400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/06/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1217548800000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/07/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1220227200000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/08/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1222819200000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/09/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1225497600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/10/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1228089600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2008/11/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1230768000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/00/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1233446400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/01/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1235865600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/02/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1238544000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/03/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1241136000000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/04/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1243814400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/05/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1246406400000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/06/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1249084800000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/07/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1251763200000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/08/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1254355200000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/09/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1257033600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/10/ASK_candles_hour_1.bi5'
  },
  {
    timestamp: 1259625600000,
    url: 'https://datafeed.dukascopy.com/datafeed/NZDCAD/2009/11/ASK_candles_hour_1.bi5'
  }
];

export { config, expectedOutput };
