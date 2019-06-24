const config = {
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
  validationErrors: ["The 'instrument' field is required!"]
};

const testName = 'Should return false when missing instrument';

const testGroup = 'Instrument';

export { testName, testGroup, config, expectedOutput };
