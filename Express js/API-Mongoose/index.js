const express = require('express');
require('./config');
const product = require('./product');

const app = express();

app.post('/create',(req,res)=>{
    res.send('hello world')
})

app.listen(5000,()=>{
    console.log("server is running");
})