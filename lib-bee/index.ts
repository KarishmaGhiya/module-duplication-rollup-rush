/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
var Buffer = require('buffer/').Buffer 
const buf = Buffer.from('hello world', 'ascii');
console.log("lib-bee printing base64 for buffer - 'hello world', 'ascii'");
console.log(buf.toString('base64'));
// should print: aGVsbG8gd29ybGQ=