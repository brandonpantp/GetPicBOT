﻿var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.urlencoded({ extended: true }));
app.post("/", function (request, response) {
    console.log(request.body); 
});

app.listen(8080);