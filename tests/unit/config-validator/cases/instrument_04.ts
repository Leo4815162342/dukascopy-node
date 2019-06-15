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
  validationErrors: {
    instrument: ['value has to be a string', 'instrument "12345" is not supported']
  }
};

const testName = 'Should return false when type of instrument is not a string';

const testGroup = 'Instrument';

export { testName, config, expectedOutput };
