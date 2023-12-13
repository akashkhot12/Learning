const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecom");

const productScehma = new mongoose.Schema({
    name:String,
    brand:String,
    category:String,
    price:Number
})

const addInDb = async()=>{
    const product = mongoose.model('products',productScehma);
    let data = new product(
        {
            name:"Iphone 15",
            brand:"apple",
            category:"smartphone",
            price:1350
        }
    )
  let result = await data.save()
  console.log(result);
}

addInDb()