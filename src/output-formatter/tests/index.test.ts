import { expect, it, describe } from 'vitest';
import { formatOutput } from '../../../src/output-formatter';
import { getTestCases } from '../../utils/testUtils';

type TestCase = {
  input: Parameters<typeof formatOutput>[0];
  expectedOutput: ReturnType<typeof formatOutput>;
};

function generateTestSuite({ input, expectedOutput }: TestCase, path: string): void {
  const [fileName] = path.split('/').reverse();

  it(`Correctly formats the output data for "${fileName}" file`, () => {
    const formattedData = formatOutput(input);

    expect(formattedData).toEqual(expectedOutput);
  });
}

describe('Output formatter', async () => {
  const testCases = await getTestCases<TestCase>('src/output-formatter/tests/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});
