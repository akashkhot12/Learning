const express = require("express");
const app = express();

app.get('',(req,res)=>{
    console.log("user input => " ,req.query.name);
    res.send("hello this is my name "+req.query.name)
}).listen(5000,()=>{
    console.log("server is stared");
})