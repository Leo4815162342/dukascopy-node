/* eslint-disable no-console */
import { createWriteStream, WriteStream } from 'fs';

export class MemoryUsageReporter {
  private interval: NodeJS.Timeout | null;
  private intervalStep: number;
  private writeStream: WriteStream;

  constructor({
    csvReportPath = `./memory-usage-${new Date().toISOString().slice(0, 19)}.csv`,
    intervalStep = 5000
  }:
    | {
        csvReportPath?: string;
        intervalStep?: number;
      }
    | undefined = {}) {
    this.interval = null;
    this.intervalStep = intervalStep;
    this.writeStream = createWriteStream(csvReportPath, {
      flags: 'a+'
    });

    process
      .on('SIGINT', () => this.stop('SIGINT'))
      .on('SIGTERM', () => this.stop('SIGTERM'))
      .on('unhandledRejection', () => this.stop('unhandledRejection'));
  }

  public start() {
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

  public stop(reason?: string) {
    if (!this.interval) {
      console.log('Tried to stop memory usage tracker, but it was already stopped');
      return;
    }
    console.log('Stopping memory usage tracker', reason);
    clearInterval(this.interval);
    this.interval = null;
    process.exit(67);
  }
}
