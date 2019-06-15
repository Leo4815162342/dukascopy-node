const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-02-27',
    to: '2019-02-28'
  },
  timeframe: 'tick',
  utcOffset: 360
};

const expectedOutput = [
  {
    timestamp: 1551247200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/06h_ticks.bi5'
  },
  {
    timestamp: 1551250800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/07h_ticks.bi5'
  },
  {
    timestamp: 1551254400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/08h_ticks.bi5'
  },
  {
    timestamp: 1551258000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/09h_ticks.bi5'
  },
  {
    timestamp: 1551261600000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/10h_ticks.bi5'
  },
  {
    timestamp: 1551265200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/11h_ticks.bi5'
  },
  {
    timestamp: 1551268800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/12h_ticks.bi5'
  },
  {
    timestamp: 1551272400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/13h_ticks.bi5'
  },
  {
    timestamp: 1551276000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/14h_ticks.bi5'
  },
  {
    timestamp: 1551279600000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/15h_ticks.bi5'
  },
  {
    timestamp: 1551283200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/16h_ticks.bi5'
  },
  {
    timestamp: 1551286800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/17h_ticks.bi5'
  },
  {
    timestamp: 1551290400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/18h_ticks.bi5'
  },
  {
    timestamp: 1551294000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/19h_ticks.bi5'
  },
  {
    timestamp: 1551297600000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/20h_ticks.bi5'
  },
  {
    timestamp: 1551301200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/21h_ticks.bi5'
  },
  {
    timestamp: 1551304800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/22h_ticks.bi5'
  },
  {
    timestamp: 1551308400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/27/23h_ticks.bi5'
  },
  {
    timestamp: 1551312000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/28/00h_ticks.bi5'
  },
  {
    timestamp: 1551315600000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/28/01h_ticks.bi5'
  },
  {
    timestamp: 1551319200000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/28/02h_ticks.bi5'
  },
  {
    timestamp: 1551322800000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/28/03h_ticks.bi5'
  },
  {
    timestamp: 1551326400000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/28/04h_ticks.bi5'
  },
  {
    timestamp: 1551330000000,
    url: 'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/01/28/05h_ticks.bi5'
  }
];

export { config, expectedOutput };
