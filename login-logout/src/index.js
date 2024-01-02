const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/notes', noteRouter)

app.get('/', (req, res) => {
    res.send("notes api from Akash Khot")
})

const PORT = process.env.PORT||5000;

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log("server start on  "+PORT);
    })
}).catch((error) => {
    console.log(error);
})

