var express = require("express");
var fs = require("fs");
var app = express();

app.get("/books", function(req, res) {
    fs.readFile(process.argv[3], function(error, response) {
        if (error) {
            throw error;
        }
        
        res.send(JSON.stringify(JSON.parse(response)));
    });
    
});

app.listen(process.argv[2]);