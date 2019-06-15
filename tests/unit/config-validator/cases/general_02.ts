const config = {
  instrument: '',
  dates: '',
  timeframe: '',
  priceType: '',
  utcOffset: '',
  volumes: ''
};

const expectedOutput = {
  isValid: false,
  validationErrors: {
    instrument: ['value is missing', 'instrument "" is not supported'],
    dates: [
      'value is missing',
      'From date is missing',
      'To date is missing',
      'From date is not a valid date',
      'To date is not a valid date'
    ],
    timeframe: ['value is missing', 'Timeframe "" is not supported'],
    priceType: ['value is missing', 'Price type "" is not supported'],
    utcOffset: ['value is missing', 'value has to be a number'],
    volumes: ['value is missing', 'value has to be a boolean']
  }
};

const testName = 'Should return false when all keys are empty';

const testGroup = 'General';

export { testName, testGroup, config, expectedOutput };
