"use strict";
const read = require('readline-sync');
const monthss = require('./exercise02');
const month = read.question('Choice a month of the year: Ex: january ');
const hemisphere = read.question('Type the hemisphere that you want to know the season as N or S ');
function hemisphereNorth(month) {
    let season = '';
    if (month >= 9)
        season += 'autumn ';
    if (month === 12 || month <= 3)
        season += 'winter ';
    if (month >= 3 && month <= 6)
        season += 'spring ';
    if (month >= 6 && month <= 9)
        season += 'summer ';
    return season;
}
function hemisphereSouth(month) {
    let season = '';
    if (month >= 3 && month <= 6)
        season += 'autumn ';
    if (month >= 6 && month <= 9)
        season += 'winter ';
    if (month >= 9)
        season += 'spring ';
    if (month === 12 || month <= 3)
        season += 'summer ';
    return season;
}
function hemisFullName(initials) {
    const lowerCase = initials.toLowerCase();
    if (lowerCase === 's') {
        return 'South';
    }
    else {
        return 'North';
    }
}
function seasonDiscovery(hemisphere, month) {
    let season = 'unknown';
    const lowerCase = hemisphere.toLowerCase();
    if (lowerCase === 'n')
        season = hemisphereNorth(month);
    if (lowerCase === 's')
        season = hemisphereSouth(month);
    return season;
}
console.log(`In the ${monthss[month]}th month of the year the season in the hemisphere ${hemisFullName(hemisphere)} is ${seasonDiscovery(hemisphere, monthss[month.toLowerCase()])}`);
