const gameMoves = ["Paper", "Rock", "Scissors"]
let computerSelection = "";
let playerSelection = "";

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * gameMoves.length);
    computerSelection = gameMoves[randomNum].toLowerCase();
}

function getPlayerSelection() {
    playerSelection = prompt("Type your bet! Available options: Paper or Rock or Scissors").toLowerCase();
}

getComputerChoice()
getPlayerSelection()