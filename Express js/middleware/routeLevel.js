const express = require ("express");
const app = express();

const filter  = (req,res,next)=>{
    
}

app.use(filter)


app.get("/",(req,res)=>{
    res.send("<h1>this is home page </h1>")
})

app.get('/user',(req,res)=>{
    res.send("<h1>this is user page </h1>")
})

app.listen(7000,()=>{
    console.log("server is started ");
})