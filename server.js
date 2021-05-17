//const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended: true}));
//getting a request and response to server
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname);
});

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1/(n2*n2)*10000;
    res.send("Your BMI is : " +result.toFixed(2));
});
app.listen(3000,function(){
    console.log("Server has started on port 3000");
});