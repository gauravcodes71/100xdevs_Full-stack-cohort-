/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function promiseAfter(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${delay} second(s)`);
      }, delay * 1000);
    });
  }
  
  // Creating promises that resolve after 1, 2, and 3 seconds respectively
  const promise1 = promiseAfter(1);
  const promise2 = promiseAfter(2);
  const promise3 = promiseAfter(3);
  
  // Waiting for all promises to resolve using Promise.all
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log(results); // Log the results of all promises
    })
    .catch((error) => {
      console.error('Error:', error); // Log any errors
    });
  