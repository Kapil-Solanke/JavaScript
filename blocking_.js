// NODE JS works on non blocking i/o model

const fs = require('fs')

fs.readFile('sample.txt', 'utf8',(err,data) => {
    if(err) throw err;
    console.log(data);
})
//even if below line is written after the fxn it will be executed first
console.log('shows asynchronous behaviour');