/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { InstrumentsResponse } from './generate-data.types';
import { generateIdName } from './generate-id-name';

const saveFile = promisify(fs.writeFile);

export interface GroupData {
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

/** Puts instruments that are only in `previous` (no longer listed by the API) back into their group. */
export function mergeInstrumentGroupData(previous: GroupData[], current: GroupData[]): GroupData[] {
  const listed = new Set(current.flatMap(group => group.instruments));
  const groups = new Map(current.map(group => [group.id, group.instruments]));

  for (const group of previous) {
    const unlisted = group.instruments.filter(id => !listed.has(id));

    if (unlisted.length > 0) {
      groups.set(group.id, [...(groups.get(group.id) || []), ...unlisted].sort());
    }
  }

  return Array.from(groups, ([id, instruments]) => ({ id, instruments }));
}

export async function generateInstrumentGroupData(
  metadata: InstrumentsResponse,
  path: string,
  previous: GroupData[] = []
): Promise<void> {
  const data = mergeInstrumentGroupData(previous, buildInstrumentGroupData(metadata));
  await saveFile(path, JSON.stringify(data, null, 2));
  console.log('Instrument groups generated!', path);
}
