import { expect, describe, it } from 'vitest';
import { aggregate } from '../../../src/aggregator';
import { getTestCases } from '../../utils/testUtils';

type TestCase = {
  input: Parameters<typeof aggregate>[0];
  expectedOutput: ReturnType<typeof aggregate>;
};

describe('Aggregator', async () => {
  const testCases = await getTestCases<TestCase>('src/aggregator/tests/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly aggregates data: "${fileName}"`, () => {
    const output = aggregate(input);

    expect(output).toEqual(expectedOutput);
  });
}
