import { Timeframe } from '../config/types';
import { StructFormat, DecompressInput } from './types';

var lzmajs = require('lzma-purejs');
const struct = require('python-struct');

function getStructFormat(timeframe: Timeframe): StructFormat {
  return timeframe === 'tick' ? '>3i2f' : '>5i1f';
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
