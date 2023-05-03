let readlineSync = require("readline-sync");
const chalk = require('chalk');


let Score = 0;
let otherScores = {
  name: "Mukul",
  points: 5,
}
;
let userName = readlineSync.question(chalk.cyanBright("What's your name? "));

console.log(chalk.magentaBright("Welcome, " +userName+ ", to the Quiz of Potterhead!"));
console.log(chalk.yellow("-----------------------------"))


function playGame(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yoo!! You got it right.");
    Score++;
  } else {
    console.log("Oops!! You got it wrong.");
  }
  console.log(chalk.greenBright("Your current score: ", Score));
  console.log(chalk.yellow("-----------------------------"))
}


let potterQuestion = [{ question: "Who wanted to kill Harry Potter? ", answer: "Voldemort" }, { question: "Who killed Sirius Black? ", answer: "Bellatrix" }, { question: "Who killed Dumbledore? ", answer: "Severus Snape" }, { question: "Cedric was captain of which team? ", answer: "Hufflepuff" }, { question: "Who killed Bellatrix? ", answer: "Molly" }, { question: "Which Weasley brother died in battle? ", answer: "Fred" }];

for (let i = 0; i < potterQuestion.length; i++) {
  let currentQuestions = potterQuestion[i];
  playGame(currentQuestions.question, currentQuestions.answer);
}

console.log(chalk.magentaBright(`YAY! Your Total Score Is ${Score}. Well Done Potterhead`))

console.log(chalk.yellow("-----------------------------"))

console.log( chalk.red(`Others Score: ${otherScores.name} secure ${otherScores.points}`))
