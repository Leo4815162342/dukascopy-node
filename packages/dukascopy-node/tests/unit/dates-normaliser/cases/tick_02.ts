const input = {
  instrument: 'EURUSD',
  startDate: '1970-01-01',
  endDate: '2019-02-02',
  timeframe: 'tick'
};

const expectedOutput = [new Date('2003-05-04T19:00:00.000Z'), new Date('2019-02-02T00:00:00.000Z')];

export { input, expectedOutput };
