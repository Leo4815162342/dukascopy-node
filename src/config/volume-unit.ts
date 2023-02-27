export const VolumeUnit = {
  /**
   * A single unit of a currency, commodity, or security.
   */
  unit: 'unit',
  /**
   * A  thousand units of a currency, commodity, or security.
   */
  thousand: 'thousand',
  /**
   * A million units of a currency, commodity, or security.
   */
  million: 'million'
} as const;

export type VolumeUnitType = keyof typeof VolumeUnit;
