const input = {
  instrument: 'EURUSD',
  startDate: '2018-06-06',
  endDate: '2018-06-08',
  timeframe: 'h1',
  utcOffset: -120
};

const expectedOutput = [new Date('2018-06-05T22:00:00.000Z'), new Date('2018-06-07T22:00:00.000Z')];

export { input, expectedOutput };
