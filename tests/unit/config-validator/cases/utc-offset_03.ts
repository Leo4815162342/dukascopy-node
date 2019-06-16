const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 'xxx',
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: { utcOffset: ['value has to be a number'] }
};

const testName = 'Should return false when type of priutcOffsetceType is not a number';

const testGroup = 'UTC Offset';

export { testName, testGroup, config, expectedOutput };
