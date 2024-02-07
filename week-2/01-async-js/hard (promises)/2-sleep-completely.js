/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let threadRun = true;
  let n = 0;

  const promise = new Promise((resolve) => {
    threadRun = false;
    setTimeout(resolve, milliseconds);
  });

  return promise;
}

module.exports = sleep;
