import { expect, describe, it } from 'vitest';
import { Config } from '../../../src/config';

import { validateConfigNode } from '../../../src/config-validator';
import { getTestCases } from '../../utils/testUtils';

type TestCase = {
  config: Config;
  expectedOutput: ReturnType<typeof validateConfigNode>;
};

function generateTestSuite({ config, expectedOutput }: TestCase, path: string): void {
  const [filePath] = path.split('/').reverse();
  const [testGroup] = filePath.split('_');

  describe(testGroup, () => {
    const { isValid, validationErrors } = validateConfigNode(config);

    it(`${filePath}: validation shoud return ${expectedOutput.isValid}`, () => {
      expect(isValid).toBe(expectedOutput.isValid);
      expect(validationErrors).toEqual(expectedOutput.validationErrors);
    });
  });
}

describe('Config validator', async () => {
  const testCases = await getTestCases<TestCase>('src/config-validator/tests/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});
