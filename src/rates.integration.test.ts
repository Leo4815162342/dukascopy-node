import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { getMockServer } from './__mocks__/server';
import { getCurrentRates, getHistoricRates, getHistoricalRates, getRealTimeRates } from './index';

describe('Node rate APIs over downloaded JSON', async () => {
  const server = await getMockServer();

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' });
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-13T21:03:00.000Z'));
  });

  afterAll(() => {
    server.close();
    vi.useRealTimers();
  });

  it('preserves array, JSON, and CSV historical outputs', async () => {
    const base = {
      instrument: 'btcusd' as const,
      dates: { from: '2023-02-19', to: '2023-02-20' },
      timeframe: 'm1' as const,
      pauseBetweenBatchesMs: 0
    };

    const [array, json, csv] = await Promise.all([
      getHistoricalRates({ ...base, format: 'array' }),
      getHistoricalRates({ ...base, format: 'json' }),
      getHistoricalRates({ ...base, format: 'csv' })
    ]);

    expect(array.length).toBeGreaterThan(0);
    expect(json[0]).toHaveProperty('timestamp');
    expect(csv).toContain('timestamp,open,high,low,close,volume');
  });

  it('preserves the historical alias', async () => {
    expect(getHistoricRates).toBe(getHistoricalRates);
  });

  it('preserves realtime last slicing and alias', async () => {
    const rates = await getRealTimeRates({
      instrument: 'btcusd',
      timeframe: 'm1',
      format: 'json',
      last: 3
    });

    expect(rates).toHaveLength(3);
    expect(getCurrentRates).toBe(getRealTimeRates);
  });

  it('preserves realtime date bounds for ticks', async () => {
    const rates = await getRealTimeRates({
      instrument: 'btcusd',
      timeframe: 'tick',
      format: 'array',
      dates: {
        from: '2023-02-20T12:00:00.000Z',
        to: '2023-02-20T13:00:00.000Z'
      }
    });

    expect(rates.length).toBeGreaterThan(0);
    expect(rates.every(([timestamp]) => timestamp >= Date.parse('2023-02-20T12:00:00.000Z'))).toBe(
      true
    );
  });
});
