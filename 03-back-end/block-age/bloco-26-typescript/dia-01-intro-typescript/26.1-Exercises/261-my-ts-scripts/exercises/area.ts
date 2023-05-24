const areaUnits: string[] = ["km2", "hm2", "dam2", "m2", "dm2", "cm2", "mm2"];

function convertArea(value: number, base: string, convertion: string): number {
  const indexBase: number = areaUnits.indexOf(base);
  const indexConvertion: number = areaUnits.indexOf(convertion);
  const exponent = indexConvertion - indexBase;

  return value * Math.pow(100, exponent);
};

module.exports = { units: areaUnits, func: convertArea };