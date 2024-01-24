const dbConnect = require("../mongoDbconnections/connect");

const insertData = async()=>{
    let connect = await dbConnect();
    let insert = await connect.insertOne({name:"jethalal",lastname:"gada"})
    console.log(insert);
}
insertData();