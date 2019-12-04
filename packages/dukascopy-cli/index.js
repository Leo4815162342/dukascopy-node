const cliProgress = require('cli-progress');

const chalk = require('chalk');
const log = console.log;

// create a new progress bar instance and use shades_classic theme

const bar1 = new cliProgress.SingleBar({
  format: '|' + chalk.blue('{bar}') + '| {percentage}% || {value}/{total} Files',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
  fps: 24,
  barsize: 30
});

log(chalk.gray('--------------------------------------------------------'));
log(chalk.whiteBright('Downloading and extracting data:'));
log(chalk.gray('--------------------------------------------------------'));
log('Instrument: ', chalk.bold('EURUSD'));
log('Timeframe:  ', chalk.bold('m1'));
log('Period:     ', chalk.bold('2012.02-02 - 2022.02.02'));
log('Price type: ', chalk.bold('bid'));
log(chalk.gray('--------------------------------------------------------'));

let val = 0;

// start the progress bar with a total value of 200 and start value of 0
bar1.start(200, val);

// update the current value in your application..
// bar1.update(100);

let interval = setInterval(() => {
  val += 1;
  bar1.update(val);

  if (val === 200) {
    bar1.stop();
    clearInterval(interval);
    log(chalk.gray('--------------------------------------------------------'));
    log(chalk.greenBright('√ File saved:', chalk.bold('eurusd-m1-bid-2010.02.02-2002.02.02.json')));
    log();
  }
}, 20);

// stop the progress bar
