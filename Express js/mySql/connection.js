const mysql = require('mysql')
const connections = mysql.createConnection({
    user: "postgres",
    host: "localhost",
    database: "learning",
    password: "Akash3975",
});

connections.connect(()=>{
    if (err) {
      console.warn("error in connections");  
    }
})

module.exports = con