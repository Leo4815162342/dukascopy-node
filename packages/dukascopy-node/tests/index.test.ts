// Available test data per timeframe:

// tick: EURUSD, bid, 2019-02-04 - 2019-02-06
// m1, m30: EURUSD, bid, 2019-02-04 - 2019-02-06
// h1, d1, mn1: EURUSD, bid, 2019-01-01, 2019-03-01

import fs from 'fs';
import { promisify } from 'util';
import * as core from 'dukascopy-core';
import * as lib from '../src';
import { advanceTo, clear } from 'jest-date-mock';

import { PromiseType } from 'utility-types';
import { getTestCases, getConfigDescription } from './utils';
const getHistoricRatesFn = jest.spyOn(lib, 'getHistoricRates');
const validateConfigFn = jest.spyOn(core, 'validateConfig');
const processDataFn = jest.spyOn(core, 'processData');
const { BufferFetcher } = core;

BufferFetcher.prototype.fetch = async (urls: string[]) => {
  const buffers = await Promise.all(
    urls.map(url => promisify(fs.readFile)(url.replace(core.URL_ROOT, './../../dummy-data')))
  );

  return urls.map((_, i) => ({
    url: urls[i],
    buffer: buffers[i]
  }));
};

type TestCase = {
  config: core.Config;
  expectedOutput: PromiseType<ReturnType<typeof lib.getHistoricRates>>;
};

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

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

function generateSuccessTestCase({ config, expectedOutput }: TestCase, fileName?: string): void {
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

describe('getHistoricRates', () => {
  beforeEach(() => {
    advanceTo(new Date(customDateNow));
  });

  afterEach(() => {
    clear();
  });

  const testCases = getTestCases<TestCase>('./tests/cases');
  testCases.forEach(({ content, path }) => {
    const [fileName] = path.split('/').reverse();
    if (path.indexOf('fail_') >= 0) {
      generateFailTestCase(content);
    } else {
      generateSuccessTestCase(content, fileName);
    }
  });
});
