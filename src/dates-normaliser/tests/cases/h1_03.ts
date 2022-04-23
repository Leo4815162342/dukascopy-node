const input = {
  instrument: 'eurusd',
  startDate: new Date('2018-06-06T12:00:00.000Z'),
  endDate: new Date('2018-06-06T16:00:00.000Z'),
  timeframe: 'h1',
  utcOffset: 120
};

const expectedOutput = [new Date('2018-06-06T14:00:00.000Z'), new Date('2018-06-06T18:00:00.000Z')];

export { input, expectedOutput };
