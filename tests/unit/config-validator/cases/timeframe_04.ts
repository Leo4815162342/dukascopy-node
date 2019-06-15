const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 12345,
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    timeframe: [`value has to be a string`, `Timeframe "12345" is not supported`]
  }
};

const testName = 'Should return false when type of timeframe is not a string';

const testGroup = 'Timeframe';

export { testName, testGroup, config, expectedOutput };
