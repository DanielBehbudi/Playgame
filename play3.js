const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = ["Schere", "Stein", "Papier"];
const results = ["Unentschieden!", "Du gewinnst!", "Der Computer gewinnt!"];

function computerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function evaluateChoice(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 0;
  if (
    (playerChoice === "Schere" && computerChoice === "Papier") ||
    (playerChoice === "Stein" && computerChoice === "Schere") ||
    (playerChoice === "Papier" && computerChoice === "Stein")
  ) {
    return 1;
  }
  return 2;
}

function playGame() {
  rl.question("Wähle Schere, Stein oder Papier: ", (playerChoice) => {
    playerChoice = playerChoice.trim();
    if (!options.includes(playerChoice)) {
      console.log("Bitte gib eine gültige Option ein.");
      playGame();
    } else {
      const computer = computerChoice();
      console.log(`Du wähltest: ${playerChoice}`);
      console.log(`Der Computer wählte: ${computer}`);
      const result = evaluateChoice(playerChoice, computer);
      console.log(results[result]);

      rl.question("Möchtest du nochmal spielen? (ja/nein): ", (playAgain) => {
        if (playAgain.trim().toLowerCase() === "ja") {
          playGame();
        } else {
          console.log("Auf Wiedersehen!");
          rl.close();
        }
      });
    }
  });
}

console.log("Willkommen beim Schere, Stein, Papier-Spiel!");
playGame();
