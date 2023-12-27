const express  = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";


const password = 'Akash123';
let store 
// create function
const passkey  = async()=>{
    const hashedPassword =await bcrypt.hash(password,10)
     store = hashedPassword;
     console.log(store);
}
passkey();
console.log(store);

const compareKey = async()=>{
    const matchPassword = await bcrypt.compare(password, store);
}






