const {MongoClient}=require("mongodb");

// another way to require mongo db
// const MongoClient = require("mongodb").MongoClient;

// use database name for storing database name;
const database = 'ecom'
// create path for mongo 
const url = 'mongodb://localhost:27017';

const Client = new MongoClient(url);


async function getData(){
 let result = await Client.connect();
 let db = result.db(database);
 let collections = db.collection('products');
 let response = await collections.find().toArray();
 console.log(response);

}

getData();
