const dbConnect = require("../mongoDbconnections/connect");


const update = async()=>{
    let data = await dbConnect();
    const result = await data.updateOne(
        {name:"m 40"},{$set:{name: "samsung m40 "}}
        )
        console.log(result);
}
update()



// update many

// const update = async()=>{
//     let data = await dbConnect();
//     const result = await data.updateMany(
//         {name:"m 40"},{$set:{name: "samsung m40 "}}
//         )
//         console.log(result);
// }
// update()