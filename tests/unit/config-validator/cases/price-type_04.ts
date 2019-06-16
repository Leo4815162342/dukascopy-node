const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 0,
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    priceType: ['value has to be a string', 'Price type "0" is not supported']
  }
};

const testName = 'Should return false when type of priceType is not a string';

const testGroup = 'Price type';

export { testName, testGroup, config, expectedOutput };
