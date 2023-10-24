const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let player = {
  name: "",
  health: 100,
  inventory: [],
};

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function startGame() {
  console.log("Willkommen zum Abenteuerspiel!");
  player.name = await askQuestion("Wie lautet dein Name? ");

  console.log(
    `Hallo, ${player.name}! Du beginnst mit ${player.health} Gesundheit.`
  );
  console.log(
    "Du befindest dich in einem dunklen Wald. Du siehst einen Pfad nach links und einen nach rechts."
  );

  let choice = await askQuestion(
    "Möchtest du nach links oder nach rechts gehen? "
  );

  if (choice === "links") {
    console.log("Du gehst nach links und findest eine Truhe.");
    let openChest = await askQuestion(
      "Möchtest du die Truhe öffnen? (ja/nein) "
    );

    if (openChest === "ja") {
      console.log(
        "Du findest einen Heiltrank in der Truhe und fügst 20 Gesundheit hinzu."
      );
      player.health += 20;
    } else {
      console.log("Du gehst weiter, ohne die Truhe zu öffnen.");
    }
  } else if (choice === "rechts") {
    console.log("Du gehst nach rechts und triffst auf einen wilden Bären.");
    console.log("Du hast zwei Optionen: kämpfen oder weglaufen.");

    choice = await askQuestion("Was möchtest du tun? (kämpfen/weglaufen) ");

    if (choice === "kämpfen") {
      console.log(
        "Du kämpfst gegen den Bären, aber er ist zu mächtig. Du verlierst 50 Gesundheit."
      );
      player.health -= 50;
    } else {
      console.log(
        "Du fliehst vor dem Bären und kehrst zum Anfang des Waldes zurück."
      );
    }
  }

  console.log(`Du hast jetzt ${player.health} Gesundheit.`);

  if (player.health <= 0) {
    console.log("Du hast alle Gesundheit verloren. Das Spiel ist vorbei.");
  } else {
    console.log("Glückwunsch, du hast das Abenteuerspiel gemeistert!");
  }

  rl.close();
}

startGame();
