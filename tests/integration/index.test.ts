// Available test data per timeframe:

// tick: EURUSD, bid, 2019-02-04 - 2019-02-06
// m1, m30: EURUSD, bid, 2019-02-04 - 2019-02-06
// h1, d1, mn1: EURUSD, bid, 2019-01-01, 2019-03-01

import { HistoryConfig } from '../../src/config/types';

import { getTestCases, getConfigDescription } from '../utils';

import * as lib from '../../src';
import * as configValidator from '../../src/config-validator';
import * as requestGenerator from '../../src/request-generator';
import * as decompressor from '../../src/decompressor';
import * as normaliser from '../../src/data-normaliser';
import * as aggregator from '../../src/aggregator';

jest.mock('../../src/buffer-fetcher');

const getHistoricRatesFn = jest.spyOn(lib, 'getHistoricRates');
const validateConfigFn = jest.spyOn(configValidator, 'validateConfig');
const generateRequestDataFn = jest.spyOn(requestGenerator, 'generateRequestData');
const decompressFn = jest.spyOn(decompressor, 'decompress');
const normaliseFn = jest.spyOn(normaliser, 'normalise');
const aggregateFn = jest.spyOn(aggregator, 'aggregate');

type TestCase = {
  config: HistoryConfig;
  expectedOutput: number[][];
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
        expect(error.validationErrors).toEqual(expectedOutput);
      }
    });
  });
}

function generateSuccessTestCase({ config, expectedOutput }: TestCase) {
  let quotes: TestCase['expectedOutput'];
  let requestObjCount = 0;
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

        it('should call "generateRequestData" function once', () => {
          expect(generateRequestDataFn).toHaveBeenCalledTimes(1);
          requestObjCount = generateRequestDataFn.mock.results[0].value.length;
        });

        it(`should call "decompress" function proper number of times`, () => {
          expect(decompressFn).toHaveBeenCalledTimes(requestObjCount);
        });

        it(`should call "normalise" function proper number of times`, () => {
          expect(normaliseFn).toHaveBeenCalledTimes(requestObjCount);
        });

        it(`should call "aggregate" function once`, () => {
          expect(aggregateFn).toHaveBeenCalledTimes(1);
        });

        it('should generate correct output', () => {
          expect(quotes).toEqual(expectedOutput);
        });
      });
    });
  });
}
