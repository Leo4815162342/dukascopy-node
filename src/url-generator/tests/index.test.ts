import { expect, describe, it, vi, beforeEach, afterEach } from 'vitest';
import { generateUrls } from '../../../src/url-generator';
import { getTestCases } from '../../utils/testUtils';

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

type TestCase = {
  input: Parameters<typeof generateUrls>[0];
  expectedOutput: ReturnType<typeof generateUrls>;
};

describe(`Url generator (mocked current time: ${customDateNow})`, async () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const testCases = await getTestCases<TestCase>('src/url-generator/tests/cases');

  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly generates urls for file "${fileName}"`, () => {
    const date = new Date(customDateNow);
    vi.setSystemTime(date);
    const generatedUrls = generateUrls(input);

    expect(generatedUrls).toEqual(expectedOutput);
  });
}
