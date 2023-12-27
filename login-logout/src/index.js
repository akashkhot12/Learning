const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');


app.use(express.json());

app.use((req, res, next) => {
    console.log("HTTP Methods - " + req.method + " , URL - " + req.url);
    next();
});

app.use('/users', userRouter);
app.use('/notes', noteRouter)

app.get('/', (req, res) => {
    res.send("hello world")
})

mongoose.connect('').then(() => {
    app.listen(5000, () => {
        console.log("server start on 5000 port");
    })
}).catch((error) => {
    console.log(error);
})

