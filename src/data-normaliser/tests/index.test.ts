import { readFileSync } from 'fs';
import { resolve } from 'path';
import { describe, expect, it } from 'vitest';
import { normalise } from '..';
import { CandleResponse, TickResponse } from '../types';

function loadFixture<T>(fileName: string): T {
  return JSON.parse(
    readFileSync(resolve(__dirname, '../../__mocks__/fixtures', fileName), 'utf8')
  ) as T;
}

const tickFixture = loadFixture<TickResponse>('ticks-EUR-USD-2026-7-13-12.json');
const candleFixture = loadFixture<CandleResponse>('candles-minute-EUR-USD-BID-2026-7-10.json');
const emptyCandleFixture = loadFixture<CandleResponse>(
  'candles-minute-EUR-USD-BID-2026-7-11-empty.json'
);

describe('Data normaliser with downloaded API responses', () => {
  it('expands real tick timestamps, price deltas, and multiplier precision', () => {
    const rows = normalise({
      data: tickFixture,
      timeframe: 'tick',
      volumes: true,
      volumeUnits: 'millions'
    });

    expect(rows).toHaveLength(tickFixture.times.length);
    expect(rows.slice(0, 3)).toEqual([
      [1783944000093, 1.14277, 1.14273, 1.8, 2.7],
      [1783944000197, 1.14275, 1.14271, 0.9, 14.49],
      [1783944000351, 1.14273, 1.14272, 0.9, 0.9]
    ]);
    expect(rows[rows.length - 1]).toEqual([1783947597150, 1.1431, 1.14309, 0.9, 0.9]);
  });

  it('converts real tick volumes from units into the configured output unit', () => {
    const rows = normalise({
      data: tickFixture,
      timeframe: 'tick',
      volumes: true,
      volumeUnits: 'units'
    });

    expect(rows[0]).toEqual([1783944000093, 1.14277, 1.14273, 1_800_000, 2_700_000]);
    expect(rows[1]).toEqual([1783944000197, 1.14275, 1.14271, 900_000, 14_490_000]);
  });

  it('expands real candle deltas and fills timestamp gaps with flat candles', () => {
    const rows = normalise({
      data: candleFixture,
      timeframe: 'm1',
      volumes: true,
      volumeUnits: 'millions'
    });

    expect(rows).toHaveLength(candleFixture.times.length + 2);
    expect(rows.slice(0, 3)).toEqual([
      [1783641600000, 1.14331, 1.14334, 1.14322, 1.14324, 197.1],
      [1783641660000, 1.14323, 1.14335, 1.14318, 1.14333, 104.85],
      [1783641720000, 1.14332, 1.14339, 1.14323, 1.14331, 103.5]
    ]);
    expect(rows.filter(row => row[5] === 0)).toEqual([
      [1783715880000, 1.1412, 1.1412, 1.1412, 1.1412, 0],
      [1783715940000, 1.1412, 1.1412, 1.1412, 1.1412, 0]
    ]);
  });

  it('omits volume columns when volumes are disabled', () => {
    const [row] = normalise({
      data: candleFixture,
      timeframe: 'm1',
      volumes: false,
      volumeUnits: 'millions'
    });

    expect(row).toEqual([1783641600000, 1.14331, 1.14334, 1.14322, 1.14324]);
  });

  it('accepts a real empty-market response', () => {
    expect(emptyCandleFixture.times).toEqual([]);
    expect(
      normalise({
        data: emptyCandleFixture,
        timeframe: 'm1',
        volumes: true,
        volumeUnits: 'millions'
      })
    ).toEqual([]);
  });

  it('rejects a downloaded response when one column is corrupted', () => {
    const corruptedFixture: TickResponse = {
      ...tickFixture,
      asks: tickFixture.asks.slice(1)
    };

    expect(() =>
      normalise({
        data: corruptedFixture,
        timeframe: 'tick',
        volumes: true,
        volumeUnits: 'millions'
      })
    ).toThrow('column lengths');
  });
});
