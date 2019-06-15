const config = {
  instrument: 'btcusd',
  dates: {
    from: '2018-02-28',
    to: '2018-03-01'
  },
  timeframe: 'tick',
  utcOffset: -120
};

const expectedOutput = [
  {
    timestamp: 1519768800000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/27/22h_ticks.bi5'
  },
  {
    timestamp: 1519772400000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/27/23h_ticks.bi5'
  },
  {
    timestamp: 1519776000000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/00h_ticks.bi5'
  },
  {
    timestamp: 1519779600000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/01h_ticks.bi5'
  },
  {
    timestamp: 1519783200000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/02h_ticks.bi5'
  },
  {
    timestamp: 1519786800000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/03h_ticks.bi5'
  },
  {
    timestamp: 1519790400000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/04h_ticks.bi5'
  },
  {
    timestamp: 1519794000000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/05h_ticks.bi5'
  },
  {
    timestamp: 1519797600000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/06h_ticks.bi5'
  },
  {
    timestamp: 1519801200000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/07h_ticks.bi5'
  },
  {
    timestamp: 1519804800000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/08h_ticks.bi5'
  },
  {
    timestamp: 1519808400000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/09h_ticks.bi5'
  },
  {
    timestamp: 1519812000000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/10h_ticks.bi5'
  },
  {
    timestamp: 1519815600000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/11h_ticks.bi5'
  },
  {
    timestamp: 1519819200000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/12h_ticks.bi5'
  },
  {
    timestamp: 1519822800000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/13h_ticks.bi5'
  },
  {
    timestamp: 1519826400000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/14h_ticks.bi5'
  },
  {
    timestamp: 1519830000000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/15h_ticks.bi5'
  },
  {
    timestamp: 1519833600000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/16h_ticks.bi5'
  },
  {
    timestamp: 1519837200000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/17h_ticks.bi5'
  },
  {
    timestamp: 1519840800000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/18h_ticks.bi5'
  },
  {
    timestamp: 1519844400000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/19h_ticks.bi5'
  },
  {
    timestamp: 1519848000000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/20h_ticks.bi5'
  },
  {
    timestamp: 1519851600000,
    url: 'https://datafeed.dukascopy.com/datafeed/BTCUSD/2018/01/28/21h_ticks.bi5'
  }
];

export { config, expectedOutput };
