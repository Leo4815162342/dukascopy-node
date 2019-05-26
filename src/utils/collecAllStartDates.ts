import fs from 'fs';
import { promisify } from 'util';

import { symbols } from '../config/symbols';
import { getMinStartDate } from './getMinStartDate';

const writeFile = promisify(fs.readFile);

(async () => {
  try {
    const data: string[][] = [];

    for (const symbol of Object.keys(symbols)) {
      const minstarDate = await getMinStartDate(symbol);
      data.push([symbol, minstarDate]);
      await wait(5000);
    }

    await writeFile('symbolsWithStarDates.json', JSON.stringify(data, null, 2));
    console.log('DONE');
  } catch (error) {
    console.log(error);
  }
})();

function wait(ms: number) {
  return new Promise(res => {
    console.log('Start waiting');
    setTimeout(function() {
      console.log('Finish waiting');
      res();
    }, ms);
  });
}
