const dbconnect = require("../mongoDbconnections/connect")


// this code is single inserted data in mongo db

const insertdata = async()=>{
    let data = await dbconnect();
    const result = await data.insertOne(
        {name:"oppo 20",brand:"oppo",category:"mobile",price:220}
    )
    // console.log(result);
    if (result.acknowledged) {
        console.log("data inserted suceesfully");
    }
}

insertdata()


// this code is multiple data inserted on mongo db
// const insertdata = async()=>{
//     let data = await dbconnect();
//     const result = await data.insertMany([
//         {name:"oppo 10",brand:"oppo",category:"mobile",price:220},
//         {name:"vivo 10",brand:"vivo",category:"mobile",price:220},
//         {name:"samsung 10",brand:"sansung",category:"mobile",price:2120},
//     ]
//     )
//     // console.log(result);
//     if (result.acknowledged) {
//         console.log("data inserted suceesfully");
//     }
// }

// insertdata()




