const{MongoClient} = require("mongodb");
const { collection } = require("../../gettingDataForms/model/patient");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database  = "buses";

const connections = async ()=>{
    const connect = await client.connect();
    const db = await connect.db(database);
    return collection.db("buses");
}

module.exports = connections