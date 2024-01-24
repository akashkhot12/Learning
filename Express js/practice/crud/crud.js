const mongodb = require("../crud/connection");

const readData = async()=>{
    let result = await mongodb();
    let data = await result.find().toArray();
    console.log(data);
}
readData()

const insertData = async()=>{
    let result = await mongodb();
    let insert = await result.insertOne({name:"somesh",lastName:"khot"});
    console.log(insert);
}
// insertData();

const updateData = async()=>{
    let result = await mongodb();
    let update = await result.updateOne({name:"akash"},{$set:{name:"lokesh"}})
    console.log(update);
}
// updateData()

const deleteData = async()=>{
    let result = await mongodb();
    let delet = await result.deleteOne({name:"akash"});
    console.log(delet);
}
// deleteData()