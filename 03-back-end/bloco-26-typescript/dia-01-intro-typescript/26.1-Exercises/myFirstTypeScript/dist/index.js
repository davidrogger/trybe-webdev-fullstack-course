"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Mary'));
console.log(Exercise.personAge('Mary', 40));
console.log(`The array sum is igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triangle with base 10cm and heighs of 25cm: ${Exercise.triangleArea(10, 25)}cm²`);
console.log(`Triangle with base 5cm and heighs of 30cm: ${Exercise.triangleArea(5, 30)}cm²`);
console.log(`Triangle with base 100cm and heighs of 2000cm: ${Exercise.triangleArea(100, 200)}cm²`);
console.log(`Square with sides 10cm: ${Exercise.squareArea(10)}cm²`);
console.log(`Square with sides 5cm: ${Exercise.squareArea(5)}cm²`);
console.log(`Square with sides 100cm: ${Exercise.squareArea(100)}cm²`);
console.log(`Rectangle with base 10cm and heigh of 25cm: ${Exercise.rectangleArea(10, 25)}cm²`);
console.log(`Rectangle with base 5cm and heigh of 30cm: ${Exercise.rectangleArea(5, 30)}cm²`);
console.log(`Rectangle with base 100cm and heigh of 200cm: ${Exercise.rectangleArea(100, 200)}cm²`);
console.log(`Diamond with big side 32cm and 18 smallside has ${Exercise.diamondArea(32, 18)}cm²`);
console.log(`Diamond with big side 200cm and 50 smallside has ${Exercise.diamondArea(200, 50)}cm²`);
console.log(`Diamond with big side 75cm and 25 smallside has ${Exercise.diamondArea(75, 25)}cm²`);
console.log(`Trapeze area with an larger base 100cm and minor base 70cm and a heigh of 50cm: ${Exercise.trapezeArea(100, 70, 50)}cm²`);
console.log(`Trapeze area with an larger base 75cm and minor base 50cm and a heigh of 35cm: ${Exercise.trapezeArea(75, 50, 35)}cm²`);
console.log(`Trapeze area with an larger base 150cm and minor base 120cm and a heigh of 80cm: ${Exercise.trapezeArea(150, 120, 80)}cm²`);
console.log(`Circle area with raio of 25cm: ${Exercise.circleArea(25)}cm²`);
console.log(`Circle area with raio of 100cm: ${Exercise.circleArea(100)}cm²`);
console.log(`Circle area with raio of 12,5cm: ${Exercise.circleArea(12.5)}cm²`);
