import { readdirSync } from 'fs';
import { Config } from '../config';

async function getTestCases<T>(folder: string): Promise<
  {
    path: string;
    content: T;
  }[]
> {
  const projectPath = process.cwd();

  const paths = readdirSync(folder);

  const modulePaths = paths.map(
    casePath => `${projectPath}/${folder}/${casePath.replace('.ts', '')}`
  );

  const cases = await Promise.all(
    modulePaths.map(async path => {
      return {
        path,
        content: (await import(path)) as T
      };
    })
  );

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
