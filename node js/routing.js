const http = require("http");
const data = require("./data")

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
   

    // add routes
    const url = req.url;
    if (url==="/profile") {
        res.write("<h1> is akash khot !</h1>")
        res.end()
    }
    else if(url === "/details"){
        res.write(JSON.stringify(data))
    }
    else{
        res.write("<h1>hello there !</h1>");
        res.end();
    }
}).listen(5000,()=>{
    console.log("server started on 5000 port");
})