const input = {
  instrument: 'eurusd',
  startDate: '1950-01-01',
  endDate: '2150-01-01',
  timeframe: 'h1'
};

const expectedOutput = [new Date('2003-05-01T00:00:00.000Z'), new Date('2019-07-12T21:05:00.000Z')];

export { input, expectedOutput };
