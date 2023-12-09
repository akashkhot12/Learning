const dbConnect = require("../mongoDbconnections/connect")

const getdata = async()=>{
    let data = await dbConnect();
    const result = await data.find().toArray();

    console.log(result);
}

getdata()
