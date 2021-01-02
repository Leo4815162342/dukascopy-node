const input = {
  instrument: 'EURUSD',
  startDate: '2018-06-06 12:00',
  endDate: '2018-06-06 16:00',
  timeframe: 'h1',
  utcOffset: 120
};

const expectedOutput = [new Date('2018-06-06T14:00:00.000Z'), new Date('2018-06-06T18:00:00.000Z')];

export { input, expectedOutput };
