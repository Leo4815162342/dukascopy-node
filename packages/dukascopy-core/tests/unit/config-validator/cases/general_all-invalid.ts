const config = {
  instrument: '',
  dates: '',
  timeframe: '',
  priceType: '',
  utcOffset: '',
  volumes: '',
  ignoreFlats: ''
};

const expectedOutput = {
  isValid: false,
  validationErrors: [
    "The 'instrument' field does not match any of the allowed values!",
    "The 'dates' must be an Object!",
    "The 'timeframe' field does not match any of the allowed values!",
    "The 'priceType' field does not match any of the allowed values!",
    "The 'utcOffset' field must be a number!",
    "The 'volumes' field must be a boolean!",
    "The 'ignoreFlats' field must be a boolean!"
  ]
};

export { config, expectedOutput };
