const config = {
  instrument: 'eurusd',
  dates: {
    from: '2042-04-09',
    to: '2042-07-01'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    dates: ['From and To date should be in past']
  }
};

const testName = 'Should return false when dates are in future';

const testGroup = 'Dates';

export { testName, testGroup, config, expectedOutput };
