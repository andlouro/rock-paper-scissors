const gameMoves = ["Paper", "Rock", "Scissors"]
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * gameMoves.length);
    computerSelection = gameMoves[randomNum].toLowerCase();
}

function getPlayerSelection() {
    playerSelection = prompt("Type your bet! Available options: Paper or Rock or Scissors").toLowerCase();
}

function playRound() {
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (computerSelection === playerSelection) {
        console.log(`It's a draw! ${computerSelection} equals ${playerSelection}`)
    } else {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice()
        getPlayerSelection()
        playRound()
    }
    if (computerScore > playerScore) {
        console.log("Computer Won!")
    } else if (computerScore === playerScore) {
        console.log("It's a Draw!")
    } else {
        console.log("Well done! You beat the machine")
    }
}

game()