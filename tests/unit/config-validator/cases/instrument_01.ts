const config = {
  instrument: 'abcdxxx',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: { instrument: ['instrument "abcdxxx" is not supported'] }
};

const testName = 'Should return false on unsupported instrument';

const testGroup = 'Instrument';

export { testName, testGroup, config, expectedOutput };
