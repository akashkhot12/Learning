const mongoose = require('mongoose');

const patientData = new mongoose.Schema({
   name:String,
   phone:String,
   gender:String,
   email:String,
   date:String,
   time:String,
   area:String,
   city:String,
   state:String,
   postcode:String
})

const Patient = mongoose.model("Appointments",patientData);
module.exports = Patient