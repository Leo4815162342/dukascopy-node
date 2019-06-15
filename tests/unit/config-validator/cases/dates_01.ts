const config = {
  instrument: 'eurusd',
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    dates: [`key does not exist in search config`]
  }
};

const testName = 'Should return false when dates key does not exist';

const testGroup = 'Dates';

export { testName, testGroup, config, expectedOutput };
