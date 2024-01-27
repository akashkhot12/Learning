const mongodb  =  require("./connections3");


const getdata = async()=>{
    let connect = await mongodb();
    let getting = await connect.find().toArray();
    console.log(getting);
}
getdata();

// const inser