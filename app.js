const computerChoiceEl = document.getElementById("computer-choice");
const userChoiceEl = document.getElementById("user-choice");
const resultEl = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let winsEl = document.getElementById("wins");
let drawsEl = document.getElementById("draws");
let lossesEl = document.getElementById("losses");

let userChoice;
let computerChoice;
let result;
let wins = 0;
let losses = 0;
let draws = 0;

let winText = "you win";
let loseText = "you lose";
let drawText = "it's a draw";

possibleChoices.forEach(button => button.addEventListener("click", (event) => {
  userChoice = event.target.id;
  userChoiceEl.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}))

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) //same thing as using *possibleChoices.length

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if(randomNumber === 1) {
    computerChoice = "paper";
  } else if(randomNumber === 2) {
    computerChoice = "scissors";
  } else {
    console.log("This should never be displayed");
  }
  
  computerChoiceEl.innerHTML = computerChoice;
}

const getResult = () => {
  if (computerChoice === userChoice) {
    draw();
  } else if (computerChoice === "rock") {
      if (userChoice === "paper") {
        win();
      } else if (userChoice === "scissors") {
        lose();
      }
  } else if (computerChoice === "paper") {
    if (userChoice === "scissors") {
      win();
    } else if (userChoice === "rock") {
      lose();
    }
  } else if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      win();
    } else if (userChoice === "paper") {
      lose();
    }
  }
    if (result === loseText) {
      resultEl.style.color = "red";
    } else if (result === winText) {
      resultEl.style.color = "green";
    } else if (result === drawText) {
      resultEl.style.color = "black";
    } 
    resultEl.innerText = result;
}

const win = () => {
  result = winText;
  wins++;
  winsEl.innerText = "wins: " + wins;
  winsEl.style.color = "green";
}

const lose = () => {
  result = loseText;
  losses++;
  lossesEl.innerText = "losses: " + losses;
  lossesEl.style.color = "red";
}

const draw = () => {
  result = drawText;
  draws++;
  drawsEl.innerText = "draws: " + draws;
  drawsEl.style.color = "darkbrown";
}
