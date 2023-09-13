import { readFile } from 'fs/promises';
import { existsSync, rmSync } from 'fs';
import { beforeAll, afterAll, describe, test, expect, vi, afterEach } from 'vitest';
import { getMockServer } from '../../__mocks__/server';
import { run } from '../cli';

const testCases = [
  {
    timeframe: 'tick',
    options: '-i btcusd -from 2023-02-20T12:00:00.000Z -to 2023-02-20T13:00:00.000Z -t tick',
    fileName: 'btcusd-tick-2023-02-20T12-2023-02-20T13.json'
  },
  {
    timeframe: 's1',
    options: '-i btcusd -from 2023-02-20T12:00:00.000Z -to 2023-02-20T13:00:00.000Z -t s1',
    fileName: 'btcusd-s1-bid-2023-02-20T12-2023-02-20T13.json'
  },
  {
    timeframe: 'm1',
    options: '-i btcusd -from 2023-02-19 -to 2023-02-20 -t m1',
    fileName: 'btcusd-m1-bid-2023-02-19-2023-02-20.json'
  },
  {
    timeframe: 'm5',
    options: '-i btcusd -from 2023-02-19 -to 2023-02-20 -t m5',
    fileName: 'btcusd-m5-bid-2023-02-19-2023-02-20.json'
  },
  {
    timeframe: 'm15',
    options: '-i btcusd -from 2023-02-19 -to 2023-02-20 -t m15',
    fileName: 'btcusd-m15-bid-2023-02-19-2023-02-20.json'
  },
  {
    timeframe: 'm30',
    options: '-i btcusd -from 2023-02-19 -to 2023-02-20 -t m30',
    fileName: 'btcusd-m30-bid-2023-02-19-2023-02-20.json'
  },
  {
    timeframe: 'h1',
    options: '-i btcusd -from 2023-01-01 -to 2023-02-20 -t h1',
    fileName: 'btcusd-h1-bid-2023-01-01-2023-02-20.json'
  },
  {
    timeframe: 'h4',
    options: '-i btcusd -from 2023-01-01 -to 2023-02-20 -t h4',
    fileName: 'btcusd-h4-bid-2023-01-01-2023-02-20.json'
  },
  {
    timeframe: 'd1',
    options: '-i btcusd -from 2022-01-01 -to 2023-02-20 -t d1',
    fileName: 'btcusd-d1-bid-2022-01-01-2023-02-20.json'
  },
  {
    timeframe: 'mn1',
    options: '-i btcusd -from 2018-01-01 -to 2023-02-01 -t mn1',
    fileName: 'btcusd-mn1-bid-2018-01-01-2023-02-01.json'
  }
] as const;

describe('CLI (default values)', async () => {
  const mockServer = await getMockServer();

  beforeAll(() => {
    mockServer.listen();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2023-02-22T21:12:00.000Z'));
  });
  afterAll(() => {
    mockServer.close();
    vi.useRealTimers();
    rmSync('./download', { recursive: true, force: true });
  });
  afterEach(() => mockServer.resetHandlers());

  for (const { timeframe, options, fileName } of testCases) {
    test(`should download "${timeframe}" data and save to file`, async () => {
      await run(getArgv(options + ' --batch-pause 0'));

      expect(existsSync(`./download/${fileName}`)).toBe(true);

      const [fileContents, expectedFileContents] = await Promise.all(
        [`./download/${fileName}`, `./src/cli/tests/expected-outputs/${fileName}`].map(file =>
          readFile(file)
        )
      );

      expect(fileContents.equals(expectedFileContents)).toBe(true);
    }, 10000);
  }
});

function getArgv(options: string) {
  return ['node', 'cli.test.ts', ...options.split(' ')];
}
