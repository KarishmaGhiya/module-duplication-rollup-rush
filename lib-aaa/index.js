var Buffer = require('buffer/').Buffer 
const buf = Buffer.from('hello world', 'ascii');
console.log("lib-aaa printing hex for buffer - 'hello world', 'ascii'");
console.log(buf.toString('hex'));
// should print: 68656c6c6f20776f726c64