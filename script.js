const fs = require("fs");

const content = [];

fs.readdir("Posts/Content/", (err, files) => {
    if (err) {console.log("Error reading directory"); process.exit(1);}

    files.forEach((file, index) => {
        let ext = file.split('.').pop();
        if (ext == "txt") {
            fs.readFile(`Posts/Content/${file}`, "utf8", (err, data) => {
                if (err) {console.log(`Error reading file ${file} numbered ${index}`); process.exit(1);}
                
                data = data.toString();
        
                content.push(data);
            });
        }
    })

    document.getElementById("test").innerHTML = content[2];
    alert(content[2]);
});
