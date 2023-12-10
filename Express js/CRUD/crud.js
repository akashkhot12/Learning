// mongo db database connection with node js 
const{MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "ecom";

async function getconnection(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products")
}

const getdata = async()=>{
    let data = await getconnection();
    const result = await data.find().toArray()
    console.log(result);
}

// getdata();

const insertData = async()=>{
    let data= await getconnection();
    const result = await data.insertOne({name:"akash"})
    console.log(result);
}

// insertData()

const updatedData = async()=>{
    let data = await getconnection();
    const result = await data.updateOne({name:"mukesh"},{$set:{name: "akash"}})
    console.log(result)
}

// updatedData()

const deleteData = async()=>{
    let data = await getconnection();
    const result = await data.deleteOne({name:"akash"})
    console.log(result);
}
deleteData()



