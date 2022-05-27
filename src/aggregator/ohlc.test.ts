import { expect, it, describe } from 'vitest';
import { getOHLC, ticksToOHLC, breakdownByInterval } from './ohlc';

describe('getOHLC', () => {
  const candles = [
    [1588309200000, 1.0949, 1.09491, 1.09469, 1.09471, 192.04],
    [1588309260000, 1.09472, 1.09475, 1.09466, 1.09466, 136.35],
    [1588309320000, 1.09467, 1.09479, 1.09467, 1.09471, 93.21],
    [1588309380000, 1.09469, 1.09473, 1.09467, 1.09468, 33.11],
    [1588309440000, 1.09467, 1.09467, 1.0946, 1.09463, 29.99]
  ];

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

describe('ticksToOHLC', () => {
  const ticks = [
    [1549238400994, 1.14545, 1.14543, 1, 2.06],
    [1549238401271, 1.14548, 1.14549, 1, 1],
    [1549238401464, 1.14544, 1.14541, 1, 8.35],
    [1549238401704, 1.14532, 1.1454, 1, 1.25],
    [1549238402078, 1.14543, 1.14547, 1, 1]
  ];

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

describe('breakdownByInterval', () => {
  const ticks = [
    [1549238400994, 1.14545, 1.14543, 1, 2.06], // 2019-02-04T00:00...
    [1549238401271, 1.14546, 1.14544, 1, 1], // 2019-02-04T00:00...
    [1549238466268, 1.14571, 1.14567, 2.9, 5.75], // 2019-02-04T00:01...
    [1549238466807, 1.1457, 1.14567, 1.25, 1.12], // 2019-02-04T00:01...
    [1549238523508, 1.14584, 1.14579, 1, 1.87], // 2019-02-04T00:02...
    [1549238523560, 1.14584, 1.14579, 1.65, 1], // 2019-02-04T00:02...
    [1549238523828, 1.14583, 1.14579, 1.52, 1.5] // 2019-02-04T00:02...
  ];

  it('Breaks down ticks into minutely sub groups', () => {
    const result = breakdownByInterval(ticks, 3, d => d.getUTCMinutes());

    expect(result).toEqual([
      [
        [1549238400994, 1.14545, 1.14543, 1, 2.06],
        [1549238401271, 1.14546, 1.14544, 1, 1]
      ],
      [
        [1549238466268, 1.14571, 1.14567, 2.9, 5.75],
        [1549238466807, 1.1457, 1.14567, 1.25, 1.12]
      ],
      [
        [1549238523508, 1.14584, 1.14579, 1, 1.87],
        [1549238523560, 1.14584, 1.14579, 1.65, 1],
        [1549238523828, 1.14583, 1.14579, 1.52, 1.5]
      ]
    ]);
  });

  it('Breaks down ticks into minutely sub groups (with empty groups)', () => {
    const result = breakdownByInterval(ticks, 5, d => d.getUTCMinutes());

    expect(result).toEqual([
      [
        [1549238400994, 1.14545, 1.14543, 1, 2.06],
        [1549238401271, 1.14546, 1.14544, 1, 1]
      ],
      [
        [1549238466268, 1.14571, 1.14567, 2.9, 5.75],
        [1549238466807, 1.1457, 1.14567, 1.25, 1.12]
      ],
      [
        [1549238523508, 1.14584, 1.14579, 1, 1.87],
        [1549238523560, 1.14584, 1.14579, 1.65, 1],
        [1549238523828, 1.14583, 1.14579, 1.52, 1.5]
      ],
      [],
      []
    ]);
  });

  it('Breaks down ticks with gaps into minutely sub groups', () => {
    // 2019-02-04T00:01 is missing
    const ticksWithGaps = [
      [1549238400994, 1.14545, 1.14543, 1, 2.06], // 2019-02-04T00:00...
      [1549238401271, 1.14546, 1.14544, 1, 1], // 2019-02-04T00:00...
      [1549238523508, 1.14584, 1.14579, 1, 1.87], // 2019-02-04T00:02...
      [1549238523560, 1.14584, 1.14579, 1.65, 1], // 2019-02-04T00:02...
      [1549238523828, 1.14583, 1.14579, 1.52, 1.5] // 2019-02-04T00:02...
    ];

    const result = breakdownByInterval(ticksWithGaps, 3, d => d.getUTCMinutes());

    expect(result).toEqual([
      [
        [1549238400994, 1.14545, 1.14543, 1, 2.06],
        [1549238401271, 1.14546, 1.14544, 1, 1]
      ],
      [],
      [
        [1549238523508, 1.14584, 1.14579, 1, 1.87],
        [1549238523560, 1.14584, 1.14579, 1.65, 1],
        [1549238523828, 1.14583, 1.14579, 1.52, 1.5]
      ]
    ]);
  });

  it('Breaks down ticks with empty entries into minutely sub groups', () => {
    const ticksWithEmptyEntries = [
      [1549238400994, 1.14545, 1.14543, 1, 2.06], // 2019-02-04T00:00...
      [],
      [1549238466268, 1.14571, 1.14567, 2.9, 5.75], // 2019-02-04T00:01...
      [],
      [1549238523508, 1.14584, 1.14579, 1, 1.87], // 2019-02-04T00:02...
      [1549238523560, 1.14584, 1.14579, 1.65, 1], // 2019-02-04T00:02...
      []
    ];

    const result = breakdownByInterval(ticksWithEmptyEntries, 3, d => d.getUTCMinutes());

    expect(result).toEqual([
      [[1549238400994, 1.14545, 1.14543, 1, 2.06]],
      [[1549238466268, 1.14571, 1.14567, 2.9, 5.75]],
      [
        [1549238523508, 1.14584, 1.14579, 1, 1.87],
        [1549238523560, 1.14584, 1.14579, 1.65, 1]
      ]
    ]);
  });
});
