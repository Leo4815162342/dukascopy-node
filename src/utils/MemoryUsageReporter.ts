/* eslint-disable no-console */
import { createWriteStream, WriteStream } from 'fs';

export class MemoryUsageReporter {
  interval: NodeJS.Timeout | null;
  intervalStep: number;
  writeStream: WriteStream;

  constructor({
    csvReportPath,
    intervalStep = 1000
  }: {
    csvReportPath?: string;
    intervalStep?: number;
  }) {
    this.interval = null;
    this.intervalStep = intervalStep;
    this.writeStream = createWriteStream(csvReportPath || './memory-usage.csv', {
      flags: 'a+'
    });

    process
      .on('SIGINT', () => this.stop('SIGINT'))
      .on('SIGTERM', () => this.stop('SIGTERM'))
      .on('unhandledRejection', () => this.stop('unhandledRejection'));
  }

  start() {
    console.log('Starting memory usage tracker');
    this.interval = setInterval(() => {
      const { rss, heapTotal, heapUsed, external, arrayBuffers } = process.memoryUsage();

      this.writeStream.write(
        [rss, heapTotal, heapUsed, external, arrayBuffers]
          .map(num => (num / 1024 / 1024).toFixed(2))
          .join(',') + '\n'
      );
    }, this.intervalStep);
  }

  stop(reason: string) {
    if (!this.interval) {
      console.log('Tried to stop memory usage tracker, but it was already stopped');
      return;
    }
    console.log('Stopping memory usage tracker', reason);
    clearInterval(this.interval);
    this.interval = null;
    process.exit(0);
  }
}
