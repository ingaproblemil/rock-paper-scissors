const rPSArray = ["Rock", "Paper", "Scissors"] 

function getComputerChoice(max) {
    return rPSArray[Math.floor(Math.random() * 3)];
  }
  
function playRound(playerSelection, computerSelection) {
  
    if 
    (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
        return "playerPoint";

    } else if
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        return "playerPoint";
      
    } else if 
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
          return "playerPoint";

    } else if
      (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        return "computerPoint";
      
    } else if
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        return "computerPoint";

    } else if 
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        return "computerPoint";
    
    } else if 
      (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a tie!";

    } else {
        return "You must enter Rock, Paper or Scissors din dumma lilla Ulf Kristersson"
        }
      }

function game(playRound) {

}

const playerSelection = prompt();
const computerSelection = getComputerChoice(3);

const playerPoint = playRound(playerSelection, computerSelection)=="playerPoint"
const computerPoint  =playRound(playerSelection, computerSelection)=="computerPoint"


console.log(playRound(playerSelection, computerSelection));
console.log("Computer plays: "+computerSelection);
console.log("Human plays: "+playerSelection.substr(0, 1).toUpperCase()+playerSelection.substr(1).toLowerCase());