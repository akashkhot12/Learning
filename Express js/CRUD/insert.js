const dbconnect = require("../mongoDbconnections/connect")

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