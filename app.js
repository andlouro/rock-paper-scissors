const gameMove = ["Paper", "Rock", "Scissors"]
let computerChoice = "";

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * gameMove.length);
    computerChoice = gameMove[randomNum];
    console.log(computerChoice);
}

getComputerChoice()