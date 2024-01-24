const dbConnect = require("../mongoDbconnections/connect");

const data = async () => {
  let connect = await dbConnect();
  let result = await connect.find().toArray();
  console.log(result);
};

data();
