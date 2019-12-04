const input = {
  instrument: 'eurusd',
  timeframe: 'tick',
  startDate: new Date('2019-06-22T16:00:00.000Z'),
  endDate: new Date('2019-06-23T18:00:00.000Z'),
  priceType: 'bid'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/16h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/17h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/18h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/19h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/20h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/21h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/22h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/22/23h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/00h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/01h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/02h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/03h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/04h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/05h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/06h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/07h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/08h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/09h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/10h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/11h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/12h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/13h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/14h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/15h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/16h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURUSD/2019/05/23/17h_ticks.bi5'
];

export { input, expectedOutput };
