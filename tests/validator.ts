import { validateConfig } from './../src/validator';
import { HistoryConfig } from '../src/config/types';
import { expect } from 'chai';

import 'mocha';

let searchConfig: HistoryConfig = {
  symbol: 'eurusd',
  dates: {
    start: '2019-03-01',
    end: '2019-03-05'
  },
  timeframe: 'tick',
  priceType: 'bid',
  gmtOffset: 60,
  volumes: true
};

const searchConfigCopy = { ...{}, ...searchConfig };
beforeEach(() => (searchConfig = { ...{}, ...searchConfigCopy }));

describe('Config validator', () => {
  describe('General', () => {
    it('should return true with valid object', () => {
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.true;
      expect(validationErrors).to.be.empty;
    });
  });

  describe('Symbol', () => {
    it('should return false on unsupported symbol', () => {
      //@ts-ignore
      searchConfig.symbol = 'eurusdxxx';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        symbol: [`symbol "${searchConfig.symbol}" is not supported`]
      });
    });
    it('should return false on empty symbol', () => {
      //@ts-ignore
      searchConfig.symbol = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        symbol: [`value is missing`, `symbol "" is not supported`]
      });
    });

    it('should return false on symbol as number', () => {
      //@ts-ignore
      searchConfig.symbol = 12345;
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        symbol: [`value has to be a string`, `symbol "12345" is not supported`]
      });
    });

    it('should return false when symbol key does not exist', () => {
      //@ts-ignore
      delete searchConfig['symbol'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        symbol: [`key does not exist in search config`]
      });
    });
  });

  describe('Dates', () => {
    it('should return false when dates key does not exist', () => {
      //@ts-ignore
      delete searchConfig['dates'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        dates: [`key does not exist in search config`]
      });
    });

    it('should return false on empty date object', () => {
      //@ts-ignore
      searchConfig.dates = {};
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        dates: [
          'Start date is missing',
          'End date is missing',
          'Start date is not a valid date',
          'End date is not a valid date'
        ]
      });
    });

    it('should return false on invalid date', () => {
      searchConfig.dates = {
        start: '2017-03-33',
        end: '2017-05-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        dates: ['Start date is not a valid date']
      });
    });

    it('should return false on invalid date (Feb 29)', () => {
      searchConfig.dates = {
        start: '2017-02-29',
        end: '2017-05-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        dates: ['Start date is not a valid date']
      });
    });

    it('should return false when start date is after end date', () => {
      searchConfig.dates = {
        start: '2017-04-09',
        end: '2017-04-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        dates: ['End date should be after start date']
      });
    });

    it('should return false when dates are in future', () => {
      searchConfig.dates = {
        start: '2022-04-09',
        end: '2022-07-01'
      };
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        dates: ['Start and end date should be in past']
      });
    });
  });

  describe('Timeframe', () => {
    it('should return false when timeframe key does not exist', () => {
      //@ts-ignore
      delete searchConfig['timeframe'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        timeframe: [`key does not exist in search config`]
      });
    });

    it('should return false on empty timeframe', () => {
      //@ts-ignore
      searchConfig.timeframe = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        timeframe: ['value is missing', 'Timeframe "" is not supported']
      });
    });

    it('should return false on unsupported timeframe', () => {
      //@ts-ignore
      searchConfig.timeframe = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        timeframe: ['Timeframe "abcde" is not supported']
      });
    });
  });

  describe('Price type', () => {
    it('should return false on empty price type', () => {
      //@ts-ignore
      searchConfig.priceType = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        priceType: ['value is missing', 'Price type "" is not supported']
      });
    });

    it('should return false on unsupported price type', () => {
      //@ts-ignore
      searchConfig.priceType = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        priceType: ['Price type "abcde" is not supported']
      });
    });
  });

  describe('GMT offset', () => {
    it('should return false when gmtOffset key does not exist', () => {
      //@ts-ignore
      delete searchConfig['gmtOffset'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        gmtOffset: [`key does not exist in search config`]
      });
    });

    it('should return false on empty GMT offset', () => {
      //@ts-ignore
      searchConfig.gmtOffset = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        gmtOffset: ['value is missing', 'value has to be a number']
      });
    });

    it('should return false when GMT offset is not a number', () => {
      //@ts-ignore
      searchConfig.gmtOffset = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        gmtOffset: ['value has to be a number']
      });
    });
  });

  describe('Volumes', () => {
    it('should return false when volumes key does not exist', () => {
      //@ts-ignore
      delete searchConfig['volumes'];
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        volumes: [`key does not exist in search config`]
      });
    });

    it('should return false when volumes is missing', () => {
      //@ts-ignore
      searchConfig.volumes = '';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        volumes: ['value is missing', 'value has to be a boolean']
      });
    });

    it('should return false when volumes is not boolean', () => {
      //@ts-ignore
      searchConfig.volumes = 'abcde';
      const { isValid, validationErrors } = validateConfig(searchConfig);
      expect(isValid).to.be.false;
      expect(validationErrors).to.eql({
        volumes: ['value has to be a boolean']
      });
    });
  });
});
