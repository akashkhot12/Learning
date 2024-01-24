const mongodb = require("../crud/connection2");

const insertData = async()=>{
    let result = await mongodb();
    let insert = await result.insertOne({product:"light"});
    console.log(insert);
}
// insertData();

const readData = async()=>{
    let result = await mongodb();
    let read = await result.find().toArray();
    console.log(read);
}

// readData()

const updateData = async()=>{
    let result = await mongodb();
    let update = await result.updateOne({product:"light"},{$set:{product:"bulp"}});
    console.log(update);
}
// updateData();

const deleteData = async()=>{
    let result = await mongodb();
    let delet = await result.deleteOne({product:"bulp"});
    console.log(delet);
}
deleteData()