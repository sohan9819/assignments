const timeFormatter = (date) => {
  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
};

const Clock = () => {
  setInterval(() => {
    const date = new Date();
    const time = timeFormatter(date);

    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(time);
  }, 1000);
};

Clock();
