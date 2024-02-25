/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${milliseconds / 1000} second(s)`);
      }, milliseconds);
    });
  }
  
  // Function that sequentially calls all 3 functions and measures the time taken
  
  async function sequentialCalls() {
    const startTime = Date.now(); // Start time
  
    // Sequentially calling the functions and awaiting their resolution
    await wait(1000).then((message) => console.log(message));
    await wait(2000).then((message) => console.log(message));
    await wait(3000).then((message) => console.log(message));
  
    const endTime = Date.now(); // End time
    console.log("Total time taken:", endTime - startTime, "milliseconds");
  }
  
  // Calling the function
  sequentialCalls();
  