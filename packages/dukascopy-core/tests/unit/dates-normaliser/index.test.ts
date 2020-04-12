// ALL TESTS ARE RUN ASSUMING Current Date is: July 12th, 2019, 21:05 UTC
import { getTestCases } from '../../utils';
import { normaliseDates } from '../../../src/dates-normaliser';
import { advanceTo, clear } from 'jest-date-mock';

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

type TestCase = {
  input: Parameters<typeof normaliseDates>[0];
  expectedOutput: ReturnType<typeof normaliseDates>;
};

describe(`Dates normaliser (mocked current time: ${customDateNow})`, () => {
  beforeEach(() => {
    advanceTo(new Date(customDateNow));
  });

  afterEach(() => {
    clear();
  });

  const testCases = getTestCases<TestCase>('tests/unit/dates-normaliser/cases');

  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly normalises dates for file "${fileName}"`, () => {
    const normalisedDates = normaliseDates(input);

    expect(normalisedDates).toEqual(expectedOutput);
  });
}
