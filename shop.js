const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Willkommen beim Zahlenraten-Spiel!");
console.log(
  "Ich habe eine Zahl zwischen 1 und 100 gewählt. Versuche, die Zahl zu erraten."
);

function guessNumber() {
  rl.question("Gib deine Schätzung ein: ", (input) => {
    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log("Bitte gib eine gültige Zahl ein.");
    } else {
      attempts++;

      if (guess === secretNumber) {
        console.log(
          `Glückwunsch! Du hast die Zahl ${secretNumber} in ${attempts} Versuchen erraten.`
        );
        rl.close();
      } else if (guess < secretNumber) {
        console.log("Die gesuchte Zahl ist größer.");
        guessNumber();
      } else {
        console.log("Die gesuchte Zahl ist kleiner.");
        guessNumber();
      }
    }
  });
}

guessNumber();
