const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const gradient = require("gradient-string");

function chatWithDrBot(question) {
  question = question.toLowerCase();

  if (question.includes("hallo") || question.includes("guten tag")) {
    console.log("ChatDoc: Hallo! Wie kann ich Ihnen helfen?");
  } else if (question.includes("wie geht es dir")) {
    console.log("ChatDoc: Mir geht es gut, danke! Wie kann ich Ihnen helfen?");
  } else if (question.includes("wer bist du")) {
    console.log(
      "ChatDoc: Ich bin ChatDoc, Ihr automatischer Gesundheitsassistent."
    );
  } else if (question.includes("auf wiedersehen")) {
    console.log(
      "ChatDoc: Auf Wiedersehen! Falls Sie weitere Fragen haben, stehe ich Ihnen gerne zur Verfügung."
    );
    rl.close();
  } else if (question.includes("kopfschmerzen")) {
    console.log(
      "ChatDoc: Kopfschmerzen können viele Ursachen haben, einschließlich Stress und Dehydrierung. Ruhe und ausreichend Flüssigkeitszufuhr können helfen."
    );
    console.log(
      gradient.passion(
        "                                           ███████████████████████████████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███████████████████████████████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           █████████████▒▒▒▒▒▒▒▒▒█████████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           █████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████"
      )
    );
    console.log(
      gradient.passion(
        "                                           █████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████"
      )
    );
    console.log(
      gradient.passion(
        "                                           █████▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒█████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ████▒▒▒▒███▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███▒▒▒▒██████▒▒▒▒▒▒▒▒▒██████▒▒▒▒███"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███▒▒▒███▐▀███▒▒▒▒▒▒▒███▀▌███▒▒▒███"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███▒▒▒██▄▐▌▄███▒▒▒▒▒███▄▐▌▄██▒▒▒███"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███▒▒▒▒██▌███▒▒▒█▒█▒▒▒███▐██▒▒▒▒███"
      )
    );
    console.log(
      gradient.passion(
        "                                           ██▒▒▒▒▒▒███▒▒▒▒██▒██▒▒▒▒███▒▒▒▒▒▒██"
      )
    );
    console.log(
      gradient.passion(
        "                                           █▒▒▒▒▒▒▒▒█▒▒▒▒██▒▒▒██▒▒▒▒█▒▒▒▒▒▒▒▒█"
      )
    );
    console.log(
      gradient.passion(
        "                                           █▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒█"
      )
    );
    console.log(
      gradient.passion(
        "                                           █▒▒▒▒█▒▒█▒▒▒▒██▒▒▒▒▒██▒▒▒▒█▒▒█▒▒▒▒█"
      )
    );
    console.log(
      gradient.passion(
        "                                           ██▒▒▒█▒▒█▒▒▒▒█▒██▒██▒█▒▒▒▒█▒▒█▒▒▒██"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███▒█▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒█▒███"
      )
    );
    console.log(
      gradient.passion(
        "                                           █████▒▒█▒▒▒▐███████████▌▒▒▒█▒▒█████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███████▒▒▒▐█▀██▀███▀██▀█▌▒▒▒███████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███████▒▒▒▒█▐██▐███▌██▌█▒▒▒▒███████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ███████▒▒▒▒▒▐▒▒▐▒▒▒▌▒▒▌▒▒▒▒▒███████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           █████████▒▒█▒█▒▒▒█▒▒▒█▒█▒▒█████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           █████████▒██▒█▒▒▒█▒▒▒█▒██▒█████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ██████████████▒▒███▒▒██████████████"
      )
    );
    console.log(
      gradient.passion(
        "                                           ██████████████▒█████▒██████████████"
      )
    );
  } else if (question.includes("husten") || question.includes("erkältung")) {
    console.log(
      "ChatDoc: Bei anhaltendem Husten oder Erkältungssymptomen sollten Sie einen Arzt konsultieren."
    );
    console.log(
      gradient.passion("                                           ")
    );

    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░░░░▄▄▄████████░░░░░░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░▄▄█████████████░░░░▄███"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▄████████████████▄▄████▀░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▀████████████████████▀░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░███████████████▀░█▀░░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░▀█░░░░▀▀▀▀▀░░░░░░░▀▄░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░█░░░░░░░░▀▀▀▄░░░░▀█▄░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░█░░░░░▄▄▀██▀█░▄▀▀█▀█░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░▄█▄░░░░▀▄░░░▄▀░░▀▄▄▄▀░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░█▄▄▄░░░░░░███▄▄▄▄░░░█▄░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▀▄█▄░░░░░░▄▀░░░░▀▀▀▀░░▀▄░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▄▄█░░░░░░█░░░░░░░░░░░░░░█"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░████░░░░░█░░▄▀▄▀▄▀▄▀▄▀▄▀▄█"));
    console.log(gradient.passion(" ░░░░░░░░░▄▄█████░░░░░░▀▄▀░░░░░░▄█░░░░░░"));
    console.log(gradient.passion(" ░░░░░░▄█████████▄░░░░░░░░░░░░▄█░░░░░░░░"));
    console.log(gradient.passion(" ░░░▄▄███████████▀▀▄▄▄░░░░░▄███▄░░░░░░░░"));
    console.log(gradient.passion(" ░▄██████████████░░░░▀▀▀▀▀▀▀░████▄░░░░░░"));
    console.log(gradient.passion(" ▄███████████████░░░░░░░░░░░░█████▄░░░░░"));
    console.log(gradient.passion(" █████████████████▄▄▄▄▄▄▄▄▄▄▄██████▄░░░░"));
  } else if (question.includes("bauchschmerzen")) {
    console.log(
      "ChatDoc: Bauchschmerzen können auf verschiedene Magen-Darm-Probleme hinweisen. Eine ausgewogene Ernährung und Ruhe sind wichtig."
    );
  } else if (question.includes("rueckenschmerzen")) {
    console.log(
      "ChatDoc: Rückenschmerzen können durch schlechte Haltung verursacht werden. Ergonomie am Arbeitsplatz und Dehnübungen können helfen."
    );
        console.log(
      gradient.passion("                                           ")
    );

    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░░░░▄▄▄████████░░░░░░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░▄▄█████████████░░░░▄███"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▄████████████████▄▄████▀░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▀████████████████████▀░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░███████████████▀░█▀░░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░▀█░░░░▀▀▀▀▀░░░░░░░▀▄░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░█░░░░░░░░▀▀▀▄░░░░▀█▄░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░█░░░░░▄▄▀██▀█░▄▀▀█▀█░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░▄█▄░░░░▀▄░░░▄▀░░▀▄▄▄▀░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░█▄▄▄░░░░░░███▄▄▄▄░░░█▄░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▀▄█▄░░░░░░▄▀░░░░▀▀▀▀░░▀▄░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▄▄█░░░░░░█░░░░░░░░░░░░░░█"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░████░░░░░█░░▄▀▄▀▄▀▄▀▄▀▄▀▄█"));
    console.log(gradient.passion(" ░░░░░░░░░▄▄█████░░░░░░▀▄▀░░░░░░▄█░░░░░░"));
    console.log(gradient.passion(" ░░░░░░▄█████████▄░░░░░░░░░░░░▄█░░░░░░░░"));
    console.log(gradient.passion(" ░░░▄▄███████████▀▀▄▄▄░░░░░▄███▄░░░░░░░░"));
    console.log(gradient.passion(" ░▄██████████████░░░░▀▀▀▀▀▀▀░████▄░░░░░░"));
    console.log(gradient.passion(" ▄███████████████░░░░░░░░░░░░█████▄░░░░░"));
    console.log(gradient.passion(" █████████████████▄▄▄▄▄▄▄▄▄▄▄██████▄░░░░"));
  } else if (question.includes("fieber")) {
    console.log(
      "ChatDoc: Wenn Sie Fieber haben, ruhen Sie sich aus und trinken Sie viel Flüssigkeit. Konsultieren Sie einen Arzt bei hohem Fieber."
    );
    console.log(
      gradient.passion("                                           ")
    );

    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░░░░▄▄▄████████░░░░░░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░▄▄█████████████░░░░▄███"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▄████████████████▄▄████▀░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▀████████████████████▀░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░███████████████▀░█▀░░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░▀█░░░░▀▀▀▀▀░░░░░░░▀▄░░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░█░░░░░░░░▀▀▀▄░░░░▀█▄░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░░█░░░░░▄▄▀██▀█░▄▀▀█▀█░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░░▄█▄░░░░▀▄░░░▄▀░░▀▄▄▄▀░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░█▄▄▄░░░░░░███▄▄▄▄░░░█▄░░░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▀▄█▄░░░░░░▄▀░░░░▀▀▀▀░░▀▄░"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░░▄▄█░░░░░░█░░░░░░░░░░░░░░█"));
    console.log(gradient.passion(" ░░░░░░░░░░░░░████░░░░░█░░▄▀▄▀▄▀▄▀▄▀▄▀▄█"));
    console.log(gradient.passion(" ░░░░░░░░░▄▄█████░░░░░░▀▄▀░░░░░░▄█░░░░░░"));
    console.log(gradient.passion(" ░░░░░░▄█████████▄░░░░░░░░░░░░▄█░░░░░░░░"));
    console.log(gradient.passion(" ░░░▄▄███████████▀▀▄▄▄░░░░░▄███▄░░░░░░░░"));
    console.log(gradient.passion(" ░▄██████████████░░░░▀▀▀▀▀▀▀░████▄░░░░░░"));
    console.log(gradient.passion(" ▄███████████████░░░░░░░░░░░░█████▄░░░░░"));
    console.log(gradient.passion(" █████████████████▄▄▄▄▄▄▄▄▄▄▄██████▄░░░░"));
  } else {
    console.log(
      "ChatDoc: Es tut mir leid, ich habe Ihre Anfrage nicht verstanden."
    );
    console.log(
      "                             ──────────────────────────────────"
    );
    console.log(
      "                             ─────────▄▄───────────────────▄▄──"
    );
    console.log(
      "                             ──────────▀█───────────────────▀█─"
    );
    console.log(
      "                             ──────────▄█───────────────────▄█─"
    );
    console.log(
      "                             ──█████████▀───────────█████████▀─"
    );
    console.log(
      "                             ───▄██████▄─────────────▄██████▄──"
    );
    console.log(
      "                             ─▄██▀────▀██▄─────────▄██▀────▀██▄"
    );
    console.log(
      "                             ─██────────██─────────██────────██"
    );
    console.log(
      "                             ─██───██───██─────────██───██───██"
    );
    console.log(
      "                             ─██────────██─────────██────────██"
    );
    console.log(
      "                             ──██▄────▄██───────────██▄────▄██─"
    );
    console.log(
      "                             ───▀██████▀─────────────▀██████▀──"
    );
    console.log(
      "                             ──────────────────────────────────"
    );
    console.log(
      "                             ──────────────────────────────────"
    );
    console.log(
      "                             ──────────────────────────────────"
    );
    console.log(
      "                             ───────────█████████████──────────"
    );
    console.log(
      "                             ──────────────────────────────────"
    );
    console.log(
      "                             ──────────────────────────────────"
    );
  }
}

console.log(
  "ChatDoc: Hallo! Ich bin ChatDoc, Ihr automatischer Gesundheitsassistent."
);
console.log(
  'Sie können Fragen zu Ihrer Gesundheit stellen oder Geben Sie "Auf Wiedersehen" ein, um das Gespräch zu beenden.'
);
console.log(
  gradient.instagram(
    "                           ▄████▄   ██░ ██  ▄▄▄     ▄▄▄█████▓▓█████▄  ▒█████   ▄████▄"
  )
);
console.log(
  gradient.instagram(
    "                          ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄ ▒ ▓██░ ▒░░██   █▌▒██░  ██▒▒▓█    ▄"
  )
);
console.log(
  gradient.instagram(
    "                          ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██░ ▓██▓ ░ ░▓█▄   ▌▒██   ██░▒▓▓▄ ▄██"
  )
);
console.log(
  gradient.instagram(
    "                          ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒ ▒██▒ ░ ░▒████▓ ░ ████▓▒░▒ ▓███▀ "
  )
);
console.log(
  gradient.instagram(
    "                          ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░ ▒ ░░    ▒▒▓  ▒ ░ ▒░▒░▒░ ░ ░▒ ▒  "
  )
);
console.log(
  gradient.instagram(
    "                           ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░   ░     ░ ▒  ▒   ░ ▒ ▒░   ░  ▒   "
  )
);
console.log(
  gradient.instagram(
    "                          ░         ░  ░░ ░  ░   ▒    ░       ░ ░  ░ ░ ░ ░ ▒  ░       "
  )
);
console.log(
  gradient.instagram(
    "                          ░ ░       ░  ░  ░      ░  ░           ░        ░ ░  ░ ░     "
  )
);
console.log(
  gradient.instagram(
    "                          ░                                   ░               ░       "
  )
);

rl.on("line", (input) => {
  chatWithDrBot(input);
});

rl.on("close", () => {
  console.log("ChatDoc wurde beendet.");
});
