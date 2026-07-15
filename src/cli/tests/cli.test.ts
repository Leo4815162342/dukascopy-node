import { readFile } from 'fs/promises';
import { existsSync, rmSync } from 'fs';
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest';
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
  ...(['m1', 'm5', 'm15', 'm30'] as const).map(timeframe => ({
    timeframe,
    options: `-i btcusd -from 2023-02-19 -to 2023-02-20 -t ${timeframe}`,
    fileName: `btcusd-${timeframe}-bid-2023-02-19-2023-02-20.json`
  })),
  ...(['h1', 'h4'] as const).map(timeframe => ({
    timeframe,
    options: `-i btcusd -from 2023-01-01 -to 2023-02-20 -t ${timeframe}`,
    fileName: `btcusd-${timeframe}-bid-2023-01-01-2023-02-20.json`
  })),
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

describe('CLI JSON downloads', async () => {
  const mockServer = await getMockServer();

  beforeAll(() => {
    mockServer.listen({ onUnhandledRequest: 'error' });
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-13T21:03:00.000Z'));
  });

  afterAll(() => {
    mockServer.close();
    vi.useRealTimers();
    rmSync('./download', { recursive: true, force: true });
  });

  afterEach(() => mockServer.resetHandlers());

  for (const { timeframe, options, fileName } of testCases) {
    test(`downloads ${timeframe} data to the existing JSON file contract`, async () => {
      await run(getArgv(`${options} --batch-pause 0`));

      const filePath = `./download/${fileName}`;
      expect(existsSync(filePath)).toBe(true);
      const output = JSON.parse(await readFile(filePath, 'utf8')) as Array<{ timestamp: number }>;
      expect(output.length).toBeGreaterThan(0);
      expect(output.every(item => Number.isFinite(item.timestamp))).toBe(true);
    });
  }
});

function getArgv(options: string) {
  return ['node', './src/cli/index.ts', ...options.split(' ')];
}
