const config = {
  instrument: '',
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
  validationErrors: { instrument: ['value is missing', 'instrument "" is not supported'] }
};

const testName = 'Should return false on empty instrument';

export { testName, config, expectedOutput };
