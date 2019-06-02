// Available test data per timeframe:

// EURUSD bid (tick): 2019-02-04 - 2019-02-06
// EURUSD bid (m1, m30): 2019-02-04 - 2019-02-06
// EURUSD bid (h1, d1, mn1): 2019-01-01, 2019-03-01

import { HistoryConfig } from '../../src/config/types';

import * as lib from '../../src';
import * as configValidator from '../../src/config-validator';
import * as requestGenerator from '../../src/request-generator';
import * as decompressor from '../../src/decompressor';
import * as normaliser from '../../src/data-normaliser';
import * as aggregator from '../../src/aggregator';

import { readdirSync } from 'fs';

jest.mock('../../src/buffer-fetcher');

const getHistoricRatesFn = jest.spyOn(lib, 'getHistoricRates');
const validateConfigFn = jest.spyOn(configValidator, 'validateConfig');
const generateRequestDataFn = jest.spyOn(requestGenerator, 'generateRequestData');
const decompressFn = jest.spyOn(decompressor, 'decompress');
const normaliseFn = jest.spyOn(normaliser, 'normalise');
const aggregateFn = jest.spyOn(aggregator, 'aggregate');

describe('main', () => {
  const testCases = getTestCases('tests/integration/cases');
  testCases.forEach(generateTest);
});

type TestCase = {
  config: HistoryConfig;
  expectedOutput: number[][];
};

function generateTest({ config, expectedOutput }: TestCase) {
  let quotes: TestCase['expectedOutput'];
  let requestObjCount = 0;

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
}

function getTestCases(folder: string): TestCase[] {
  const projectPath = process.cwd();

  const paths = readdirSync(folder);

  const modulePaths = paths.map(
    casePath => `${projectPath}/${folder}/${casePath.replace('.ts', '')}`
  );

  const cases: TestCase[] = modulePaths.map(require);

  return cases;
}

function getConfigDescription(config: HistoryConfig): string {
  const {
    symbol,
    dates: { start, end },
    timeframe,
    volumes,
    gmtOffset
  } = config;

  return `${symbol}, ${timeframe}, ${start}, ${end}`;
}
