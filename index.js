
// Array of Rock paper and Scissors
const rPSArray = ["Rock", "Paper", "Scissors"] 

//Random computer choice
function getComputerChoice(max) {
    return rPSArray[Math.floor(Math.random() * 3)];
  }


let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
  
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let playerSelection = btn.textContent;
    let computerSelection = getComputerChoice(3);
    
    playRound(playerSelection, computerSelection);
          
    console.log("Human played "+playerSelection.substr(0, 1).toUpperCase()+playerSelection.substr(1).toLowerCase());
    console.log("Computer played "+computerSelection)
        });
      });      


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
        alert("You must enter Rock, Paper or Scissors din dumma lilla Ulf Kristersson")
        
      }
}

// endGame()

// // function endGame () {
// //     if (roundsPlayed = 5 && playerScore > computerScore) {
// //       alert("You WON!")
// //     }
// //     else if (roundsPlayed = 5 && playerScore < computerScore) {
// //       alert("You LOST!")
// //     }
// //     else if (roundsPlayed = 5) {
// //       alert ("I guess it's a tie?")
// //     }
// // }
    

function counter() {

      console.log("Player: "+playerScore)
      console.log("Computer: "+computerScore) 
      console.log("Rounds played: "+roundsPlayed)
}


// let playerSelection = prompt("Make your pick: Rock, Paper or Scissors!");
// let computerSelection = getComputerChoice()