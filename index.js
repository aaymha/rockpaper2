                        //declaring two new variables in the global scope which holds player and computer score
let humanScore = 0;
let computerScore = 0;

                        //function that gets human choice, either rock paper os scissors
 function getHumanChoice() {
    let human = prompt("Choose either rock, paper or scissors: ").toLowerCase();
    if(human === "rock") {
        human = "rock";
    } else if(human === "paper") {
         human = "paper";
    } else if(human === "scissors") {
        human = "scissors";
    }
     return human;
 }
                        //function that gets computer choice by generating a random number from 0-2, then based of the number sets computer choice as rock paper os scissors
function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    if(computer === 0) {
        computer = "rock";
    } else if(computer === 1) {
        computer = "paper";
    } else if(computer === 2) {
        computer = "scissors";
        
    }
    return computer;
}

                        //function that plays one round of rock paper scissors and adds accordingly point to human or computer
function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if(humanSelection === "rock") {
        if(computerSelection === "rock") {
            alert("Draw!");
        } else if(computerSelection === "paper") {
            computerScore++;
            alert("You loose!");
        } else {humanScore++; alert("You win!")}
    } else if(humanSelection === "paper") {
        if(computerSelection === "paper") {
            alert("Draw");
        } else if(computerSelection === "rock") {
            humanScore++
            alert("You win!")
        } else {computerScore++; alert("You loose!")}
    } else if(humanSelection === "scissors") {
        if(computerSelection === "scissors") {
            alert("Draw!");
        } else if(computerSelection === "rock") {
            computerScore++;
            alert("You loose!")
        } else {humanScore++; alert("You win!")}
    }
}
                        //function to play five rounds of rock paper scissors, calls the playRound() function inside a loop that goes five times and then based of the score after 5 rounds declare a winner
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if(humanScore > computerScore) {
        alert("Player wins!")
    } else if (computerScore > humanScore) {
        alert("Computer wins!")
    } else {alert("Its a draw!")}
}

playGame();
