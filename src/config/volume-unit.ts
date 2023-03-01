export const VolumeUnit = {
  /**
   * A single unit of a currency, commodity, or security.
   */
  units: 'units',
  /**
   * A thousand units of a currency, commodity, or security.
   */
  thousands: 'thousands',
  /**
   * A million units of a currency, commodity, or security.
   */
  millions: 'millions'
} as const;

export type VolumeUnitType = keyof typeof VolumeUnit;
