const args = process.argv.slice(2);

const timer = function(input) {
  let alarm = [];
  for (const ele of input) {
    alarm.push(Number(ele));
  }
  alarm = alarm.filter(beep => !Number.isNaN(beep));
  if (alarm.length === 0) {
    console.log("nop, set the alarm correctly");
  } else {
    for (let time = 1; time < (Math.max(...alarm) + 1); time++) {
      setTimeout(() => {
        process.stdout.write(`${time} \n`);
        if (alarm.includes((time))) {
          process.stdout.write("GO GO GO!!! \n");
        }
      }, time * 1000);
    }
  }
};

timer(args);