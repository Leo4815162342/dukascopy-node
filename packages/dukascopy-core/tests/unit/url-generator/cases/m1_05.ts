const input = {
  instrument: 'eurcad',
  timeframe: 'm1',
  startDate: new Date('2019-02-04T00:12:00.000Z'),
  endDate: new Date('2019-02-04T00:15:00.000Z'),
  priceType: 'ask'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/01/04/ASK_candles_min_1.bi5'
];

export { input, expectedOutput };
