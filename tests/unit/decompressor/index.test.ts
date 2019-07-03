import { HistoryConfig } from '../../../src/config/types';

import fs from 'fs';
import { promisify } from 'util';
import { getTestCases } from '../../utils';
import { decompress } from '../../../src/decompressor';

type TestCase = {
  bufferFile: 'string';
  expectedOutput: number[][];
};

describe('Decompressor', () => {
  const testCases = getTestCases<TestCase>('tests/unit/decompressor/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ bufferFile, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly decompresses data for "${fileName}" file`, async () => {
    const buffer = await promisify(fs.readFile)(bufferFile);
    const deocmpressed = await decompress(buffer, <HistoryConfig['timeframe']>timeframe);

    expect(deocmpressed).toEqual(expectedOutput);
  });
}
