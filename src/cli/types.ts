import { ConfigBase } from '../config';

export interface CliConfig extends Required<ConfigBase> {
  dir: string;
  silent: boolean;
}
