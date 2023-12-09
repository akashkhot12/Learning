const dbConnect = require("../mongoDbconnections/connect");


const update = async()=>{
    let data = await dbConnect();
    const result = await data.updateOne(
        {
            
        }
        )
}