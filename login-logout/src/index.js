const express = require('express');
const app = express();
const quates = require('./dummy.json');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const mongoose = require('mongoose');


app.use(express.json);
app.use('/users', userRouter);
app.use('/notes', noteRouter)

app.get('/', (req, res) => {
    res.send("hello world")
})

mongoose.connect('mongodb+srv://Akash:Akash3975@loginlogout.2erou3k.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(5000, () => {
        console.log("server start on 5000 port");
    })
}).catch((error) => {
    console.log(error);
})

