/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function busyWait(milliseconds) {
    const startTime = Date.now();
    let currentTime;
  
    // Busy-wait loop
    do {
      currentTime = Date.now();
    } while (currentTime - startTime < milliseconds);
  }
  
  // Example usage:
  console.log('Before busy wait');
  busyWait(3000); // Halts the thread for 3 seconds
  console.log('After busy wait');
  