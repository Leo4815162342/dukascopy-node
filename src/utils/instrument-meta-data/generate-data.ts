/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import { wait } from '../general';
import { DATA_API_REFERER, DATA_API_ROOT, DATA_API_USER_AGENT } from '../../config/data-api';
import { GroupData, generateInstrumentGroupData } from './generate-group-data';
import { generateIdName } from './generate-id-name';
import { InstrumentMetaDataMap, generateMeta } from './generate-meta';
import { generateInstrumentEnum } from './generate-instrument-enum';
import { generateInstrumentMarkdown } from './generate-instrument-md';
import { ApiInstrumentDetail, InstrumentsResponse } from './generate-data.types';

const saveFile = promisify(fs.writeFile);
const OUTPUT_FOLDER = path.resolve(__dirname, 'generated');
const DETAIL_REQUEST_PAUSE_MS = 100;
const RETRY_DELAYS_MS = [1000, 2000, 4000];
// Without the export widget's headers the API answers with an HTTP 202 challenge page.
const REQUEST_HEADERS = {
  accept: 'application/json',
  referer: DATA_API_REFERER,
  'user-agent': DATA_API_USER_AGENT
};

class ApiRequestError extends Error {
  retryable: boolean;

  constructor(message: string, retryable: boolean) {
    super(message);
    this.retryable = retryable;
  }
}

async function fetchJsonWithRetry<T>(url: string): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      const response = await fetch(url, { headers: REQUEST_HEADERS });

      if (!response.ok) {
        const isTransient =
          response.status === 408 || response.status === 429 || response.status >= 500;
        throw new ApiRequestError(
          `Request failed with status ${response.status}: ${url}`,
          isTransient
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError = error;

      if (error instanceof ApiRequestError && !error.retryable) {
        throw error;
      }

      if (attempt < RETRY_DELAYS_MS.length) {
        await wait(RETRY_DELAYS_MS[attempt]);
      }
    }
  }

  throw lastError;
}

async function getInstrumentDetails(metadata: InstrumentsResponse): Promise<ApiInstrumentDetail[]> {
  const details: ApiInstrumentDetail[] = [];

  for (let index = 0; index < metadata.instruments.length; index++) {
    const instrument = metadata.instruments[index];
    console.log(`[${index + 1}/${metadata.instruments.length}] ${instrument.code}`);
    details.push(
      await fetchJsonWithRetry<ApiInstrumentDetail>(
        `${DATA_API_ROOT}/instruments/${encodeURIComponent(instrument.code)}`
      )
    );

    if (index < metadata.instruments.length - 1) {
      await wait(DETAIL_REQUEST_PAUSE_MS);
    }
  }

  return details;
}

async function readPreviousOutput<T>(name: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await fs.promises.readFile(path.resolve(OUTPUT_FOLDER, name), 'utf8')) as T;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return fallback;
    }

    throw error;
  }
}

async function run(): Promise<void> {
  const metadata = await fetchJsonWithRetry<InstrumentsResponse>(`${DATA_API_ROOT}/instruments`);
  const instrumentDetails = await getInstrumentDetails(metadata);
  // The API's list changes between scans (instruments have dropped out and come back), so
  // instruments it no longer lists keep their previous metadata and group instead of being removed.
  const previousMeta = await readPreviousOutput<InstrumentMetaDataMap>(
    'instrument-meta-data.json',
    {}
  );
  const previousGroups = await readPreviousOutput<GroupData[]>('instrument-groups.json', []);
  const listed = new Set(metadata.instruments.map(item => generateIdName(item.code, item.code)));
  const unlisted = Object.keys(previousMeta).filter(id => !listed.has(id));

  if (unlisted.length > 0) {
    console.log(
      `Keeping ${unlisted.length} instruments the API no longer lists: ${unlisted.join(', ')}`
    );
  }

  const artifactNames = [
    `raw-meta-data-${new Date().toISOString().slice(0, 10)}.json`,
    'instrument-meta-data.json',
    'instrument-enum.ts',
    'instrument-groups.json',
    'instruments.md'
  ] as const;
  const generatedParentFolder = path.dirname(OUTPUT_FOLDER);
  const generationId = `${process.pid}-${Date.now()}`;
  const stagingFolder = path.resolve(generatedParentFolder, `.generated-staging-${generationId}`);
  const backupFolder = path.resolve(generatedParentFolder, `.generated-backup-${generationId}`);
  const [rawName, metadataName, enumName, groupsName, documentationName] = artifactNames;
  const rawMetadataPath = path.resolve(stagingFolder, rawName);
  const metadataPath = path.resolve(stagingFolder, metadataName);
  const enumPath = path.resolve(stagingFolder, enumName);
  const groupsPath = path.resolve(stagingFolder, groupsName);
  const documentationPath = path.resolve(stagingFolder, documentationName);

  await fs.promises.mkdir(stagingFolder, { recursive: true });

  try {
    await saveFile(rawMetadataPath, JSON.stringify(metadata, null, 2));
    await generateMeta(instrumentDetails, metadataPath, previousMeta);
    await generateInstrumentEnum(metadataPath, enumPath);
    await generateInstrumentGroupData(metadata, groupsPath, previousGroups);
    await generateInstrumentMarkdown({
      groupsPath,
      metadataPath,
      outputPath: documentationPath
    });

    await Promise.all(
      artifactNames.map(name => fs.promises.access(path.resolve(stagingFolder, name)))
    );

    await fs.promises.rename(OUTPUT_FOLDER, backupFolder);

    try {
      await fs.promises.rename(stagingFolder, OUTPUT_FOLDER);
    } catch (error) {
      await fs.promises.rename(backupFolder, OUTPUT_FOLDER);
      throw error;
    }

    await fs.promises.rm(backupFolder, { recursive: true, force: true });
    console.log('Done');
  } finally {
    await fs.promises.rm(stagingFolder, { recursive: true, force: true });
  }
}

if (require.main === module) {
  run().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}

export { fetchJsonWithRetry, getInstrumentDetails, run };
