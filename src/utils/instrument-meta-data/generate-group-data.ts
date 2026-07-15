/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { InstrumentsResponse } from './generate-data.types';
import { generateIdName } from './generate-id-name';

const saveFile = promisify(fs.writeFile);

interface GroupData {
  id: string;
  instruments: string[];
}

export function buildInstrumentGroupData(metadata: InstrumentsResponse): GroupData[] {
  const groupCodes = new Map(
    metadata.groups.map(group => [group.id, group.code.toLowerCase().replace(/\s+/g, '-')])
  );
  const groups = new Map<string, string[]>(
    metadata.groups.map(group => [group.code.toLowerCase().replace(/\s+/g, '-'), []])
  );

  for (const instrument of metadata.instruments) {
    const groupId =
      (instrument.groupId === null ? undefined : groupCodes.get(instrument.groupId)) ||
      instrument.platformGroupId?.toLowerCase() ||
      'ungrouped';
    const instruments = groups.get(groupId) || [];
    instruments.push(generateIdName(instrument.code, instrument.code));
    groups.set(groupId, instruments);
  }

  return Array.from(groups, ([id, instruments]) => ({
    id,
    instruments: instruments.sort()
  })).filter(group => group.instruments.length > 0);
}

export async function generateInstrumentGroupData(
  metadata: InstrumentsResponse,
  path: string
): Promise<void> {
  const data = buildInstrumentGroupData(metadata);
  await saveFile(path, JSON.stringify(data, null, 2));
  console.log('Instrument groups generated!', path);
}
