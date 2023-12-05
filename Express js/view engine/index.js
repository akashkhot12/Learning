const express = require("express");
const path  = require("path")
const app = express();

const publicPath = path.join(__dirname,'public')

// app.use(express.static(publicPath))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/home',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})

// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/nopage.html`)
// })

app.get('/profile',(req,res)=>{
    res.render('profile')
})
app.listen(5000)