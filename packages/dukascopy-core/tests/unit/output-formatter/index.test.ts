import { getTestCases } from '../../utils';
import { formatOutput } from '../../../src/output-formatter';

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

describe('Output formatter', () => {
  const testCases = getTestCases<TestCase>('tests/unit/output-formatter/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});
