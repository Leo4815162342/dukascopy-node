import { VolumeUnit, VolumeUnitType } from '../config/volume-unit';

export function formatVolume(volume: number, volumeUnit: VolumeUnitType) {
  if (volumeUnit === VolumeUnit.millions) {
    return volume;
  } else if (volumeUnit === VolumeUnit.thousands) {
    return volume * 1000;
  } else {
    return volume * 1000000;
  }
}
