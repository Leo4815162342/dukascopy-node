const config = {
  instrument: 'EURUSD',
  dates: {},
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'dates.from' field is required!", "The 'dates.to' field is required!"]
};

export { config, expectedOutput };
