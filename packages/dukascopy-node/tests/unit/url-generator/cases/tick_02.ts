const input = {
  instrument: 'eurcad',
  timeframe: 'tick',
  startDate: new Date('2019-06-30T23:59:00.000Z'),
  endDate: new Date('2019-07-01T00:01:00.000Z'),
  priceType: 'ask'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/05/30/23h_ticks.bi5',
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/06/01/00h_ticks.bi5'
];

export { input, expectedOutput };
