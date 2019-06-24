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
  validationErrors: ["The 'timeframe' field must be a string!"]
};

const testName = 'Should return false when type of timeframe is not a string';

const testGroup = 'Timeframe';

export { testName, testGroup, config, expectedOutput };
