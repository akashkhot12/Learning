const dbConnect = require("../mongoDbconnections/connect");

// delete data singular

const deleteData = async()=>{
    let data= await dbConnect();
    const result = await data.deleteOne(
        {name:"oppo smart"}
    )
    if (result.acknowledged) {
        console.log("delete successfully");
    }
}

deleteData()


// multiple data deleted 

// const deleteData = async()=>{
//     let data= await dbConnect();
//     const result = await data.deleteMany(
//         {name:"oppo smart"}
//     )
//     if (result.acknowledged) {
//         console.log("delete successfully");
//     }
// }

// deleteData()

