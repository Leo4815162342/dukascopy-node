const lzma = require('lzma-purejs');
const struct = require('python-struct');

function decompress(buffer: Buffer, format: '>3i2f' | '>5i1f') {
  const decompressedData = lzma.decompressFile(buffer);

  //   const format = timeframe === 'tick' ? '>3i2f' : '>5i1f';
  const step = struct.sizeOf(format);

  const result = [];

  for (let i = 0, n = decompressedData.length; i < n; i += step) {
    const chunk = decompressedData.slice(i, i + step);
    const unpacked = struct.unpack(format, chunk);
    result.push(unpacked);
  }

  return result;
}

export { decompress };
