import { HistoryConfig } from './config/types';

const lzma = require('lzma-purejs');
const struct = require('python-struct');

type StructFormat = '>3i2f' | '>5i1f';

function getStructFormat(timeframe: HistoryConfig['timeframe']): StructFormat {
  return timeframe === 'tick' ? '>3i2f' : '>5i1f';
}

function decompress(buffer: Buffer, timeframe: HistoryConfig['timeframe']): [] | number[][] {
  if (buffer.length === 0) {
    return [];
  }
  const result: number[][] = [];
  const format = getStructFormat(timeframe);
  const decompressedData = lzma.decompressFile(buffer);

  const step = struct.sizeOf(format);

  for (let i = 0, n = decompressedData.length; i < n; i += step) {
    const chunk = decompressedData.slice(i, i + step);
    const unpacked = struct.unpack(format, chunk);
    result.push(unpacked);
  }

  return result;
}

export { decompress };
