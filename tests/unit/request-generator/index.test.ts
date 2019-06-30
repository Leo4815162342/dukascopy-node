import { HistoryConfig } from '../../../src/config/types';
import { RequestObject } from '../../../src/request-generator/types';

import { getReuqestData } from './utils';
import { getTestCases, getConfigDescription } from '../../utils';

type TestCase = {
  config: HistoryConfig;
  expectedOutput: RequestObject[];
};

describe('Request generator', () => {
  const testCases = getTestCases<TestCase>('tests/unit/request-generator/cases');
  testCases.forEach(({ content }) => generateTestSuite(content));
});

function generateTestSuite({ config, expectedOutput }: TestCase) {
  describe(config.timeframe, () => {
    describe(getConfigDescription(config), () => {
      const requestData = getReuqestData(config);

      it(`should have ${expectedOutput.length} items`, () => {
        expect(requestData).toHaveLength(expectedOutput.length);
      });

      const { isAllUrlsCorrect, isAllTimestampsCorrect } = requestData.reduce(
        (all, { url, timestamp }, i) => {
          if (url !== expectedOutput[i].url) {
            all.isAllUrlsCorrect = false;
          }

          if (timestamp !== expectedOutput[i].timestamp) {
            all.isAllTimestampsCorrect = false;
          }

          return all;
        },
        { isAllUrlsCorrect: true, isAllTimestampsCorrect: true }
      );

      it('should have correct URLs for all objects', () => {
        expect(isAllUrlsCorrect).toBe(true);
      });

      it('should have correct timestamps for all objects', () => {
        expect(isAllTimestampsCorrect).toBe(true);
      });
    });
  });
}
