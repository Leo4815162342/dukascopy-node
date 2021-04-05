// ALL TESTS ARE RUN ASSUMING Current Date is: July 12th, 2019, 21:05 UTC
import { generateUrls } from '../../../src/url-generator';

import { advanceTo, clear } from 'jest-date-mock';
import { getTestCases } from '../../utils/testUtils';

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

type TestCase = {
  input: Parameters<typeof generateUrls>[0];
  expectedOutput: ReturnType<typeof generateUrls>;
};

describe(`Url generator (mocked current time: ${customDateNow})`, () => {
  beforeEach(() => {
    advanceTo(new Date(customDateNow));
  });

  afterEach(() => {
    clear();
  });

  const testCases = getTestCases<TestCase>('src/url-generator/tests/cases');

  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly generates urls for file "${fileName}"`, () => {
    const generatedUrls = generateUrls(input);

    expect(generatedUrls).toEqual(expectedOutput);
  });
}
