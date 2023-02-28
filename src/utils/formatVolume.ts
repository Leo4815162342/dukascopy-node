import { VolumeUnit, VolumeUnitType } from '../config/volume-unit';

export function formatVolume(volume: number, volumeUnit: VolumeUnitType) {
  if (volumeUnit === VolumeUnit.million) {
    return volume;
  } else if (volumeUnit === VolumeUnit.thousand) {
    return volume * 1000;
  } else {
    return volume * 1000000;
  }
}
