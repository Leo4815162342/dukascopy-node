import { validateConfig } from '../../src/config-validator';
import { HistoryConfig } from '../../src/config/types';

let searchConfig: HistoryConfig = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'tick',
  priceType: 'bid',
  utcOffset: 60,
  volumes: true
};

const searchConfigCopy = { ...{}, ...searchConfig };
beforeEach(() => (searchConfig = { ...{}, ...searchConfigCopy }));

describe('Config validator', () => {
  describe('General', () => {
    it('should return true with valid object and empty errors object', () => {
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(true);
      expect(validationErrors).toEqual({});
    });
  });

  describe('Instrument', () => {
    it('should return false on unsupported instrument', () => {
      //@ts-ignore
      searchConfig.instrument = 'eurusdxxx';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        instrument: [`instrument "${searchConfig.instrument}" is not supported`]
      });
    });
    it('should return false on empty instrument', () => {
      //@ts-ignore
      searchConfig.instrument = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        instrument: [`value is missing`, `instrument "" is not supported`]
      });
    });

    it('should return false on instrument as number', () => {
      //@ts-ignore
      searchConfig.instrument = 12345;
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        instrument: [`value has to be a string`, `instrument "12345" is not supported`]
      });
    });

    it('should return false when instrument key does not exist', () => {
      //@ts-ignore
      delete searchConfig['instrument'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        instrument: [`key does not exist in search config`]
      });
    });
  });

  describe('Dates', () => {
    it('should return false when dates key does not exist', () => {
      //@ts-ignore
      delete searchConfig['dates'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        dates: [`key does not exist in search config`]
      });
    });

    it('should return false on empty date object', () => {
      //@ts-ignore
      searchConfig.dates = {};
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        dates: [
          'From date is missing',
          'To date is missing',
          'From date is not a valid date',
          'To date is not a valid date'
        ]
      });
    });

    it('should return false on invalid date', () => {
      searchConfig.dates = {
        from: '2017-03-33',
        to: '2017-05-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        dates: ['From date is not a valid date']
      });
    });

    it('should return false on invalid date (Feb 29)', () => {
      searchConfig.dates = {
        from: '2017-02-29',
        to: '2017-05-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        dates: ['From date is not a valid date']
      });
    });

    it('should return false when start date is after end date', () => {
      searchConfig.dates = {
        from: '2017-04-09',
        to: '2017-04-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        dates: ['To date should be after from date']
      });
    });

    it('should return false when dates are in future', () => {
      searchConfig.dates = {
        from: '2022-04-09',
        to: '2022-07-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        dates: ['From and To date should be in past']
      });
    });
  });

  describe('Timeframe', () => {
    it('should return false when timeframe key does not exist', () => {
      //@ts-ignore
      delete searchConfig['timeframe'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        timeframe: [`key does not exist in search config`]
      });
    });

    it('should return false on empty timeframe', () => {
      //@ts-ignore
      searchConfig.timeframe = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        timeframe: ['value is missing', 'Timeframe "" is not supported']
      });
    });

    it('should return false on unsupported timeframe', () => {
      //@ts-ignore
      searchConfig.timeframe = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        timeframe: ['Timeframe "abcde" is not supported']
      });
    });
  });

  describe('Price type', () => {
    it('should return false on empty price type', () => {
      //@ts-ignore
      searchConfig.priceType = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        priceType: ['value is missing', 'Price type "" is not supported']
      });
    });

    it('should return false on unsupported price type', () => {
      //@ts-ignore
      searchConfig.priceType = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        priceType: ['Price type "abcde" is not supported']
      });
    });
  });

  describe('UTC offset', () => {
    it('should return false when utcOffset key does not exist', () => {
      //@ts-ignore
      delete searchConfig['utcOffset'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        utcOffset: [`key does not exist in search config`]
      });
    });

    it('should return false on empty UTC offset', () => {
      //@ts-ignore
      searchConfig.utcOffset = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        utcOffset: ['value is missing', 'value has to be a number']
      });
    });

    it('should return false when UTC offset is not a number', () => {
      //@ts-ignore
      searchConfig.utcOffset = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        utcOffset: ['value has to be a number']
      });
    });
  });

  describe('Volumes', () => {
    it('should return false when volumes key does not exist', () => {
      //@ts-ignore
      delete searchConfig['volumes'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        volumes: [`key does not exist in search config`]
      });
    });

    it('should return false when volumes is missing', () => {
      //@ts-ignore
      searchConfig.volumes = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        volumes: ['value is missing', 'value has to be a boolean']
      });
    });

    it('should return false when volumes is not boolean', () => {
      //@ts-ignore
      searchConfig.volumes = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).toBe(false);
      expect(validationErrors).toEqual({
        volumes: ['value has to be a boolean']
      });
    });
  });
});
