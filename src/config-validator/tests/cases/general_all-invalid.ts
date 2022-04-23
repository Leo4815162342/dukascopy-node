import { Instrument } from '../../../config/instruments';
import { Timeframe } from '../../../config/timeframes';

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
    {
      actual: '',
      expected: Object.keys(Instrument).join(', '),
      message: "The 'instrument' field does not match any of the allowed values."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'dates' must be an Object."
    },
    {
      actual: '',
      expected: Object.keys(Timeframe).join(', '),
      message: "The 'timeframe' field does not match any of the allowed values."
    },
    {
      actual: '',
      expected: 'bid, ask',
      message: "The 'priceType' field does not match any of the allowed values."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'utcOffset' field must be a number."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'volumes' field must be a boolean."
    },
    {
      actual: '',
      expected: undefined,
      message: "The 'ignoreFlats' field must be a boolean."
    }
  ]
};

export { config, expectedOutput };
