const{MongoClient} = require("mongodb");
const url = "";
const client = new MongoClient(url);
const database  = "buses";

const connections = async ()=>{
    const connect = await client();
    const db = 
}