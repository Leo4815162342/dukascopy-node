// Available test data per timeframe:

// tick: EURUSD, bid, 2019-02-04 - 2019-02-06
// m1, m30: EURUSD, bid, 2019-02-04 - 2019-02-06
// h1, d1, mn1: EURUSD, bid, 2019-01-01, 2019-03-01

import { PromiseType } from 'utility-types';

import { getTestCases, getConfigDescription } from '../utils';
import { advanceTo, clear } from 'jest-date-mock';

import * as lib from '../../src';
import * as configValidator from '../../src/config-validator';
import * as processor from '../../src/processor';

jest.mock('node-fetch', require('../__mocks__/fetch').default);

const getHistoricRatesFn = jest.spyOn(lib, 'getHistoricRates');
const validateConfigFn = jest.spyOn(configValidator, 'validateConfig');
const processDataFn = jest.spyOn(processor, 'processData');

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

type TestCase = {
  config: lib.HistoryConfig;
  expectedOutput: PromiseType<ReturnType<typeof lib.getHistoricRates>>;
};

describe('getHistoricRates', () => {
  beforeEach(() => {
    advanceTo(new Date(customDateNow));
  });

  afterEach(() => {
    clear();
  });

  const testCases = getTestCases<TestCase>('tests/integration/cases');
  testCases.forEach(({ content, path }) => {
    const [fileName] = path.split('/').reverse();
    if (path.indexOf('fail_') >= 0) {
      generateFailTestCase(content, fileName);
    } else {
      generateSuccessTestCase(content, fileName);
    }
  });
});

function generateFailTestCase({ config, expectedOutput }: TestCase, fileName?: string) {
  describe('fail', () => {
    it('Should throw validation errors on invalid config', async () => {
      expect.assertions(1);
      try {
        await lib.getHistoricRates(config);
      } catch (error) {
        expect(error).toEqual({ validationErrors: expectedOutput });
      }
    });
  });
}

function generateSuccessTestCase({ config, expectedOutput }: TestCase, fileName?: string) {
  let quotes: TestCase['expectedOutput'];
  describe('success', () => {
    describe(`${fileName}: ${getConfigDescription(config)}`, () => {
      beforeAll(() => jest.clearAllMocks());

      it('should call "getHistoricRates" function once', async () => {
        quotes = await lib.getHistoricRates(config);
        expect(getHistoricRatesFn).toHaveBeenCalledTimes(1);
      });

      it('should call "validateConfig" function once', () => {
        expect(validateConfigFn).toHaveBeenCalledTimes(1);
      });

      it('should call "processData" function once', () => {
        expect(processDataFn).toHaveBeenCalledTimes(1);
      });

      it('should generate correct output', () => {
        expect(quotes).toEqual(expectedOutput);
      });
    });
  });
}
