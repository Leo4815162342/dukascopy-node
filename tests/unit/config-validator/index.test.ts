import { HistoryConfig } from '../../../src/config/types';
import { ValidationStatus } from '../../../src/config-validator/types';

import { validateConfig } from '../../../src/config-validator';

import { getTestCases } from '../../utils';

type TestCase = {
  config: HistoryConfig;
  expectedOutput: ValidationStatus;
};

describe('Config validator', () => {
  const testCases = getTestCases<TestCase>('tests/unit/config-validator/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ config, expectedOutput }: TestCase, path: string) {
  const [filePath] = path.split('/').reverse();
  const [testGroup] = filePath.split('_');

  describe(testGroup, () => {
    const { isValid, validationErrors } = validateConfig(config);

    it(`${filePath}: validation shoud return ${expectedOutput.isValid}`, () => {
      expect(isValid).toBe(expectedOutput.isValid);
      expect(validationErrors).toEqual(expectedOutput.validationErrors);
    });
  });
}
