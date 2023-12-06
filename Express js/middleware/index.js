const express = require("express");
const app = express();

const filter = (req,res,next)=>{
    if (!req.query.age) {
        res.send("please provide your age")
    } else if (req.query.age<18) {
        res.send("your are under age")
    }else{
        next()
    }
}

app.use(filter);

app.get('/',(req,res)=>{
    res.send("<h1>this is home page</h1>")
})

app.get('/user',(req,res)=>{
    res.send("<h1>this is user page</h1>")
})

app.listen(5000,()=>{
    console.log("server is started");
})