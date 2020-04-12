const input = {
  instrument: 'eurusd',
  startDate: '2019-02-01',
  endDate: '2019-02-13',
  timeframe: 'd1'
};

const expectedOutput = [new Date('2019-02-01T00:00:00.000Z'), new Date('2019-02-13T00:00:00.000Z')];

export { input, expectedOutput };
