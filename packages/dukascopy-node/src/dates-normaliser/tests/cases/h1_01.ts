const input = {
  instrument: 'eurusd',
  startDate: new Date('1950-01-01T00:00:00.000Z'),
  endDate: new Date('2150-01-01T00:00:00.000Z'),
  timeframe: 'h1'
};

const expectedOutput = [new Date('2003-05-04T21:00:00.000Z'), new Date('2019-07-12T21:05:00.000Z')];

export { input, expectedOutput };
