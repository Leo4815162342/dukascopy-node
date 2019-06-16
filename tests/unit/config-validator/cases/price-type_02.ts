const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: '',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: { priceType: ['value is missing', 'Price type "" is not supported'] }
};

const testName = 'Should return false on empty priceType';

const testGroup = 'Price type';

export { testName, testGroup, config, expectedOutput };
