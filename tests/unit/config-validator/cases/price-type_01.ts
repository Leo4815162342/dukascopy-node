const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: { priceType: [`key does not exist in search config`] }
};

const testName = 'Should return false when priceType key does not exist';

const testGroup = 'Price type';

export { testName, testGroup, config, expectedOutput };
