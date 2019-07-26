// Available test data per timeframe:

// tick: EURUSD, bid, 2019-02-04 - 2019-02-06
// m1, m30: EURUSD, bid, 2019-02-04 - 2019-02-06
// h1, d1, mn1: EURUSD, bid, 2019-01-01, 2019-03-01

import { PromiseType } from 'utility-types';

import { getTestCases, getConfigDescription } from '../utils';

import * as lib from '../../src';
import * as configValidator from '../../src/config-validator';
import * as processor from '../../src/processor';

jest.mock('node-fetch', require('../__mocks__/fetch').default);

const getHistoricRatesFn = jest.spyOn(lib, 'getHistoricRates');
const validateConfigFn = jest.spyOn(configValidator, 'validateConfig');
const processDataFn = jest.spyOn(processor, 'processData');

type TestCase = {
  config: Parameters<typeof lib.getHistoricRates>[0];
  expectedOutput: PromiseType<ReturnType<typeof lib.getHistoricRates>>;
};

describe('getHistoricRates', () => {
  const testCases = getTestCases<TestCase>('tests/integration/cases');
  testCases.forEach(({ content, path }) => {
    if (path.indexOf('fail_') >= 0) {
      generateFailTestCase(content);
    } else {
      generateSuccessTestCase(content);
    }
  });
});

function generateFailTestCase({ config, expectedOutput }: TestCase) {
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

function generateSuccessTestCase({ config, expectedOutput }: TestCase) {
  let quotes: TestCase['expectedOutput'];
  describe('success', () => {
    describe(config.timeframe, () => {
      describe(getConfigDescription(config), () => {
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
  });
}
