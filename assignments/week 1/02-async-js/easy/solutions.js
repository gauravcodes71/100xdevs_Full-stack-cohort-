
// creating a counter in js 

let sum = 0;

function counter(){
   console.clear();
   for(let i = 0 ; i <=1 ; i++){
    sum = sum + i;
  }
  console.log(sum);
}

setInterval(counter,1000);




// creating a counter in js wihtout using setInterval

let sum1 = 0;

function counter(){
   console.clear();
   for(let i = 0 ; i <=1 ; i++){
    sum1 = sum1 + i;
  }
  console.log(sum1);
  setTimeout(counter,1000);
}

counter();



// fs is an inbuilt library used for reading and writing in other files
const fs = require( 'fs');

function read(err,data){
  console.log(data);
}

fs.readFile('a.txt', 'utf-8', read);



// <!-- this is the code  -->
const fs = require('fs');

function write(err){
  if(err){
    console.log("the file is not found" ,err);
  }
  else{
    console.log("file written successfully");
    fs.readFile('a.txt','utf-8',read);
  }
}

function read(err,data){
  if(err){
    consoel.log("the file is not found" , err);
  }
  else{
    console.log("file read successfully");
    console.log(data);
  }
}

fs.writeFile('a.txt','this is a message','utf-8',write);
