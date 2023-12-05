const express= require("express");
const app = express();

app.get('',(req,res)=>{
    res.send("this is home page")
})


app.listen(5000,()=>{
    console.log("server is started");
})