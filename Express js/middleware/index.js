const express =require("express");
const app = express();

const reqFilter = (req,res,next)=>{
    console.log("this is next funtioning");
    next();
}

app.use(reqFilter)

app.get('',(req,res)=>{
    res.send("this is home page")
})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.get('/male',(req,res)=>{
    res.send("this is male page")
})

app.listen(5000)
