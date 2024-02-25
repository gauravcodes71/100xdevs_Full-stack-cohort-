## Create a counter in JavaScript

<!-- We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second 
 -->
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
