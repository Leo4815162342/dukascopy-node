// Available test data per timeframe:

// tick: EURUSD, bid, 2019-02-04 - 2019-02-06
// m1, m30: EURUSD, bid, 2019-02-04 - 2019-02-06
// h1, d1, mn1: EURUSD, bid, 2019-01-01, 2019-03-01

import { promises } from 'fs';
import { getHistoricRates } from '../../src';
import { URL_ROOT } from '../../src/url-generator';
import { BufferFetcher } from '../../src/buffer-fetcher';
import { Config } from '../../src/config';
import { getTestCases, getConfigDescription } from '../../src/utils/testUtils';
import { PromiseType } from 'utility-types';
import { advanceTo, clear } from 'jest-date-mock';

beforeAll(() => jest.clearAllMocks());

// Naive mocking of fetcherFn
BufferFetcher.prototype.fetcherFn = async (url: string) =>
  promises.readFile(url.replace(URL_ROOT, './../../dummy-data'));

type TestCase = {
  config: Config;
  expectedOutput: PromiseType<ReturnType<typeof getHistoricRates>>;
};

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

describe('getHistoricRates', () => {
  beforeEach(() => {
    advanceTo(new Date(customDateNow));
  });

  afterEach(() => {
    clear();
  });

  const testCases = getTestCases<TestCase>('./tests/getHistoricRates/cases').slice(0, 20);
  testCases.forEach(({ content, path }) => {
    const [fileName] = path.split('/').reverse();
    if (path.indexOf('fail_') >= 0) {
      generateFailTestCase(content);
    } else {
      generateSuccessTestCase(content, fileName);
    }
  });
});

function generateFailTestCase({ config, expectedOutput }: TestCase) {
  describe('fail', () => {
    it('Should throw validation errors on invalid config', async () => {
      expect.assertions(1);
      try {
        await getHistoricRates(config);
      } catch (error) {
        expect(error).toEqual({ validationErrors: expectedOutput });
      }
    });
  });
}

function generateSuccessTestCase({ config, expectedOutput }: TestCase, fileName?: string): void {
  describe('success', () => {
    describe(`${fileName}: ${getConfigDescription(config)}`, () => {
      it('should generate correct output', async () => {
        const quotes = await getHistoricRates(config);
        expect(quotes).toEqual(expectedOutput);
      });
    });
  });
}
