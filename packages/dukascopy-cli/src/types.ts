import { HistoryConfig } from 'dukascopy-core';

export interface CliConfig extends Required<HistoryConfig> {
  dir: string;
  silent: boolean;
}
