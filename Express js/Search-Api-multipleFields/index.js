const express = require("express");
require("./API-Mongoose/config.js");
const product = require("./product");
const app = express();

app.use(express.json());


app.get('/serch/:key',async(req,res)=>{
    console.log(req.params.key);
    let data = await product.find( 
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    )
})

app.listen(5000)