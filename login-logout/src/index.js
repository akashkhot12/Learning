const express = require('express');
const app = express();
const quates = require('./dummy.json')

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/q',(req,res)=>{
    res.status(200).json(quates)
})

app.listen(5000,()=>{
    console.log("server start on 5000 port");
})