const config = {
  instrument: 12345,
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
  validationErrors: ["The 'instrument' field must be a string!"]
};

const testName = 'Should return false when type of instrument is not a string';

const testGroup = 'Instrument';

export { testName, testGroup, config, expectedOutput };
