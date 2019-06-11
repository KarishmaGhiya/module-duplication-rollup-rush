/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
/*
const buff = require('buffer/').Buffer 
const bufferConversionResult = buff.from('hello world', 'ascii');
console.log("lib-bee printing base64 for buffer - 'hello world', 'ascii'");
console.log(bufferConversionResult.toString('base64'));
// should print: aGVsbG8gd29ybGQ=
*/
import { addTwoIntegers } from "lib-sea/index";

export function SquareofSum(num1: number, num2: number):number{
    const sum = addTwoIntegers(num1,num2);
    return  sum*sum ;
}