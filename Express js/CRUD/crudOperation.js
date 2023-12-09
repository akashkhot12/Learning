const dbConnect = require("../mongoDbconnections/connect")


// get data

const getData = async()=>{
    let data = await dbConnect();
    const result = await data.find().toArray();
    if (!result) {
        console.log("something wrong");
    }
    else{
        console.log(result);
    }
}

// getData()


// insert data

const insertdata = async()=>{
    let data = await dbConnect();
    const result = await data.insertOne(
        {name:"lava 1",brand:"lava",category:"mobile",price:200}
        )
        if (result.acknowledged) {
            console.log("data insert successfully");
        }
}
// insertdata()


// update data
const updatedata = async()=>{
    let data = await dbConnect();
    const result = await data.updateOne(
        {name:"lava 1"},{$set:{name:"lava 10"}}
    )
    if (result.acknowledged) {
        console.log("data update successfully");
    }
}

// updatedata()

// delete data

const deleteData = async()=>{
    let data = await dbConnect();
    const result = await data.deleteOne(
        {name:"lava 10"}
    )
    if (result.acknowledged) {
        console.log("data delete successfully");
    }
}
deleteData()