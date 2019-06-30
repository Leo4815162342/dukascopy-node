const config = {
  instrument: 'eurusdz',
  dates: { from: '2019-01-151', to: '2019-0122' },
  timeframe: 'd1z',
  volumes: 'true',
  utcOffset: '-1440'
};

const expectedOutput = [
  "The 'instrument' field does not match any of the allowed values!",
  "The 'dates.from' field must be a valid date string! Actual: 2019-01-151",
  "The 'timeframe' field does not match any of the allowed values!",
  "The 'utcOffset' field must be a number!",
  "The 'volumes' field must be a boolean!"
];

export { config, expectedOutput };
