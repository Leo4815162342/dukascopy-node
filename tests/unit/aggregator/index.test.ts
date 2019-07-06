import { aggregate } from '../../../src/aggregator';
import { getTestCases } from '../../utils';

type Input = Parameters<typeof aggregate>[0];
type Output = ReturnType<typeof aggregate>;

type TestCase = {
  input: Input;
  expectedOutput: Output;
};

describe('Aggregator', () => {
  const testCases = getTestCases<TestCase>('tests/unit/aggregator/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly aggregates data for "${fileName}" file`, () => {
    const aggregatedData = aggregate(input);

    expect(aggregatedData).toEqual(expectedOutput);
  });
}
