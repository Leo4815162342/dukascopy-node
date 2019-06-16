const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: '',
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: { utcOffset: ['value is missing', 'value has to be a number'] }
};

const testName = 'Should return false on empty utcOffset';

const testGroup = 'UTC Offset';

export { testName, testGroup, config, expectedOutput };
