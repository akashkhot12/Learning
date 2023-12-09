const dbconnect = require("../mongoDbconnections/connect")

const insertdata = async()=>{
    let data = await dbconnect();
    const result = await data.insertOne(
        {name:"nokia 120",brand:"nokia",category:"mobile",price:1220}
    )
    console.log("inserted successfully");
}

insertdata()