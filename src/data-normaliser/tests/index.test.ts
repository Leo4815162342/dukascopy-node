import { expect, describe, it } from 'vitest';
import { normalise } from '..';
import { getTestCases } from '../../utils/testUtils';

type Input = Parameters<typeof normalise>[0];
type Output = ReturnType<typeof normalise>;

type TestCase = {
  input: Input;
  expectedOutput: Output;
};

describe('Data normaliser', async () => {
  const testCases = await getTestCases<TestCase>('src/data-normaliser/tests/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly normalises data for "${fileName}" file`, () => {
    const normalisedData = normalise(input);

    expect(normalisedData).toEqual(expectedOutput);
  });
}
