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
const app = express();
const port = 3000;

function calculatesum(counter){
    var sum =0 ;
    for(var i = 0 ; i < counter;i++){
        sum = sum + i ;
    }
    return sum;
}

function handleFirstRequest(req,res){
    var counter = req.query.counter;
    var calculatedsum = calculatesum(counter);
    // console.log(calculatedsum);
    var answer = " the sum is " + calculatedsum;
    res.send(answer);
}



app.get('/handleSum',handleFirstRequest)

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);