const input = {
  instrument: 'eurusd',
  startDate: '2019-02-01',
  endDate: '2019-02-02',
  timeframe: 'tick'
};

const expectedOutput = [new Date('2019-02-01T00:00:00.000Z'), new Date('2019-02-02T00:00:00.000Z')];

export { input, expectedOutput };
