const http = require('http');
const fs = require('fs');
let text= fs.readFileSync('js_1.html','utf-8')

const server = http.createServer((req,res)=>{
    //Method 1
    // req.statusCode=200;
    // res.setHeader('Content-Type', 'text/html');
    //Method 2
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(text);

});
//Method 2
server.listen(80,'127.0.0.1',()=>{
    console.log(`Listening at port 80`)
});
//Method 1
// server.listen(port,host,()=>{
//     console.log(`Server is at http://${host}:${port}/`)
// });