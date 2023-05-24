"use strict";
const weightUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, base, convertion) {
    const indexBase = weightUnits.indexOf(base);
    const indexConvertion = weightUnits.indexOf(convertion);
    const exponent = (indexConvertion - indexBase);
    return value * Math.pow(10, exponent);
}
module.exports = { func: convertMass, units: weightUnits };
