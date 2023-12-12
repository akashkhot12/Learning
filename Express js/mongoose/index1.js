const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/ecom");
  const productScehma = new mongoose.Schema({
    name: String,
    age: Number,
  });
  const productModel = mongoose.model("products", productScehma);
  let data = new productModel({ name: "chetna bhanarkar", age: 12 });
  let result = await data.save();
  console.log(result);
};
main();
