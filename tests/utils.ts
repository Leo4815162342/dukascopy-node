import { HistoryConfig } from '../src/config/types';
import { readdirSync } from 'fs';

function getTestCases<T>(folder: string): T[] {
  const projectPath = process.cwd();

  const paths = readdirSync(folder);

  const modulePaths = paths.map(
    casePath => `${projectPath}/${folder}/${casePath.replace('.ts', '')}`
  );

  const cases: T[] = modulePaths.map(require);

  return cases;
}

function getConfigDescription(config: HistoryConfig): string {
  const {
    instrument,
    dates: { from, to },
    timeframe,
    volumes,
    utcOffset
  } = config;

  return `${instrument}, ${timeframe}, ${from}, ${to}, offset: ${utcOffset}`;
}

export { getTestCases, getConfigDescription };
