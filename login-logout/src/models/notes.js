const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Uesr',
        require:true
    }
},{timeStamps:true})

module.exports = mongoose.model('Note',NoteSchema);