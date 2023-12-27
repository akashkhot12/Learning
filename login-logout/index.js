const express  = require('express')
const bcrypt = require('bcrypt');



const password = 'Akash123';
// create function
const passkey  = async()=>{
    const hashedPassword =await bcrypt.hash(password,10);
    const matchPassword = await bcrypt.compare(password, hashedPassword);
    console.log(matchPassword);
}
passkey();









