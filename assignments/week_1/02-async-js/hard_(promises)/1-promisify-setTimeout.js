/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// problem 1
function wait(seconds) {
    // Creating a new promise
    return new Promise((resolve, reject) => {
      // Checking if seconds is a non-negative number
      if (seconds >= 0 && typeof seconds === 'number') {
        // Waiting for the specified number of seconds
        setTimeout(() => {
          // Resolving the promise after the specified time
          resolve(`Promise resolved after ${seconds} seconds`);
        }, seconds * 1000); // Converting seconds to milliseconds
      } else {
        // Rejecting the promise if the input is invalid
        reject(new Error('Invalid input: Please provide a non-negative number'));
      }
    });
  }
  
  // Example usage:
  wait(3)
    .then((message) => {
      console.log(message); // Logs: "Promise resolved after 3 seconds"
    })
    .catch((error) => {
      console.error(error); // Logs: "Invalid input: Please provide a non-negative number"
    });
    