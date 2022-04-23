const input = {
  instrument: 'eurusd',
  timeframe: 'h1',
  startDate: new Date('2019-07-10T00:00:00.000Z'),
  endDate: new Date('2019-07-22T00:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/10/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/11/BID_candles_min_1.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/00h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/01h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/02h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/03h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/04h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/05h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/06h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/07h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/08h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/09h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/10h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/11h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/12h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/13h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/14h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/15h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/16h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/17h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/18h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/19h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/06/12/20h_ticks.bi5'
];

export { input, expectedOutput };
