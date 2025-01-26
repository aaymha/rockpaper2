let humanScore = 0;
let computerScore = 0;
let humanSelection = "";

const resu = document.querySelector("#rps");
const result = document.createElement("h3");

const humanpoints = document.createElement("p");
const computerPoints = document.createElement("p");

const gameWinner = document.createElement("h1");


const rock2 = document.querySelector("#rock1");
rock2.addEventListener("click", () => {
    humanSelection = "rock";
    playRound();
    currentScore();
    winner();
})

const paper2 = document.querySelector("#paper1");
paper2.addEventListener("click", () => {
    humanSelection = "paper";
    playRound();
    currentScore();
    winner();
})

const scissors2 = document.querySelector("#scissors1");
scissors2.addEventListener("click", () => {
    humanSelection = "scissors";
    playRound();
    currentScore();
    winner();
})

                        //function that gets computer choice by generating a random number from 0-2, then based of the number sets computer choice as rock paper os scissors
function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);

    if(computer === 0) {
        return "rock";
    } else if(computer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

                        //function that plays one round of rock paper scissors and adds accordingly point to either human or computer
function playRound() {
    let computerSelection = getComputerChoice();

    if(humanSelection === computerSelection) {
        result.textContent = "Draw!";
    } else if((humanSelection === "rock") && (computerSelection === "scissors")) {
        result.textContent = "Win!";
        humanScore++;
    } else if((humanSelection === "paper") && (computerSelection === "rock")) {
        result.textContent = "Win!";
        humanScore++;
    } else if((humanSelection === "scissors") && (computerSelection === "paper")) {
        result.textContent = "Win!";
        humanScore++;
    } else {
        result.textContent = "Loose!";
        computerScore++;
    } resu.appendChild(result);
}

function currentScore() {
    humanpoints.textContent = "Your current score: " + humanScore;
    resu.appendChild(humanpoints);
    computerPoints.textContent = "Current computer score: " + computerScore;
    resu.appendChild(computerPoints);
}

function winner() {
    if(humanScore === 5) {
        gameWinner.textContent = "You are the winner!"
        resu.appendChild(gameWinner);
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore === 5) { 
        gameWinner.textContent = "Computer wins!";
        resu.appendChild(gameWinner);
        humanScore = 0;
        computerScore = 0;
    } else {
        gameWinner.textContent = " ";
    }
}
