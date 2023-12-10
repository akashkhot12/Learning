const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "bootcoding";
const client =new  MongoClient(url);

// get connection 

async function getConnet(){
    let result = await client.connect();
    let db =  result.db(database);
    return db.collection("learning")
}

const insertData = async()=>{
    let data = await getConnet();
    const result = await data.insertOne({name:"akash",last:"khot",number:9834281002})
    console.log(result.acknowledged);
    
}
// insertData()