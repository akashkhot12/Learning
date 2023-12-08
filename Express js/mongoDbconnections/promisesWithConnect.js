const {MongoClient}=require("mongodb");
 const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const database  = 'ecom';

async function getConnections(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

const main = async()=>{
    let data = await getConnections();
    data= await data.find().toArray();
    console.log(data);
}
main()