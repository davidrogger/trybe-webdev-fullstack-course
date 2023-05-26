"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapezeArea = exports.diamondArea = exports.rectangleArea = exports.squareArea = exports.triangleArea = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Hello ${name}`;
}
exports.greeter = greeter;
;
function personAge(name, age) {
    return `${name} is ${age} old! `;
}
exports.personAge = personAge;
;
function add(x, y) {
    return x + y;
}
exports.add = add;
;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangleArea(base, heigh) {
    return (base * heigh) / 2;
}
exports.triangleArea = triangleArea;
;
function squareArea(side) {
    return side ** 2;
}
exports.squareArea = squareArea;
;
function rectangleArea(base, heigh) {
    return base * heigh;
}
exports.rectangleArea = rectangleArea;
function diamondArea(bigSide, smallSide) {
    return (bigSide * smallSide) / 2;
}
exports.diamondArea = diamondArea;
;
function trapezeArea(largeBase, minorBase, heigh) {
    return ((largeBase + minorBase) * heigh) / 2;
}
exports.trapezeArea = trapezeArea;
function circleArea(raio) {
    return 3.14 * (raio ** 2);
}
exports.circleArea = circleArea;
;
