"use strict";
const liquidUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, base, convertion) {
    const indexBase = liquidUnits.indexOf(base);
    const indexConvertion = liquidUnits.indexOf(convertion);
    const exponent = indexConvertion - indexBase;
    return value * Math.pow(10, exponent);
}
module.exports = { units: liquidUnits, func: convertCapacity };
