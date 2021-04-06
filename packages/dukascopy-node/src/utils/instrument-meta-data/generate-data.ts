/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import fetch from 'node-fetch';
import { generateInstrumentGroupData } from './generate-group-data';
import { generateMeta } from './generate-meta';
import { generateInstrumentEnum } from './generate-instrument-enum';
import { MetaDataResponse } from './generate-data.types';
const saveFile = promisify(fs.writeFile);

const OUTPUT_FOLDER = path.resolve(__dirname, 'generated');

fetch('https://freeserv.dukascopy.com/2.0/index.php?path=common%2Finstruments', {
  headers: {
    referer: 'https://freeserv.dukascopy.com/'
  }
})
  .then(data => data.text())
  .then(res => {
    const objStr = res.slice(0, -1).replace('jsonp(', '');

    const obj = JSON.parse(objStr) as MetaDataResponse;

    saveFile(
      path.resolve(OUTPUT_FOLDER, `raw-meta-data-${new Date().toISOString().slice(0, 10)}.json`),
      JSON.stringify(obj, null, 2)
    ).then(() => {
      console.log('Saved raw meta data object');
    });

    return Promise.all([
      generateMeta(obj.instruments, path.resolve(OUTPUT_FOLDER, 'instrument-meta-data.json')),
      generateInstrumentEnum(obj.instruments, path.resolve(OUTPUT_FOLDER, 'instrument-enum.ts')),
      generateInstrumentGroupData(obj, path.resolve(OUTPUT_FOLDER, 'instrument-groups.json'))
    ]);
  })
  .then(() => {
    console.log('Done');
  });
