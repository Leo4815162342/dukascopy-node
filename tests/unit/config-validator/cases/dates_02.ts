const config = {
  instrument: 'eurusd',
  dates: {},
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    dates: [
      'From date is missing',
      'To date is missing',
      'From date is not a valid date',
      'To date is not a valid date'
    ]
  }
};

const testName = 'Should return false on empty date object';

const testGroup = 'Dates';

export { testName, testGroup, config, expectedOutput };
