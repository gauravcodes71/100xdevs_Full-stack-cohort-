/*
function sum(counter){
    var sum =0 ;
    for(var i = 0 ; i < counter;i++){
        sum = sum + i ;
    }
    return sum;
}

var calculatesum = sum(100);
console.log(calculatesum);

const fs = require('fs');
const express = require('express');

function readfn(err,data){
    console.log(data);
}
  
fs.readFile('file.txt','UTF-8',readfn);
*/


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


function middleware1(req,res,next){
    console.log("from inside middleware" + req.headers.counter);
    next();
}

// app.use(middleware1);
app.use(bodyParser.json());


function calculateSum(counter){
    var sum = 0 ;
    for(var i = 1 ; i <= counter;i++){
        sum = sum + i ;
    }
    return sum;
}


function calculateMul(counter){
    var answer = 1 ;
    for(var i = 1 ; i <= counter;i++){
        answer = answer * i ;
    }
    return answer;
}

function handleFirstRequest(req,res){
    var counter = req.query.counter;

    var calculatedSum = calculateSum(counter);
    var calculatedMul= calculateMul(counter);

    var answerObject = {
        sum : calculatedSum,
        mul : calculatedMul,
    };

    res.status(200).send(answerObject);
    
    // console.log(calculatedsum);
    
}

function givePage(req,res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>week 2</title>
    </head>
    <body>
        <h1>hello there</h1>
    </body>
    </html>`)
}

app.get('/',givePage);

// app.get('/handleSum',handleFirstRequest)
app.get('/handleSum',handleFirstRequest)

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);