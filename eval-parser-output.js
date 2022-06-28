
const fs = require('fs');

fs.readFile("./parser-output.json", function (err, data) {
    (err) 
    if (err) {
        return console.log(err);
    }
    console.log("file data ->", data);
    const j = JSON.parse(data)
    console.log("json from file ->", j);

    const xmlns = j["Document"]["attributes@_"]["@_xmlns"]
    console.log("xmlns ->", xmlns);

   
    console.log("xmlns.includes ->",  xmlns.includes("camt.053"));


});