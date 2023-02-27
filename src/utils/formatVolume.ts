import { VolumeUnitType } from '../config/volume-unit';

export function formatVolume(volume: number, volumeUnit: VolumeUnitType) {
  if (volumeUnit === 'million') {
    return volume;
  } else if (volumeUnit === 'thousand') {
    return volume * 1000;
  } else {
    return volume * 1000000;
  }
}
