const {MongoClient}=require("mongodb");
 const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const database  = 'ecom';

async function getConnections(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

module.exports = getConnections;



const{MongoClient}=require("mongodb");
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const database  = "ecom"

async function getConnections(){
    let result = await client.connect();
    let db  = result.db(database)
    return db.collection('procts')
}