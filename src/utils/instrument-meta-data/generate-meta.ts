/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { ApiHistoryPeriod, ApiInstrumentDetail } from './generate-data.types';
import { generateIdName } from './generate-id-name';

const saveFile = promisify(fs.writeFile);

export interface InstrumentMetaData {
  name: string;
  code: string;
  description: string;
  decimalFactor: number;
  startHourForTicks: string;
  startDayForMinuteCandles: string;
  startMonthForHourlyCandles: string;
  startYearForDailyCandles: string;
}

export type InstrumentMetaDataMap = Record<string, InstrumentMetaData>;

function getHistoryStart(instrument: ApiInstrumentDetail, period: ApiHistoryPeriod): string {
  const history = instrument.histories.find(item => item.period === period);

  if (!history || !Number.isFinite(history.from)) {
    throw new Error(`Instrument ${instrument.code} is missing ${period} history metadata`);
  }

  return new Date(history.from).toISOString();
}

export function buildMeta(instruments: ApiInstrumentDetail[]): InstrumentMetaDataMap {
  const data: InstrumentMetaDataMap = {};

  for (const instrument of instruments) {
    const cleanName = generateIdName(instrument.code, instrument.code);

    if (data[cleanName]) {
      throw new Error(`Instrument key collision for ${instrument.code}: ${cleanName}`);
    }

    data[cleanName] = {
      name: instrument.name,
      code: instrument.code,
      description: instrument.description?.trim() || instrument.name,
      decimalFactor: 10 ** (instrument.priceScale || 0),
      startHourForTicks: getHistoryStart(instrument, 'TICK'),
      startDayForMinuteCandles: getHistoryStart(instrument, 'MINUTE'),
      startMonthForHourlyCandles: getHistoryStart(instrument, 'HOUR'),
      startYearForDailyCandles: getHistoryStart(instrument, 'DAY')
    };
  }

  return data;
}

export async function generateMeta(
  instruments: ApiInstrumentDetail[],
  path: string
): Promise<void> {
  const data = buildMeta(instruments);
  await saveFile(path, JSON.stringify(data, null, 2));
  console.log('Meta data generated!', path);
}
