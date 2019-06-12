/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
/*
const buff = require('buffer/').Buffer 
const bufferConversionResult = buff.from('hello world', 'ascii');
console.log("lib-aaa printing hex for buffer - 'hello world', 'ascii'");
console.log(bufferConversionResult.toString('hex'));
// should print: 68656c6c6f20776f726c64
*/
import { addTwoIntegers } from "lib-sea/index";
import { SquareofSum } from "lib-bee/index";

export function MySum(num1: number, num2: number):number{
    let sum = addTwoIntegers(num1,num2);
    return sum;
}

export function MyProductOfSum(num1: number, num2: number):number{
    let product = SquareofSum(num1,num2);
    return product;
}