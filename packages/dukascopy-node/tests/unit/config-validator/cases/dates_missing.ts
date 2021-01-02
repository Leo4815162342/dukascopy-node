const config = {
  instrument: 'EURUSD',
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'dates' field is required!"]
};

export { config, expectedOutput };
