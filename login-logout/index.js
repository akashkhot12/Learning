const express  = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";


const password = 'Akash123';

const passkey  = async()=>{
    const hashedPassword =await bcrypt.hash(password,10)
    console.log(hashedPassword);
}
passkey()

if (condition) {
    
} else {
    
}
