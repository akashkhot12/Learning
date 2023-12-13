const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/ecom");
const productScehma = new mongoose.Schema({
    name:String,
    brand:String,
    category:String,
    price:Number
})
const saveInDB  = async()=>{
   
    const product = mongoose.model('products',productScehma)
    let data = new product({name:"sony 80",brand:"sony", category:"mobile",price:288})
    let result = await data.save();
    console.log(result);
}
 
// saveInDB()

const updateData = async()=>{
    const product = mongoose.model('products',productScehma)
    let data = await product.updateOne(
        {name:"chetna bhanarkar"},{$set:{name:"errission"}}
    )
    console.log(data);
}
// updateData()

const deleteData = async()=>{
    const product = mongoose.model('products',productScehma);
    let data = await product.deleteOne({name:"sony"})
    console.log(data);
}
deleteData()