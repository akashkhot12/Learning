const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../model/patient');
const fs = require('fs')
const app = express();


// middleware

app.use(express.urlencoded({extended:true}))


// connect database

mongoose.connect("mongodb://localhost:27017/Hospital").then(()=>{
    console.log("database connected");
}).catch((error)=>{
    console.log(error);
    console.log("database can't be connect");
})


// getting html form detail to send database 

app.post('/',async(req,res)=>{
    const patientData = new Patient(req.body);
    await patientData.save();
    let a = fs.readFileSync('submit.html')
    res.send(a.toString());
})

app.get('/showData',async(req,res)=>{
    let showData = await Patient.find()
    res.send(showData)
})


// listening routes

app.get('/',(req,res)=>{
    let a = fs.readFileSync('index.html')
    res.send(a.toString());
})

app.listen(5000,()=>{
    console.log("app run on port number 5000");
})