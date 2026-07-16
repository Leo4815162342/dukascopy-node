/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { getFormattedDate } from '../date';
import { InstrumentMetaData, InstrumentMetaDataMap } from './generate-meta';

const saveFile = promisify(fs.writeFile);
const generatedFolder = path.resolve(__dirname, 'generated');
const filePath = path.resolve(generatedFolder, 'instruments.md');

interface GenerateInstrumentMarkdownInput {
  groupsPath?: string;
  metadataPath?: string;
  outputPath?: string;
}

const titleMap: Record<string, { emoji: string; title: string }> = {
  bnd_cfd: { emoji: '📊', title: 'Bonds' },
  vccy: { emoji: '₿', title: 'Crypto assets' },
  cmd_agricultural: { emoji: '☕', title: 'Agricultural commodities' },
  cmd_energy: { emoji: '⚡', title: 'Energy commodities' },
  cmd_metals: { emoji: '⚙️', title: 'Metals commodities' },
  etf_cfd: { emoji: '📈', title: 'ETFs' },
  etf_cfd_us: { emoji: '🇺🇸📈', title: 'United States ETFs' },
  etf_cfd_de: { emoji: '🇩🇪📈', title: 'Germany ETFs' },
  etf_cfd_fr: { emoji: '🇫🇷📈', title: 'France ETFs' },
  etf_cfd_hk: { emoji: '🇭🇰📈', title: 'Hong Kong ETFs' },
  fx_crosses: { emoji: '💱', title: 'Forex currencies' },
  fx_majors: { emoji: '💶', title: 'Forex major currencies' },
  fx_metals: { emoji: '🥇', title: 'Forex metals' },
  idx_america: { emoji: '🌎', title: 'America' },
  idx_asia: { emoji: '🌏', title: 'Asia' },
  idx_europe: { emoji: '🇪🇺', title: 'Europe' },
  idx_africa: { emoji: '🌍', title: 'Africa' },
  austria: { emoji: '🇦🇹', title: 'Austria' },
  belgium: { emoji: '🇧🇪', title: 'Belgium' },
  denmark: { emoji: '🇩🇰', title: 'Denmark' },
  finland: { emoji: '🇫🇮', title: 'Finland' },
  france: { emoji: '🇫🇷', title: 'France' },
  germany: { emoji: '🇩🇪', title: 'Germany' },
  italy: { emoji: '🇮🇹', title: 'Italy' },
  ireland: { emoji: '🇮🇪', title: 'Ireland' },
  mexico: { emoji: '🇲🇽', title: 'Mexico' },
  netherlands: { emoji: '🇳🇱', title: 'Netherlands' },
  norway: { emoji: '🇳🇴', title: 'Norway' },
  portugal: { emoji: '🇵🇹', title: 'Portugal' },
  spain: { emoji: '🇪🇸', title: 'Spain' },
  sweden: { emoji: '🇸🇪', title: 'Sweden' },
  switzerland: { emoji: '🇨🇭', title: 'Switzerland' },
  japan: { emoji: '🇯🇵', title: 'Japan' },
  'hong-kong': { emoji: '🇭🇰', title: 'Hong Kong' },
  uk: { emoji: '🇬🇧', title: 'United Kingdom' },
  us: { emoji: '🇺🇸', title: 'United States' }
};

interface InstrumentGroup {
  id: string;
  instruments: string[];
}

function getTitle(id: string): { emoji: string; title: string } {
  return (
    titleMap[id] || {
      emoji: '',
      title: id
        .split('_')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')
    }
  );
}

async function run({
  groupsPath = path.resolve(generatedFolder, 'instrument-groups.json'),
  metadataPath = path.resolve(generatedFolder, 'instrument-meta-data.json'),
  outputPath = filePath
}: GenerateInstrumentMarkdownInput = {}): Promise<void> {
  const instrumentGroups = JSON.parse(fs.readFileSync(groupsPath, 'utf8')) as InstrumentGroup[];
  const instrumentMetaData = JSON.parse(
    fs.readFileSync(metadataPath, 'utf8')
  ) as InstrumentMetaDataMap;
  const contentListHeader = '## Instruments\n';
  const contentList = instrumentGroups
    .map(({ id, instruments }) => {
      const { title, emoji } = getTitle(id);
      return `* [${title} ${emoji} (${instruments.length})](#${id})`;
    })
    .join('\n');
  const contentBody = [contentListHeader, contentList, '<hr>'].join('\n');
  const header = '|Instrument|id|Earliest data (UTC)|';
  const divider = '|-|-|-|';
  const instrumentTable = instrumentGroups
    .map(({ id, instruments }) => {
      const { title, emoji } = getTitle(id);
      const groupTitle = `<h3 id="${id}">${title} ${emoji}</h3>\n`;
      const listBody = instruments
        .map(instrumentId => {
          const metadata = instrumentMetaData[instrumentId] as InstrumentMetaData;
          const dates = [
            metadata.startHourForTicks,
            metadata.startDayForMinuteCandles,
            metadata.startMonthForHourlyCandles,
            metadata.startYearForDailyCandles
          ].map(item => new Date(item));
          const minDate = Math.min(...dates.map(date => date.getTime()));
          return `|[${
            metadata.description
          }](https://www.dukascopy-node.app/instrument/${instrumentId})|\`${instrumentId}\`|${getFormattedDate(
            minDate
          )}|`;
        })
        .join('\n');

      return [groupTitle, header, divider, listBody].join('\n');
    })
    .join('\n');

  await saveFile(outputPath, [contentBody, instrumentTable].join('\n'));
  console.log('Instrument documentation generated!', outputPath);
}

if (require.main === module) {
  run().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}

export { run as generateInstrumentMarkdown };
