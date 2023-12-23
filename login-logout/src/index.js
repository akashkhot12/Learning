const express = require('express');
const app = express();
const quates = require('./dummy.json');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');


app.use('/users',userRouter);
app.use('/notes',noteRouter)

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/q',(req,res)=>{
    res.status(200).json(quates)
})

app.listen(5000,()=>{
    console.log("server start on 5000 port");
})