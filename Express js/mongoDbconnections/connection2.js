const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = 'ecom';

async function getdata(){
    const result = await client.connect();
    let db = result.db(database);
    let collections = db.collection('products')
    let response = await collections.find().toArray();
    console.log(response);
}

getdata()