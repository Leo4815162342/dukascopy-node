const config = {
  instrument: 'eurusd',
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: [
    {
      actual: undefined,
      expected: undefined,
      message: "The 'dates' field is required."
    }
  ]
};

export { config, expectedOutput };
