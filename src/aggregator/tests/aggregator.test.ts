import { expect, describe, it } from 'vitest';
import { aggregate } from '../../../src/aggregator';
import { getTestCases } from '../../utils/testUtils';

// tests/__test-data__/EURUSD/2019/01/04/00h_ticks.bi5
// tests/__test-data__/EURUSD/2019/01/04/BID_candles_min_1.bi5
// tests/__test-data__/EURUSD/2019/01/BID_candles_hour_1.bi5
// tests/__test-data__/EURUSD/2018/BID_candles_day_1.bi5

type TestCase = {
  input: Parameters<typeof aggregate>[0];
  expectedOutput: ReturnType<typeof aggregate>;
};

describe('Aggregator', async () => {
  const testCases = await getTestCases<TestCase>('src/aggregator/tests/cases');
  testCases.forEach(({ path, content }) => generateTestSuite(content, path));
});

function generateTestSuite({ input, expectedOutput }: TestCase, path: string) {
  const [fileName] = path.split('/').reverse();

  it(`Correctly aggregates data: "${fileName}"`, () => {
    const output = aggregate(input);

    expect(output).toEqual(expectedOutput);
  });
}
