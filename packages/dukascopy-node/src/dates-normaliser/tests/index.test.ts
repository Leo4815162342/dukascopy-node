// ALL TESTS ARE RUN ASSUMING Current Date is: July 12th, 2019, 21:05 UTC
import { advanceTo, clear } from 'jest-date-mock';
import { normaliseDates } from '..';
import { getTestCases } from '../../utils/testUtils';

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

type TestCase = {
  input: Parameters<typeof normaliseDates>[0];
  expectedOutput: ReturnType<typeof normaliseDates>;
};

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly normalises dates for file "${fileName}"`, () => {
    const normalisedDates = normaliseDates(input);

    expect(normalisedDates).toEqual(expectedOutput);
  });
}

describe(`Dates normaliser (mocked current time: ${customDateNow})`, () => {
  beforeEach(() => {
    advanceTo(new Date(customDateNow));
  });

  afterEach(() => {
    clear();
  });

  const testCases = getTestCases<TestCase>('src/dates-normaliser/tests/cases');

  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});
