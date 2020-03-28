import { Config } from 'dukascopy-core';
import { readdirSync } from 'fs';

function getTestCases<T>(folder: string) {
  const projectPath = process.cwd();

  const paths = readdirSync(folder);

  const modulePaths = paths.map(
    casePath => `${projectPath}/${folder}/${casePath.replace('.ts', '')}`
  );

  const cases = modulePaths.map(path => ({ path, content: <T>require(path) }));

  return cases;
}

function getConfigDescription(config: Config): string {
  const {
    instrument,
    dates: { from, to },
    timeframe,
    volumes,
    utcOffset,
    ignoreFlats
  } = config;

  return `${instrument}, ${timeframe}, ${from}, ${to}, offset: ${utcOffset}, ignoreFlats: ${!!ignoreFlats}`;
}

export { getTestCases, getConfigDescription };
