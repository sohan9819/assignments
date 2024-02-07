const Counter = async () => {
  for (let count = 0; count < 5; count++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};
Counter();
