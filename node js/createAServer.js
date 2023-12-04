const http = require(http);

http.createServer((req,res)=>{
    res.write("hello this is akash")
}).listen(5000)