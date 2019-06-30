const config = {
  instrument: 'eurusd',
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'dates' field is required!"]
};

export { config, expectedOutput };
