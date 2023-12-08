const express = require ("express");
const app = express();

const filter  = (req,res,next)=>{
    if (!req.query.age) {
        res.send("<h1>please provide your age !</h1>")
    }
    else if (req.query.age<18) {
        res.send("<h1>you are under age !</h1>")
    }
    else{
        next()
    }
}




app.get("/",(req,res)=>{
    res.send("<h1>this is home page </h1>")
})

app.get('/user',filter,(req,res)=>{
    res.send("<h1>this is user page </h1>")
})

app.listen(7000,()=>{
    console.log("server is started ");
})