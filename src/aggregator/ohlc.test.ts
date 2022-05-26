import { expect, it, describe } from 'vitest';
import { getOHLC, ticksToOHLC } from './ohlc';

const candles = [
  [1588309200000, 1.0949, 1.09491, 1.09469, 1.09471, 192.04],
  [1588309260000, 1.09472, 1.09475, 1.09466, 1.09466, 136.35],
  [1588309320000, 1.09467, 1.09479, 1.09467, 1.09471, 93.21],
  [1588309380000, 1.09469, 1.09473, 1.09467, 1.09468, 33.11],
  [1588309440000, 1.09467, 1.09467, 1.0946, 1.09463, 29.99]
];

describe('getOHLC', () => {
  it('Genereates OHLC data', () => {
    const result = getOHLC({ input: candles, volumes: true });
    expect(result).toEqual([1588309200000, 1.0949, 1.09491, 1.0946, 1.09463, 484.7]);
  });

  it('Genereates OHLC data with no volumes', () => {
    const result = getOHLC({ input: candles, volumes: false });
    expect(result).toEqual([1588309200000, 1.0949, 1.09491, 1.0946, 1.09463]);
  });

  it('Genereates OHLC data with explicit start timestamp', () => {
    const result = getOHLC({ input: candles, volumes: true, startTs: 1588309200000 });
    expect(result).toEqual([1588309200000, 1.0949, 1.09491, 1.0946, 1.09463, 484.7]);
  });

  it('Handles partially empty candles', () => {
    const result = getOHLC({
      input: [
        [1588309200000, 1.0949, 1.09491, 1.09469, 1.09471, 192.04],
        [],
        [1588309320000, 1.09467, 1.09479, 1.09467, 1.09471, 93.21]
      ],
      volumes: true
    });
    expect(result).toEqual([1588309200000, 1.0949, 1.09491, 1.09467, 1.09471, 285.25]);
  });

  it('Handles empty candles', () => {
    const result = getOHLC({ input: [[], [], []], volumes: true });
    expect(result).toEqual([]);
  });
});

const ticks = [
  [1549238400994, 1.14545, 1.14543, 1, 2.06],
  [1549238401271, 1.14548, 1.14549, 1, 1],
  [1549238401464, 1.14544, 1.14541, 1, 8.35],
  [1549238401704, 1.14532, 1.1454, 1, 1.25],
  [1549238402078, 1.14543, 1.14547, 1, 1]
];

describe('ticksToOHLC', () => {
  it('Generates OHLC data from ticks (ask)', () => {
    const result = ticksToOHLC({ ticks, priceType: 'ask', startTs: 1549238400000, volumes: true });
    expect(result).toEqual([1549238400000, 1.14545, 1.14548, 1.14532, 1.14543, 5]);
  });
  it('Generates OHLC data from ticks (bid)', () => {
    const result = ticksToOHLC({ ticks, priceType: 'bid', startTs: 1549238400000, volumes: true });
    expect(result).toEqual([1549238400000, 1.14543, 1.14549, 1.1454, 1.14547, 13.66]);
  });

  it('Generates OHLC data from ticks with no volumes', () => {
    const result = ticksToOHLC({ ticks, priceType: 'ask', startTs: 1549238400000, volumes: false });
    expect(result).toEqual([1549238400000, 1.14545, 1.14548, 1.14532, 1.14543]);
  });
});
