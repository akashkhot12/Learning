const express = require('express');
const app = express();


app.get('/' , (req , res)=>{


    const today = new Date();
    const day = today.getDay();

    let type = "a weekday"
    let adv = "its time to work hard"
    if (day ===0 || day ===6) {
        let type = "a weekday"
        let adv = "its time to have a fun"
    } 
   res.render("index.ejs",{
   dayType:type,
   advise :adv
})
})

app.listen(5000,()=>{
    console.log("server is up");
})