const express = require('express');
const app = express();


app.get('/' , (req , res)=>{

   res.render("index.ejs",{
   dayType:"a weekday",
   advise :"its time to work hard"
}
   )

})

app.listen(5000,()=>{
    console.log("server is up");
})