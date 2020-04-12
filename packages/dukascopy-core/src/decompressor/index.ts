import { StructFormat, DecompressInput } from './types';
import { TimeframeType, Timeframe } from '../config/timeframes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lzmajs = require('lzma-purejs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const struct = require('python-struct');

function getStructFormat(timeframe: TimeframeType): StructFormat {
  return timeframe === Timeframe.tick ? '>3i2f' : '>5i1f';
}

function decompress(input: DecompressInput): number[][] {
  const { buffer, timeframe } = input;

  if (buffer.length === 0) {
    return [];
  }
  const result: number[][] = [];
  const format = getStructFormat(timeframe);
  const decompressedBuffer = lzmajs.decompressFile(buffer) as Buffer;

  const step = struct.sizeOf(format);

  for (let i = 0, n = decompressedBuffer.length; i < n; i += step) {
    const chunk = decompressedBuffer.slice(i, i + step);
    const unpacked = struct.unpack(format, chunk);

    result.push(unpacked);
  }

  return result;
}

export { decompress };
