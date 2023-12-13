const express = require('express')
const multer  = require('multer');
const app  = express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,fieldname+"_"+Date.now()+".jpg")
        }
    })
}).single("user_file")
app.get('/upload',upload,(req,res)=>{
    res.send("file upload")
})

app.listen(5000);
