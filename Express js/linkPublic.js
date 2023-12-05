const express = require("express")
const path = require("path")
const app =express()

const obj = path.join(__dirname,'public');
app.use(express.static(obj));

app.listen(5000)