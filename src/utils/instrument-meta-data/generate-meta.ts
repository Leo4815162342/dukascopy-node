/* eslint-disable no-console */
import fs from 'fs';
import { promisify } from 'util';
import { ActualStartDates, MetaDataResponse } from './generate-data.types';
import { generateIdName } from './generate-id-name';
const saveFile = promisify(fs.writeFile);

export interface InstrumentMetaData {
  name: string;
  description: string;
  decimalFactor: number;
  startHourForTicks: string;
  startDayForMinuteCandles: string;
  startMonthForHourlyCandles: string;
  startYearForDailyCandles: string;
}

export function generateMeta(
  instruments: MetaDataResponse['instruments'],
  actualStartDates: ActualStartDates,
  path: string
): Promise<void> {
  const data = Object.keys(instruments).reduce<Record<string, InstrumentMetaData>>((all, inst) => {
    const {
      name,
      description,
      pipValue,
      historical_filename,
      history_start_tick,
      history_start_60sec,
      history_start_60min,
      history_start_day
    } = instruments[inst];

    const cleanName = generateIdName(historical_filename, inst);

    const cleanNameUC = cleanName.toUpperCase();

    const hasActualStartDates = Boolean(cleanNameUC && actualStartDates[cleanNameUC]);

    all[cleanName] = {
      name,
      description,
      decimalFactor: 10 / pipValue,
      startHourForTicks: hasActualStartDates
        ? new Date(actualStartDates[cleanNameUC]['0'] * 1000).toISOString()
        : new Date(Number(history_start_tick)).toISOString(),
      startDayForMinuteCandles: hasActualStartDates
        ? new Date(actualStartDates[cleanNameUC]['1'] * 1000).toISOString()
        : new Date(Number(history_start_60sec)).toISOString(),
      startMonthForHourlyCandles: hasActualStartDates
        ? new Date(actualStartDates[cleanNameUC]['60'] * 1000).toISOString()
        : new Date(Number(history_start_60min)).toISOString(),
      startYearForDailyCandles: hasActualStartDates
        ? new Date(actualStartDates[cleanNameUC]['1440'] * 1000).toISOString()
        : new Date(Number(history_start_day)).toISOString()
    };

    return all;
  }, {});

  return saveFile(path, JSON.stringify(data, null, 2)).then(() => {
    console.log('Meta data generated!', path);
  });
}
