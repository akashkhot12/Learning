const express  = require("express")
const app = express();
const {MongoClient}= require("mongodb");
const url  = "mongodb://localhost:27017";
const database = "ecom";
const client =new MongoClient(url);

async function getConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products")
}

app.get('/', async(req,res)=>{
    let data = await getConnect();
    const result = await data.find().toArray();
    res.send(result)
})


app.listen(5000,()=>{
    console.log("server is up");
})


