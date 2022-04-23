const input = {
  instrument: 'eurcad',
  timeframe: 'm1',
  startDate: new Date('2019-05-19T12:11:00.000Z'),
  endDate: new Date('2019-05-19T12:19:00.000Z'),
  priceType: 'ask'
};

const expectedOutput = [
  'https://datafeed.dukascopy.com/datafeed/EURCAD/2019/04/19/ASK_candles_min_1.bi5'
];

export { input, expectedOutput };
