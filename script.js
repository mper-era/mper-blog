const fs = require("fs");
 
fs.readFile("Posts/Content/test.txt", "utf8", (err, data) => {
    if (err) throw err;
    
    data = data.toString();
});