import { Bar } from 'cli-progress';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

export const progressBar = new Bar({
  format: '|' + chalk.green('{bar}') + '| {percentage}%',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
  fps: 24,
  barsize: 45
});
