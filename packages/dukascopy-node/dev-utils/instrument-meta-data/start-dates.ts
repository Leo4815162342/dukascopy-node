/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { wait } from '../../src/utils/general';
import { Instrument } from './generated/instrument-enum';
import { getStartDates, StartDates } from './min-start-date';

const saveFile = promisify(fs.writeFile);
const readDir = promisify(fs.readdir);

const META_DATA_PATH = path.resolve(__dirname, 'generated', 'instrument-meta-data.json');
const START_DATES_ARTIFACT_DIR = path.resolve(__dirname, 'start-dates');
const FETCH_PAUSE = 1000;

enum MODE {
  /**
   * Fetches start dates for all instruments and stores them into artifact directory
   */
  FETCH = 'FETCH',
  /**
   * Enriches the initial meta date object with start dates from artifact directory
   */
  ENRICH = 'ENRICH'
}

(async () => {
  try {
    const mode = MODE[process.env?.mode?.toUpperCase() as MODE];

    if (!mode) {
      console.log('"mode" not provided!');
      return;
    }

    const files = await readDir(START_DATES_ARTIFACT_DIR);
    let fileCount = files.length;
    const allFilesDownloaded = Object.keys(Instrument).every(instrument => {
      const flag = files.includes(`${instrument}.json`);

      if (!flag) {
        console.log(instrument);
      }

      return flag;
    });

    if (mode === MODE.FETCH) {
      if (!allFilesDownloaded) {
        for (const instrument of Object.keys(Instrument)) {
          const fileName = `${instrument}.json`;
          if (!files.includes(fileName)) {
            console.log(instrument, `${++fileCount}/${Object.keys(Instrument).length}`);

            const startDates = await getStartDates(instrument);
            const filePath = path.resolve(START_DATES_ARTIFACT_DIR, fileName);

            await saveFile(filePath, JSON.stringify(startDates, null, 2));
            console.log('saved', filePath);
            await wait(FETCH_PAUSE);
          }
        }
      }

      console.log('All start dates artifacts have been downloaded!');
      console.log(START_DATES_ARTIFACT_DIR);
      console.log('Proceed with "enrich" mode');
    }

    if (mode === MODE.ENRICH) {
      if (!allFilesDownloaded) {
        console.log('Not all start dates have been downloaded');
        console.log('Start with "fetch" mode first');
        return;
      }

      const metaData = require(META_DATA_PATH);

      files.forEach(file => {
        const instrument = file.replace('.json', '');
        const startDates: StartDates = require(path.resolve(START_DATES_ARTIFACT_DIR, file));

        metaData[instrument] = { ...metaData[instrument], ...startDates };
      });

      await saveFile(META_DATA_PATH, JSON.stringify(metaData, null, 2));

      console.log('Meta data enriched with start dates!');
      console.log(META_DATA_PATH);
    }
  } catch (error) {
    console.error(error);
  }
})();
