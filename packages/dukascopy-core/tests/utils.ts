import { readdirSync } from 'fs';

export function getTestCases<T>(folder: string) {
  const projectPath = process.cwd();

  const paths = readdirSync(folder);

  const modulePaths = paths.map(
    casePath => `${projectPath}/${folder}/${casePath.replace('.ts', '')}`
  );

  const cases = modulePaths.map(path => ({ path, content: require(path) as T }));

  return cases;
}
