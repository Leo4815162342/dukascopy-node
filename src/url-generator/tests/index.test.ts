import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { generateUrls, URL_ROOT } from '..';

const now = new Date('2019-07-12T21:05:00.000Z');

describe('JSON URL generator', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(now);
  });

  afterEach(() => vi.useRealTimers());

  it('uses unpadded 1-based months for completed minute days', () => {
    const urls = generateUrls({
      instrument: 'eurusd',
      timeframe: 'm1',
      priceType: 'ask',
      startDate: new Date('2019-06-01T00:00:00.000Z'),
      endDate: new Date('2019-07-01T00:00:00.000Z')
    });

    expect(urls).toHaveLength(30);
    expect(urls[0]).toBe(`${URL_ROOT}/candles/minute/EUR-USD/ASK/2019/6/1`);
    expect(urls[urls.length - 1]).toBe(`${URL_ROOT}/candles/minute/EUR-USD/ASK/2019/6/30`);
  });

  it('uses month 1 for January hourly data', () => {
    expect(
      generateUrls({
        instrument: 'eurusd',
        timeframe: 'h1',
        priceType: 'bid',
        startDate: new Date('2019-01-01T00:00:00.000Z'),
        endDate: new Date('2019-02-01T00:00:00.000Z')
      })
    ).toEqual([`${URL_ROOT}/candles/hour/EUR-USD/BID/2019/1`]);
  });

  it('uses day candles for daily and monthly requests', () => {
    expect(
      generateUrls({
        instrument: 'eurusd',
        timeframe: 'mn1',
        priceType: 'ask',
        startDate: new Date('2018-01-01T00:00:00.000Z'),
        endDate: new Date('2019-01-01T00:00:00.000Z')
      })
    ).toEqual([`${URL_ROOT}/candles/day/EUR-USD/ASK/2018`]);
  });

  it('uses from queries for active candle periods', () => {
    expect(
      generateUrls({
        instrument: 'eurusd',
        timeframe: 'm5',
        priceType: 'bid',
        startDate: new Date('2019-07-12T20:00:00.000Z'),
        endDate: now
      })
    ).toEqual([`${URL_ROOT}/candles/minute/EUR-USD/BID?from=1562889600000`]);
  });

  it('uses completed paths plus a from query across an active year', () => {
    expect(
      generateUrls({
        instrument: 'eurusd',
        timeframe: 'd1',
        priceType: 'bid',
        startDate: new Date('2018-01-01T00:00:00.000Z'),
        endDate: now
      })
    ).toEqual([
      `${URL_ROOT}/candles/day/EUR-USD/BID/2018`,
      `${URL_ROOT}/candles/day/EUR-USD/BID?from=1546300800000`
    ]);
  });

  it('uses completed and active tick-hour endpoints', () => {
    expect(
      generateUrls({
        instrument: 'eurusd',
        timeframe: 'tick',
        priceType: 'bid',
        startDate: new Date('2019-07-12T20:00:00.000Z'),
        endDate: now
      })
    ).toEqual([
      `${URL_ROOT}/ticks/EUR-USD/2019/7/12/20`,
      `${URL_ROOT}/ticks/EUR-USD?from=1562965200000`
    ]);
  });
});
