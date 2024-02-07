const Counter = () => {
  let count = 0;
  let interval = setInterval(function () {
    count++;
    console.log(count);
    if (count == 0) {
      clearInterval(interval);
    }
  }, 1000);
};

Counter();
