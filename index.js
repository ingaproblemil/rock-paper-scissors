
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

    let humanPlayed = "Human played "+playerSelection.substr(0, 1).toUpperCase()+playerSelection.substr(1).toLowerCase();
    let computerPlayed = "Computer played "+computerSelection

    counter()

    let playerPoint = counter.playerResult;
    let computerPoint = counter.computerResult;
    let round = counter.rounds;

    document.getElementById("result1").textContent = humanPlayed;
    document.getElementById("result2").textContent = computerPlayed;
    document.getElementById("result3").textContent = playerPoint;
    document.getElementById("result4").textContent = computerPoint;
    document.getElementById("result5").textContent = round;


        });
      });     

      


function playRound(playerSelection, computerSelection) {

    if  
    (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
      playerScore++;
      roundsPlayed++;
      // return counter();

    } else if
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        roundsPlayed++;
        // return counter();
      
    } else if 
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        roundsPlayed++;
        // return counter();

    } else if
      (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        roundsPlayed++;
        // return counter();
      
    } else if
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        roundsPlayed++;
        // return counter();

    } else if 
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        computerScore++;
        roundsPlayed++;
      // return counter();
    
    } else if 
      (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        roundsPlayed++;
        // return counter();

    } else {
        alert("You must enter Rock, Paper or Scissors din dumma lilla Ulf Kristersson")
        
      }
}

function counter() {
  let playerResult = "Player: "+playerScore,
      computerResult = "Computer: "+computerScore,
      rounds = "Rounds played: "+roundsPlayed;
  
  return {
  'playerResult': playerResult, 
  'computerResult': computerResult, 
  'rounds': rounds
  };
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
    

// function counter() {

//       console.log("Player: "+playerScore)
//       console.log("Computer: "+computerScore) 
//       console.log("Rounds played: "+roundsPlayed)
// }


// let playerSelection = prompt("Make your pick: Rock, Paper or Scissors!");
// let computerSelection = getComputerChoice()