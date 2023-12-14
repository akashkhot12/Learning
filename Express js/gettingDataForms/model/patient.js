const mongoose = require('mongoose');


const patientData = new mongoose.Schema({
    name:{type:String},
    phone:{type:Number},
    gender:{type:String},
    email:{type:String},
    date:{type:String},
    time:{type:String},
    area:{type:String},
    city:{type:String},
    state:{type:String},
    postcode:{type:String}
})

const Patient = mongoose.model("Patient",patientData);
module.exports = Patient;