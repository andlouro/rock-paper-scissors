const btns = document.querySelectorAll('button');
const displayResult = document.querySelector('.result');
const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.computer-score');
const gameMoves = ["Paper", "Rock", "Scissors"];
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(playerScore === 5 || computerScore === 5) {
            console.log('game ends');
        } else {
            playerSelection = e.target.id;
            playRound();
        }
    });
});

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * gameMoves.length);
    computerSelection = gameMoves[randomNum].toLowerCase();
}

function playRound() {
    getComputerChoice();
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        displayResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        displayResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        displayResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === playerSelection) {
        displayResult.textContent = `It's a draw! ${computerSelection} equals ${playerSelection}`;
    } else {
        playerScore++;
        displayResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    scoreUpdate();
}

function scoreUpdate() {
    displayComputerScore.textContent = computerScore;
    displayPlayerScore.textContent = playerScore;
}