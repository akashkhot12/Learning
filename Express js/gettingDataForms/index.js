const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const app = express();


mongoose.connect("mongodb://localhost:27017/contact").then(()=>{
    console.log("database connected");
}).catch((error)=>{
    console.log(error);
    console.log("database can't be connect");
})

app.get('/',(req,res)=>{
    res.send("hello start")
})

app.listen(5000,()=>{
    console.log("app run on port number 5000");
})