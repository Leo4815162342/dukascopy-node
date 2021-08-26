import { Instrument } from '../../../config/instruments';

const config = {
  instrument: 'abcdxxx',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
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
      actual: 'abcdxxx',
      expected: Object.keys(Instrument).join(', '),
      message: "The 'instrument' field does not match any of the allowed values."
    }
  ]
};

export { config, expectedOutput };
