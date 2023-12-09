const express  = require("express");
const dbConnect = require("../mongoConnect");
const mongodb = require("mongodb")
const app = express();

app.use(express.json());


app.get('/',async(req,res)=>{
   let data = await dbConnect();
   const result = await data.find().toArray()
   res.send(result)
})

app.post('/',async(req,res)=>{
    let data = await dbConnect();
    const result  = await data.insertOne(req.body)
    res.send(result)
})

app.put('/:name',async(req,res)=>{
    let data = await dbConnect();
    const result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    res.send({result:"updated"})
})

app.delete('/:id',async(req,res)=>{
    let data= await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
    console.log("delete succefully");
})

app.listen(5000)