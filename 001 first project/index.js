const http = require('http');

http.createServer((req,res)=>{
    console.log(req)
    res.end("hello gaurav")
}).listen(4200);
console.log('node')