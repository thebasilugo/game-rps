const computerChoiceEl = document.getElementById("computer-choice");
const userChoiceEl = document.getElementById("user-choice");
const resultEl = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

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
    if (result === "you lose") {
      resultEl.style.color = "red";
    } else if (result === "you win") {
      resultEl.style.color = "green";
    } else if (result === "it's a draw") {
      resultEl.style.color = "black";
    } 
    resultEl.innerText = result;
}

const win = () => {
  console.log("win");
}

const lose = () => {
  console.log("lose");
}

const draw = () => {
  console.log("draw");
}
