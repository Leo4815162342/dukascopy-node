const config = {
  instrument: 'EURUSD',
  dates: {
    from: '2019-02-01',
    to: '2019-02-29'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'dates.to' field must be a valid date string! Actual: 2019-02-29"]
};

export { config, expectedOutput };
