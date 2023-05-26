"use strict";
const volumeUnits = ["km3", "hm3", "dam3", "m3", "dm3", "cm3", "mm3"];
function convertVolume(value, base, convertion) {
    const indexBase = volumeUnits.indexOf(base);
    const indexConvertion = volumeUnits.indexOf(convertion);
    const exponent = indexConvertion - indexBase;
    return value * Math.pow(1000, exponent);
}
module.exports = { units: volumeUnits, func: convertVolume };
