import { Timeframe } from '../../../src/config/timeframes';
import { Instrument } from '../../../src/config/instruments';

const config = {
  instrument: 'eurusdz',
  dates: { from: '2019-01-151', to: '2019-0122' },
  timeframe: 'd1z',
  volumes: 'true',
  utcOffset: '-1440'
};

const expectedOutput = [
  {
    actual: 'eurusdz',
    expected: Object.keys(Instrument).join(', '),
    message: "The 'instrument' field does not match any of the allowed values."
  },
  {
    actual: '2019-01-151',
    expected: undefined,
    message: "The 'dates.from' field must be a Date."
  },
  {
    actual: '2019-0122',
    expected: undefined,
    message: "The 'dates.to' field must be a Date."
  },
  {
    actual: 'd1z',
    expected: Object.keys(Timeframe).join(', '),
    message: "The 'timeframe' field does not match any of the allowed values."
  },
  {
    actual: '-1440',
    expected: undefined,
    message: "The 'utcOffset' field must be a number."
  },
  {
    actual: 'true',
    expected: undefined,
    message: "The 'volumes' field must be a boolean."
  }
];

export { config, expectedOutput };
