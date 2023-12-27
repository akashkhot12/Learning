const express = require('express');
const noteRouter = express.Router();

noteRouter.get('/',(Req,res)=>{
    res.send('note get request')
})

noteRouter.post('/',(Req,res)=>{
    res.send('note post request')
})

module.exports = noteRouter;