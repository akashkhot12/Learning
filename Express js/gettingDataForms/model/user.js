const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    compony:{type:String},
    contact:{type:Number}
})

const User = mongoose.model("User",userData);
module.exports = User