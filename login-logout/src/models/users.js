const mongoose = require('mongoose');

const USerSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
},{timeStamps:true})

module.exports = mongoose.model('User',USerSchema);