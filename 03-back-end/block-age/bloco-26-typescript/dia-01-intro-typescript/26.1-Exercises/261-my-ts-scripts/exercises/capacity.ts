const liquidUnits: string[] = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertCapacity(value: number, base: string, convertion: string): number {
  const indexBase: number = liquidUnits.indexOf(base);
  const indexConvertion: number = liquidUnits.indexOf(convertion);
  const exponent: number = indexConvertion - indexBase;

  return value * Math.pow(10, exponent);
}

module.exports = { units: liquidUnits, func: convertCapacity };