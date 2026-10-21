import { Bar } from 'cli-progress';

import chalk from 'chalk';

export const progressBar = new Bar({
  format: '|' + chalk.green('{bar}') + '| {percentage}%',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
  fps: 24,
  barsize: 45
});
