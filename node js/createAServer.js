const http = require("http");

http.createServer((req,res)=>{
    res.write("hello this is akash")
    res.end()
}).listen(5000)