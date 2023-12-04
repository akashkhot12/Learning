const http = require("http");
http.createApi((req,res)=>{
res.writeHead(200,{'content-type':'application\json'});
res.write(JSON.stringify({"name":"akash ","lastName":"khot"}))
res.end()
}).listen(5000,()=>{
    console.log("server is started");
})