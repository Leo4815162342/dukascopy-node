const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput: {
  isValid: boolean;
  validationErrors: string[];
} = { isValid: true, validationErrors: [] };

const testName = 'Should return true with valid object and empty errors object';

const testGroup = 'General';

export { testName, testGroup, config, expectedOutput };
