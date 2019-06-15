import { HistoryConfig } from '../../../src/config/types';
import { ConfigValidation } from '../../../src/config-validator/types';

import { validateConfig } from '../../../src/config-validator';

import { getTestCases, getConfigDescription } from '../../utils';

type TestCase = {
  config: HistoryConfig;
  expectedOutput: ConfigValidation;
  testName: string;
};

describe('Config validator', () => {
  const testCases = getTestCases<TestCase>('tests/unit/config-validator/cases');
  testCases.forEach(generateTestSuite);
});

function generateTestSuite({ config, expectedOutput, testName }: TestCase) {
  describe(getConfigDescription(config), () => {
    const { isValid, validationErrors } = validateConfig(config);

    it(testName, () => {
      expect(isValid).toBe(expectedOutput.isValid);
      expect(validationErrors).toEqual(expectedOutput.validationErrors);
    });
  });
}
