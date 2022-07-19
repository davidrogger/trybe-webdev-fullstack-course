"use strict";
const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convertLength(value, base, convertion) {
    const indexBase = lengthUnits.indexOf(base);
    const indexConvertion = lengthUnits.indexOf(convertion);
    const exponent = (indexConvertion - indexBase);
    return value * Math.pow(10, exponent);
}
module.exports = { func: convertLength, units: lengthUnits };
