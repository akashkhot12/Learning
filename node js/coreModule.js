const fs = require("fs");
const { dirname } = require("path");

fs.writeFileSync("hello.txt","akash khot")
console.log("hello your file directory is",__dirname);