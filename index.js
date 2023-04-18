let readlineSync = require("readline-sync");

let Score = 0;
let userScores = [];
let userName = readlineSync.question("What's your name? ");

function joiner() {
  console.log("Welcome, " + userName + ", to the Quiz of Potterhead!");
}

function playGame(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yoo!! You got it right.");
    Score++;
  } else {
    console.log("You got it wrong.");
  }
}

joiner();

let potterQuestion = [  {    question: "Who wanted to kill Harry Potter? ",    answer: "Voldemort"  },  {    question: "Who killed Sirius Black? ",    answer: "Bellatrix"  },  {    question: "Who killed Dumbledore? ",    answer: "Severus Snape"  },  {    question: "Cedric was captain of which team? ",    answer: "Hufflepuff"  },  {    question: "Who killed Bellatrix? ",    answer: "Molly"  },  {    question: "Which Weasley brother died in battle? ",    answer: "Fred"  }];

for (let i = 0; i < potterQuestion.length; i++) {
  let currentQuestions = potterQuestion[i];
  playGame(currentQuestions.question, currentQuestions.answer);
}

function addUserScore(name, score) {
  let UserPoints = {
    name: name,
    score: score
  };
  userScores.push(UserPoints);
}
addUserScore(userName, Score);

console.log(`YAY! your score is ${Score}`)
