import { readFileSync } from 'fs';
import { resolve } from 'path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchJsonWithRetry, getInstrumentDetails } from './generate-data';
import { DATA_API_ROOT } from '../../config/data-api';
import {
  ApiInstrumentDetail,
  ApiInstrumentSummary,
  InstrumentsResponse
} from './generate-data.types';
import { buildInstrumentGroupData } from './generate-group-data';
import { buildMeta } from './generate-meta';

function loadJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

const fixtureFolderPath = resolve(__dirname, '../../__mocks__/fixtures');
const bulkFixturePath = resolve(__dirname, 'generated/raw-meta-data-2026-07-13.json');
const bulkFixtureBody = readFileSync(bulkFixturePath, 'utf8');
const authoritativeBulk = JSON.parse(bulkFixtureBody) as InstrumentsResponse;
const detailFixtureBodies = {
  'EUR-USD': readFileSync(resolve(fixtureFolderPath, 'instrument-EUR-USD.json'), 'utf8'),
  'BTC-USD': readFileSync(resolve(fixtureFolderPath, 'instrument-BTC-USD.json'), 'utf8')
};
const eurUsdDetail = loadJson<ApiInstrumentDetail>(
  resolve(fixtureFolderPath, 'instrument-EUR-USD.json')
);

function getSummary(code: string): ApiInstrumentSummary {
  const instrument = authoritativeBulk.instruments.find(item => item.code === code);

  if (!instrument) {
    throw new Error(`Downloaded bulk fixture does not contain ${code}`);
  }

  return instrument;
}

function withInstruments(instruments: ApiInstrumentSummary[]): InstrumentsResponse {
  return { ...authoritativeBulk, instruments };
}

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('Instrument metadata generation with downloaded responses', () => {
  it('maps every required history period and retains the URL code', () => {
    expect(buildMeta([eurUsdDetail])).toEqual({
      eurusd: {
        name: 'EUR/USD',
        code: 'EUR-USD',
        description: 'Euro vs US Dollar',
        decimalFactor: 100000,
        startHourForTicks: '2003-05-04T19:00:00.048Z',
        startDayForMinuteCandles: '2003-05-04T19:00:00.000Z',
        startMonthForHourlyCandles: '2003-05-04T19:00:00.000Z',
        startYearForDailyCandles: '1973-03-01T00:00:00.000Z'
      }
    });
  });

  it('rejects a downloaded detail response with a missing history period', () => {
    const missingHistory: ApiInstrumentDetail = {
      ...eurUsdDetail,
      histories: eurUsdDetail.histories.filter(item => item.period !== 'DAY')
    };

    expect(() => buildMeta([missingHistory])).toThrow(/missing DAY history/);
  });

  it('rejects normalized-name collisions', () => {
    const collidingDetail: ApiInstrumentDetail = {
      ...eurUsdDetail,
      code: 'EUR/USD'
    };

    expect(() => buildMeta([eurUsdDetail, collidingDetail])).toThrow(/key collision/);
  });

  it('rebuilds groups from only the instruments returned by the API', () => {
    expect(buildInstrumentGroupData(withInstruments([getSummary('EUR-USD')]))).toEqual([
      { id: 'fx_majors', instruments: ['eurusd'] }
    ]);
  });

  it('uses real platform and ungrouped fallbacks when groupId is absent', () => {
    expect(
      buildInstrumentGroupData(withInstruments([getSummary('EUC-EUR'), getSummary('USC-USD')]))
    ).toEqual([
      { id: 'crypto_curr', instruments: ['euceur'] },
      { id: 'ungrouped', instruments: ['uscusd'] }
    ]);
  });

  it('fetches downloaded instrument details sequentially and preserves API order', async () => {
    vi.useFakeTimers();
    let requestsInFlight = 0;
    let maximumRequestsInFlight = 0;
    const requestedCodes: string[] = [];

    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string | URL | Request) => {
        requestsInFlight++;
        maximumRequestsInFlight = Math.max(maximumRequestsInFlight, requestsInFlight);
        const code = decodeURIComponent(String(input).split('/').pop() || '');
        requestedCodes.push(code);
        await Promise.resolve();
        requestsInFlight--;

        return new Response(detailFixtureBodies[code as keyof typeof detailFixtureBodies], {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );

    const resultPromise = getInstrumentDetails(
      withInstruments([getSummary('EUR-USD'), getSummary('BTC-USD')])
    );
    await vi.runAllTimersAsync();
    const result = await resultPromise;

    expect(maximumRequestsInFlight).toBe(1);
    expect(requestedCodes).toEqual(['EUR-USD', 'BTC-USD']);
    expect(result.map(instrument => instrument.code)).toEqual(['EUR-USD', 'BTC-USD']);
  });

  it('retries transient failures with backoff before returning the bulk fixture', async () => {
    vi.useFakeTimers();
    const fetchMock = vi
      .fn()
      .mockRejectedValueOnce(new Error('temporary network failure'))
      .mockResolvedValueOnce(new Response('', { status: 503 }))
      .mockResolvedValueOnce(
        new Response(bulkFixtureBody, { headers: { 'Content-Type': 'application/json' } })
      );
    vi.stubGlobal('fetch', fetchMock);

    const resultPromise = fetchJsonWithRetry<InstrumentsResponse>(`${DATA_API_ROOT}/instruments`);
    await vi.runAllTimersAsync();
    const result = await resultPromise;

    expect(result.instruments).toHaveLength(1499);
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('does not retry permanent metadata failures', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('', { status: 404 }));
    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchJsonWithRetry(`${DATA_API_ROOT}/instruments/UNKNOWN`)).rejects.toThrow(
      'status 404'
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
