const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'xxxyyyzzz',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: { timeframe: ['Timeframe "xxxyyyzzz" is not supported'] }
};

const testName = 'Should return false on unsupported timeframe';

const testGroup = 'Timeframe';

export { testName, testGroup, config, expectedOutput };
