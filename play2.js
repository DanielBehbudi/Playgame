const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const wordList = ["javascript", "node", "hangman", "programming", "web"];
const maxAttempts = 6;

let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
let hiddenWord = "_".repeat(selectedWord.length);
let attempts = 0;
let guessedLetters = [];

console.log("Willkommen beim Hangman-Spiel!");
console.log("Du hast 6 Versuche, um das Wort zu erraten.");

function displayGame() {
  console.log(`Wort: ${hiddenWord}`);
  console.log(`Bereits geratene Buchstaben: ${guessedLetters.join(", ")}`);
  console.log(`Versuche übrig: ${maxAttempts - attempts}`);
}

function guessLetter() {
  rl.question("Rate einen Buchstaben: ", (input) => {
    const letter = input.toLowerCase();
    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
      console.log("Bitte gib einen einzelnen Buchstaben ein.");
    } else if (guessedLetters.includes(letter)) {
      console.log("Du hast diesen Buchstaben bereits geraten.");
    } else {
      guessedLetters.push(letter);
      if (selectedWord.includes(letter)) {
        let newHiddenWord = "";
        for (let i = 0; i < selectedWord.length; i++) {
          if (selectedWord[i] === letter) {
            newHiddenWord += letter;
          } else {
            newHiddenWord += hiddenWord[i];
          }
        }
        hiddenWord = newHiddenWord;
      } else {
        attempts++;
      }

      if (attempts >= maxAttempts || hiddenWord === selectedWord) {
        if (hiddenWord === selectedWord) {
          console.log(
            "Herzlichen Glückwunsch! Du hast das Wort gefunden: " + selectedWord
          );
        } else {
          console.log(
            "Du hast alle Versuche aufgebraucht. Das Wort war: " + selectedWord
          );
        }
        rl.close();
      } else {
        displayGame();
        guessLetter();
      }
    }
  });
}

displayGame();
guessLetter();
