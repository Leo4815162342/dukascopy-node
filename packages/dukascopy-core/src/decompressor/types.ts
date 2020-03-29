import { TimeframeType } from '../config/timeframes';

export type StructFormat = '>3i2f' | '>5i1f';

export interface DecompressInput {
  buffer: Buffer;
  timeframe: TimeframeType;
}
