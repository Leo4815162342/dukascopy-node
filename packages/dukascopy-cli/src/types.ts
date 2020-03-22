import { HistoryConfig } from 'dukascopy-core';

export type OutputFormat = 'csv' | 'json';

export interface CliConfig extends Required<HistoryConfig> {
  outputFormat: OutputFormat;
  dir: string;
  silent: boolean;
}
