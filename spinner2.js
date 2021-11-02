process.stdout.write('hello from spinner2.js... \rheyyy\n');

const symbols = ["|", "/", "-", "\\", "|", "/", "-", "\\" , "|\n"];

// Spinner function: Loops through array of symbols and prints in intervals of 200 ms
const spinner = (time) => {
  for (const symbol of symbols) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}`);
    }, time += 200);
  }
};

// Function call
spinner(200);