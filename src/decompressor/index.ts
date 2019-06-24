import { HistoryConfig } from './../config/types';

import lzmaNative from 'lzma-native';
const struct = require('python-struct');

type StructFormat = '>3i2f' | '>5i1f';

function getStructFormat(timeframe: HistoryConfig['timeframe']): StructFormat {
  return timeframe === 'tick' ? '>3i2f' : '>5i1f';
}

async function decompress(
  compressedBuffer: Buffer,
  timeframe: HistoryConfig['timeframe']
): Promise<number[][]> {
  if (compressedBuffer.length === 0) {
    return [];
  }
  const result: number[][] = [];
  const format = getStructFormat(timeframe);
  const decompressedBuffer: Buffer = (await lzmaNative.decompress(compressedBuffer)) as any;

  const step = struct.sizeOf(format);

  // TODO: do not throw when url is not available

  for (let i = 0, n = decompressedBuffer.length; i < n; i += step) {
    const chunk = decompressedBuffer.slice(i, i + step);
    const unpacked = struct.unpack(format, chunk);

    result.push(unpacked);
  }

  return result;
}

export { decompress };
