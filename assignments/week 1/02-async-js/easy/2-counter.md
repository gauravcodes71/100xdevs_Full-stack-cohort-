## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



// creating a counter in js wihtout using setInterval

let sum = 0;

function counter(){
   console.clear();
   for(let i = 0 ; i <=1 ; i++){
    sum = sum + i;
  }
  console.log(sum);
  setTimeout(counter,1000);
}

counter();




































































(Hint: setTimeout)