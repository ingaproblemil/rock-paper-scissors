
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

    let playerResult = "Human score: "+playerScore;
    let computerResult = "Computer score: "+computerScore;
    let rounds = "Rounds played: "+roundsPlayed;

    document.getElementById("result1").textContent = humanPlayed;
    document.getElementById("result2").textContent = computerPlayed;
    document.getElementById("result3").textContent = playerResult;
    document.getElementById("result4").textContent = computerResult;
    document.getElementById("result5").textContent = rounds;

    if (roundsPlayed == 5 && playerScore > computerScore) {
      document.getElementById("endGame").textContent = "You WON!";
      return;
    } else if (roundsPlayed == 5 && playerScore < computerScore) {
      document.getElementById("endGame").textContent = "Computer WON!";
      return;
    } else if (roundsPlayed == 5 && playerScore == computerScore) {
      document.getElementById("endGame").textContent = "TIE";
      return;
    }

        });
      });     

      


function playRound(playerSelection, computerSelection) {

    if  
    (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
      playerScore++;
      roundsPlayed++;
      

    } else if
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        roundsPlayed++;
        
      
    } else if 
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        roundsPlayed++;
        

    } else if
      (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        roundsPlayed++;
        
      
    } else if
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        roundsPlayed++;
        

    } else if 
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        computerScore++;
        roundsPlayed++;
      
    
    } else if 
      (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        roundsPlayed++;
        

    } else {
        alert("You must enter Rock, Paper or Scissors din dumma lilla Ulf Kristersson")
        
      }
}
