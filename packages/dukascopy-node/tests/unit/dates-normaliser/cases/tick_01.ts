const input = {
  instrument: 'eurusd',
  startDate: new Date('2019-02-01T00:00:00.000Z'),
  endDate: new Date('2019-02-02T00:00:00.000Z'),
  timeframe: 'tick'
};

const expectedOutput = [new Date('2019-02-01T00:00:00.000Z'), new Date('2019-02-02T00:00:00.000Z')];

export { input, expectedOutput };
