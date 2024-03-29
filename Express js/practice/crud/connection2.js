const {MongoClient}= require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database  = "electronics";

const getConnections = async ()=>{
    let result = await client.connect();
    let db = await result.db(database);
    return db.collection("items")
}

module.exports = getConnections;