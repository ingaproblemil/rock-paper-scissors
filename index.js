const rPSArray = ["Rock", "Paper", "Scissors"] 

function getComputerChoice(max) {
    return rPSArray[Math.floor(Math.random() * 3)];
  }
  
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

function playRound(playerSelection, computerSelection) {
 
  
    if 
    (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
      playerScore++;
      roundsPlayed++;  
      return counter();

    } else if
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        roundsPlayed++;
        return counter();
      
    } else if 
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        roundsPlayed++;
          return counter();

    } else if
      (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        roundsPlayed++;
        return counter();
      
    } else if
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        roundsPlayed++;
        return counter();

    } else if 
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        computerScore++;
        roundsPlayed++;
        return counter();
    
    } else if 
      (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        roundsPlayed++;
        return counter();

    } else {
        return "You must enter Rock, Paper or Scissors din dumma lilla Ulf Kristersson"
        }
       
      }

function counter() {

      console.log("Player: "+playerScore)
      console.log("Computer: "+computerScore) 
      console.log("Rounds played: "+roundsPlayed)
}      


const playerSelection = prompt("Make your pick: Rock, Paper or Scissors!");
const computerSelection = getComputerChoice(3);

// let playerPoint = playRound(playerSelection, computerSelection)=="playerPoint";
// let computerPoint = playRound(playerSelection, computerSelection)=="computerPoint";

let round = playRound(playerSelection, computerSelection);




// console.log(playRound(playerSelection, computerSelection));
console.log("Computer plays: "+computerSelection);
console.log("Human plays: "+playerSelection.substr(0, 1).toUpperCase()+playerSelection.substr(1).toLowerCase());