const weightUnits: string[] = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, base: string, convertion: string): number {
  const indexBase = weightUnits.indexOf(base);
  const indexConvertion = weightUnits.indexOf(convertion);
  const exponent = (indexConvertion - indexBase);

  return value * Math.pow(10, exponent);
}

module.exports = { func: convertMass, units: weightUnits };