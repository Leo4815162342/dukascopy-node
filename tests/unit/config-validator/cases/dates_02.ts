const config = {
  instrument: 'eurusd',
  dates: {},
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'dates.from' field is required!", "The 'dates.to' field is required!"]
};

const testName = 'Should return false on empty date object';

const testGroup = 'Dates';

export { testName, testGroup, config, expectedOutput };
