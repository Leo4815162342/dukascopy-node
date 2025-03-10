/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import fetch from 'node-fetch';
import { generateInstrumentGroupData } from './generate-group-data';
import { generateMeta } from './generate-meta';
import { generateInstrumentEnum } from './generate-instrument-enum';
import { ActualStartDates, MetaDataResponse } from './generate-data.types';
const saveFile = promisify(fs.writeFile);

const OUTPUT_FOLDER = path.resolve(__dirname, 'generated');

async function run() {
  const [actualStartDates, rawMetaData] = await Promise.all([
    getActualStartDates(),
    getRawMetaData()
  ]);
  await saveFile(
    path.resolve(OUTPUT_FOLDER, `raw-meta-data-${new Date().toISOString().slice(0, 10)}.json`),
    JSON.stringify(rawMetaData, null, 2)
  );

  const metaDataFilePath = path.resolve(OUTPUT_FOLDER, 'instrument-meta-data.json');

  await generateMeta(rawMetaData.instruments, actualStartDates, metaDataFilePath);

  await generateInstrumentEnum(metaDataFilePath, path.resolve(OUTPUT_FOLDER, 'instrument-enum.ts'));

  await generateInstrumentGroupData(
    rawMetaData,
    path.resolve(OUTPUT_FOLDER, 'instrument-groups.json')
  );

  console.log('Done');
}

run();

async function getActualStartDates(): Promise<ActualStartDates> {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rawResponse = await fetch(process.env.START_DATES_URL!);

  const startDates = (await rawResponse.json()) as ActualStartDates;
  return startDates;
}

async function getRawMetaData(): Promise<MetaDataResponse> {
  const rawResponse = await fetch(
    'https://freeserv.dukascopy.com/2.0/index.php?path=common%2Finstruments',
    {
      headers: {
        referer: 'https://freeserv.dukascopy.com/'
      }
    }
  );

  const text = await rawResponse.text();

  const objStr = text.slice(0, -1).replace('jsonp(', '');

  const metaDataResponse = JSON.parse(objStr) as MetaDataResponse;

  return metaDataResponse;
}
