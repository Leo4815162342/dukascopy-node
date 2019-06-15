const config = {
  instrument: 'audcad',
  dates: {
    from: '2016-07-01 10:00',
    to: '2016-07-01 12:00'
  },
  timeframe: 'tick',
  utcOffset: 0
};

const expectedOutput = [
  {
    timestamp: 1467367200000,
    url: 'https://datafeed.dukascopy.com/datafeed/AUDCAD/2016/06/01/10h_ticks.bi5'
  },
  {
    timestamp: 1467370800000,
    url: 'https://datafeed.dukascopy.com/datafeed/AUDCAD/2016/06/01/11h_ticks.bi5'
  }
];

export { config, expectedOutput };
