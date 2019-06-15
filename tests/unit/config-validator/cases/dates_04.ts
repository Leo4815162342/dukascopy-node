const config = {
  instrument: 'eurusd',
  dates: {
    from: '2017-04-09',
    to: '2017-04-01'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    dates: ['To date should be after from date']
  }
};

const testName = 'Should return false when start date is after end date';

const testGroup = 'Dates';

export { testName, testGroup, config, expectedOutput };
