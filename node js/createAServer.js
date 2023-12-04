const http = require("http");

http.createServer((req,res)=>{
    res.write("<h1>hello, This is akash</h1>")
    res.end()
}).listen(5000,()=>{
    console.log("server is started");
})