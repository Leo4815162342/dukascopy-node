const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'aaabbbccc',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: { priceType: ['Price type "aaabbbccc" is not supported'] }
};

const testName = 'Should return false on unsupported priceType';

const testGroup = 'Price type';

export { testName, testGroup, config, expectedOutput };
