let rPSArray = ["Rock", "Paper", "Scissors"] 

function getComputerChoice(max) {
    return rPSArray[Math.floor(Math.random() * max)];
  }
  
  console.log(getComputerChoice(3));