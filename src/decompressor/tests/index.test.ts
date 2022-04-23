import { expect, it, describe } from 'vitest';
import { decompress } from '../../../src/decompressor';
import { getTestCases } from '../../utils/testUtils';

function generateTestSuite({ input, expectedOutput }: TestCase, path: string): void {
  const [fileName] = path.split('/').reverse();

  it(`Correctly decompresses data for "${fileName}" file`, () => {
    const decompressed = decompress(input);

    expect(decompressed).toEqual(expectedOutput);
  });
}

type TestCase = {
  input: Parameters<typeof decompress>[0];
  expectedOutput: ReturnType<typeof decompress>;
};

describe('Decompressor', async () => {
  const testCases = await getTestCases<TestCase>('src/decompressor/tests/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});
