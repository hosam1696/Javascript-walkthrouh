//@ts-check

let serial = require('serialport');


let myPort = new serial('hosam', {
    baudRate:9600
});


myPort.write("hello world!");




