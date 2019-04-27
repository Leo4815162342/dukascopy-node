const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const lzma = require('lzma-purejs');
const lzmaNative = require('lzma-native');

const struct = require('python-struct');

const FILE = 'GBP_USD_tick.bi5'; // tick
const FILE2 = 'BID_candles_min_1.bi5'; // 1 min
const FILE3 = 'BID_candles_day_1.bi5'; //1 day
const FILE4 = 'HistoryStart_2.bi5';
const FILE5 = 'BTC.bi5';
const FILE6 = 'USDHKD.bi5';

function parseCandleBin(candledata, inarray) {
  let acandledata = '';
  let fields = 6;
  let fieldbytes = 4;

  if (inarray) {
    acandledata = [];
  }

  let i1,
    j1,
    temparray1,
    chunk1 = fields * fieldbytes;
  for (i1 = 0, j1 = candledata.length; i1 < j1; i1 += chunk1) {
    temparray1 = candledata.slice(i1, i1 + chunk1);

    let i2,
      j2,
      temparray2,
      chunk2 = fieldbytes;
    let cont = 0;
    let tmpcandledata = '';
    for (i2 = 0, j2 = temparray1.length; i2 < j2; i2 += chunk2) {
      temparray2 = temparray1.slice(i2, i2 + chunk2);

      if (cont <= 4) {
        tmpcandledata += temparray2.readInt32BE() + ',';
      } else {
        tmpcandledata += temparray2.readFloatBE();
        if (inarray) {
          acandledata.push(tmpcandledata);
        } else {
          acandledata += tmpcandledata + '\r\n';
        }
      }

      cont++;
    }
  }

  return acandledata;
}

(async () => {
  try {
    const file = await readFile(FILE);

    const data = lzma.decompressFile(file);

    // const format = '>5i1f'; // 1 min, 1hr
    const format = '>3i2f'; // tick
    const step = struct.sizeOf(format);

    const result = [];

    for (let i = 0, n = data.length; i < n; i += step) {
      const chunk = data.slice(i, i + step);
      const unpacked = struct.unpack(format, chunk);
      result.push(unpacked);
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
