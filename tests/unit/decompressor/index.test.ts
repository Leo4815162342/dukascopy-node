import { getTestCases } from '../../utils';
import { decompress } from '../../../src/decompressor';

type Unpromisify<T> = T extends Promise<infer U> ? U : T;

type Input = Parameters<typeof decompress>[0];
type PromiseOutput = ReturnType<typeof decompress>;

type Output = Unpromisify<PromiseOutput>;

type TestCase = {
  input: Input;
  expectedOutput: Output;
};

describe('Decompressor', () => {
  const testCases = getTestCases<TestCase>('tests/unit/decompressor/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly decompresses data for "${fileName}" file`, async () => {
    const deocmpressed = await decompress(input);

    expect(deocmpressed).toEqual(expectedOutput);
  });
}
