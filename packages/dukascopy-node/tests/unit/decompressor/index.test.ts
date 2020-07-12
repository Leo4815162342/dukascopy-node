import { getTestCases } from '../../utils';
import { decompress } from '../../../src/decompressor';

function generateTestSuite({ input, expectedOutput }: TestCase, path: string): void {
  const [fileName] = path.split('/').reverse();

  it(`Correctly decompresses data for "${fileName}" file`, () => {
    const deocmpressed = decompress(input);

    expect(deocmpressed).toEqual(expectedOutput);
  });
}

type TestCase = {
  input: Parameters<typeof decompress>[0];
  expectedOutput: ReturnType<typeof decompress>;
};

describe('Decompressor', () => {
  const testCases = getTestCases<TestCase>('tests/unit/decompressor/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});
