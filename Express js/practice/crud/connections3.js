const{MongoClient} = require("mongodb");
const { collection } = require("../../gettingDataForms/model/patient");
const url = "";
const client = new MongoClient(url);
const database  = "buses";

const connections = async ()=>{
    const connect = await client();
    const db = await connect.db(database);
    return collection.db("bus");
}

module.exports = connections