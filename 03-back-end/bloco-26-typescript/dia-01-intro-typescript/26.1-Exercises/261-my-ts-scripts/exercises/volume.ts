const volumeUnits: string[] = ["km3", "hm3", "dam3", "m3", "dm3", "cm3", "mm3"];

function convertVolume(value: number, base: string, convertion: string): number {
  const indexBase: number = volumeUnits.indexOf(base);
  const indexConvertion: number = volumeUnits.indexOf(convertion);
  const exponent: number = indexConvertion - indexBase;
  return value * Math.pow(1000, exponent);
}

module.exports = { units: volumeUnits, func: convertVolume };