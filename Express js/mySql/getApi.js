const express = require('express');
const con = require('./connection')
const app = express();

app.use(express.json());


app.get('/list',(req,res)=>{
con.query("select * from users",(err,result)=>{
    if (err) {
        res.send(err)
    }
    else{
        res.send(result)
    }
})
})


app.post('/',(req,res)=>{
    // const data = {name:"akash",password:"Akash",user_type:"visitors"}; => for hardcoded data
    const con = req.body;
    con.query("insert into users SET ?",data,(error,result,feilds)=>{
        if (error) {
            res.send(error)
        }
        res.send(result)
    })
})

app.put("/:id",(req,resp)=>{
    const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
    con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
    data,(error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
   
  })

app.listen(5000)