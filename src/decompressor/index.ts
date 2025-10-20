import { DecompressInput } from './types';
import { TimeframeType, Timeframe } from '../config/timeframes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lzmajs = require('lzma-purejs-requirejs');

// function getStructFormat(timeframe: TimeframeType): StructFormat {
//   return timeframe === Timeframe.tick ? '>3i2f' : '>5i1f';
// }

function getStructSize(timeframe: TimeframeType): number {
  // i (integer) = 4 bytes, f (float) = 4 bytes
  // tick: 3i2f = 3*4 + 2*4 = 20 bytes
  // other: 5i1f = 5*4 + 1*4 = 24 bytes
  return timeframe === Timeframe.tick ? 20 : 24;
}

function unpackBuffer(buffer: Buffer, timeframe: TimeframeType): number[] {
  const result: number[] = [];

  if (timeframe === Timeframe.tick) {
    // Format: >3i2f (3 integers, 2 floats)
    result.push(buffer.readInt32BE(0)); // First integer
    result.push(buffer.readInt32BE(4)); // Second integer
    result.push(buffer.readInt32BE(8)); // Third integer
    result.push(buffer.readFloatBE(12)); // First float
    result.push(buffer.readFloatBE(16)); // Second float
  } else {
    // Format: >5i1f (5 integers, 1 float)
    result.push(buffer.readInt32BE(0)); // First integer
    result.push(buffer.readInt32BE(4)); // Second integer
    result.push(buffer.readInt32BE(8)); // Third integer
    result.push(buffer.readInt32BE(12)); // Fourth integer
    result.push(buffer.readInt32BE(16)); // Fifth integer
    result.push(buffer.readFloatBE(20)); // Float
  }

  return result;
}

function decompress(input: DecompressInput): number[][] {
  const { buffer, timeframe } = input;

  if (buffer.length === 0) {
    return [];
  }
  const result: number[][] = [];
  const decompressedBuffer = lzmajs.decompressFile(buffer) as Buffer;

  const step = getStructSize(timeframe);

  for (let i = 0, n = decompressedBuffer.length; i < n; i += step) {
    const chunk = decompressedBuffer.slice(i, i + step);
    const unpacked = unpackBuffer(chunk, timeframe);

    result.push(unpacked);
  }

  return result;
}

export { decompress };
