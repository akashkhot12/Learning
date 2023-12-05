const express = require("express");
const path  = require("path")
const app = express();

const publicPath = path.join(__dirname,'public')

// app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/home',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})

app.listen(5000)