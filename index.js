let rPSArray = ["Rock", "Paper", "Scissors"] 

function getComputerChoice(max) {
    return rPSArray[Math.floor(Math.random() * max)];
  }
  
  console.log(getComputerChoice(3));

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "Scissors")) {
        
        return "WIN";
        } else {

        return "You Lose! Paper beats Rock!";
} }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));