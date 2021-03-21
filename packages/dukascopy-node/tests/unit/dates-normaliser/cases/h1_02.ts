const input = {
  instrument: 'eurusd',
  startDate: new Date('2018-06-06T00:00:00.000Z'),
  endDate: new Date('2018-06-08T00:00:00.000Z'),
  timeframe: 'h1',
  utcOffset: -120
};

const expectedOutput = [new Date('2018-06-05T22:00:00.000Z'), new Date('2018-06-07T22:00:00.000Z')];

export { input, expectedOutput };
