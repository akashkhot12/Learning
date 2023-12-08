const getConnections = require("./connect")

const main = async()=>{
    let data = await getConnections();
    data= await data.find().toArray();
    console.log(data);
}
main()