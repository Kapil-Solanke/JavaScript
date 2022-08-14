
/*
const fs= require('fs');
let filetxt=fs.readFileSync('sample.txt','utf-8');
console.log(filetxt);
filetxt=filetxt.replace('sample','newsample');
console.log(filetxt)
fs.writeFileSync('newsample.txt',filetxt);
*/
// OS Module
/*
const os= require('os');
let x=os.type();
console.log(x);

console.log(os.arch());
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.release())
*/
const http = require('http');
const hostname = '127.0.0.1';
const port = 3008;
const server=http.createServer((req, res) => {
    req.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('server ended');
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});