// ALL TESTS ARE RUN ASSUMING Current Date is: July 12th, 2019, 21:05 UTC
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { normaliseDates } from '..';
import { getTestCases } from '../../utils/testUtils';

const customDateNow = '2019-07-12T21:05:00.000Z'; // mocking new Date()

type TestCase = {
  input: Parameters<typeof normaliseDates>[0];
  expectedOutput: ReturnType<typeof normaliseDates>;
};

describe(`Dates normaliser (mocked current time: ${customDateNow})`, async () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const testCases = await getTestCases<TestCase>('src/dates-normaliser/tests/cases');

  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly normalises dates for file "${fileName}"`, () => {
    const date = new Date(customDateNow);
    vi.setSystemTime(date);
    const normalisedDates = normaliseDates(input);

    expect(normalisedDates).toEqual(expectedOutput);
  });
}
