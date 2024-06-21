const bodyParser = require('body-parser');
const express = require('express');
const connectDb = require('./config');

const app = express();


// connect to mongo db 
connectDb();

// middleware
app.use(bodyParser.json())

// routes



// port
const port = process.env.PORT || 8000;

// server 
app.listen(port,()=>{
    console.log("server is connected.");
})
