import { HistoryConfig } from '../../../src/config/types';

import { getTestCases } from '../../utils';
import { normalise } from '../../../src/data-normaliser';

type TestCase = {
  input: any[];
  expectedOutput: number[][];
};

describe('Data normaliser', () => {
  const testCases = getTestCases<TestCase>('tests/unit/data-normaliser/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly normalises data for "${fileName}" file`, () => {
    const normalisedData = normalise.apply(null, input);

    expect(normalisedData).toEqual(expectedOutput);
  });
}
