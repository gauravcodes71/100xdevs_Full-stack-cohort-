## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

<!-- this is the code  -->
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
