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
  validationErrors: [
    "The 'instrument' field does not match any of the allowed values!",
    "The 'dates' must be an Object!",
    "The 'timeframe' field does not match any of the allowed values!",
    "The 'priceType' field does not match any of the allowed values!",
    "The 'utcOffset' field must be a number!",
    "The 'volumes' field must be a boolean!"
  ]
};

const testName = 'Should return false when all keys are empty';

const testGroup = 'General';

export { testName, testGroup, config, expectedOutput };
