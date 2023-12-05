const express= require("express");
const app = express();

app.get('',(req,res)=>{
    res.send("this is home page")
})

app.get('/name',(req,res)=>{
    res.send(`this is name page 
            <a href ="/">go to home page</a>`)
})

app.get('/details',(req,res)=>{
    res.send("this is details page")
})

app.get('/input',(req,res)=>{
    res.send(`"
        <input type="text" value="${req.query.name}">
        <button>click me</button>
    `)
})

app.listen(5000,()=>{
    console.log("server is started");
})