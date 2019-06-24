import { HistoryConfig } from '../../../src/config/types';
import { ValidationStatus } from '../../../src/config-validator/types';

import { validateConfig } from '../../../src/config-validator';

import { getTestCases } from '../../utils';

type TestCase = {
  config: HistoryConfig;
  expectedOutput: ValidationStatus;
  testName: string;
  testGroup: string;
};

describe('Config validator', () => {
  const testCases = getTestCases<TestCase>('tests/unit/config-validator/cases');
  testCases.forEach(generateTestSuite);
});

function generateTestSuite({ config, expectedOutput, testName, testGroup }: TestCase) {
  describe.only(testGroup, () => {
    const { isValid, validationErrors } = validateConfig(config);

    it(testName, () => {
      expect(isValid).toBe(expectedOutput.isValid);
      expect(validationErrors).toEqual(expectedOutput.validationErrors);
    });
  });
}
