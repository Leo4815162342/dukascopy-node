import { readdirSync } from 'fs';
import { Config } from '../src/config';

function getTestCases<T>(folder: string) {
  const projectPath = process.cwd();

  const paths = readdirSync(folder);

  const modulePaths = paths.map(
    casePath => `${projectPath}/${folder}/${casePath.replace('.ts', '')}`
  );

  const cases = modulePaths.map(path => ({ path, content: require(path) as T }));

  return cases;
}

function getConfigDescription(config: Config): string {
  const {
    instrument,
    dates: { from, to },
    timeframe,
    utcOffset,
    ignoreFlats
  } = config;

  return `${instrument}, ${timeframe}, ${from}, ${to}, offset: ${utcOffset}, ignoreFlats: ${!!ignoreFlats}`;
}

export { getTestCases, getConfigDescription };
