const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-02-01',
    to: '2019-02-29'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    dates: ['To date is not a valid date']
  }
};

const testName = 'Should return false on invalid To date';

const testGroup = 'Dates';

export { testName, testGroup, config, expectedOutput };
