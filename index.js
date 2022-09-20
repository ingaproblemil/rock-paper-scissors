const rPSArray = ["Rock", "Paper", "Scissors"] 

function getComputerChoice(max) {
    return rPSArray[Math.floor(Math.random() * 3)];
  }
  
  // console.log(getComputerChoice());
  



function playRound(playerSelection, computerSelection) {
    
    if 
    (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
        return "You win! Rock beats scissors!";

    } else if
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper'){
        return "You win! Scissors beats paper!";
      
    } else if 
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
          return "You win! Paper beats rock!";

    } else if
      (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        return "You lose! Paper beats rock!"
      
    } else if
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        return "You lose! Scissors beats paper!"

    } else if 
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        return "You lose! Rocks beats scissors!"
    
    } else {
        return "It's a tie!"
      }
}

function game(playRound) {}

const playerSelection = prompt();
const computerSelection = getComputerChoice(3);

console.log(playRound(playerSelection, computerSelection));
console.log("Computer plays: "+computerSelection)
console.log("Human plays: "+playerSelection)