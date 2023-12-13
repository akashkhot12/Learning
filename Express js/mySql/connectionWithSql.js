const mysql = require('postgres');

const conn = mysql.createConnection({
    user: "postgres",
    host: "localhost",
    database: "learning",
    password: "Akash3975",
})

con.connect(()=>{
    if (err) {
        console.warn("error");
    } else {
       console.warn("connected"); 
    }
})