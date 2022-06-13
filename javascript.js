// Janken! is a game between user and computer.
// Program doen not need to have interface. It's console-based. 
// User will input data by choosing one of three choices, input from a prompt.
// It is desired that the computer, will also pick one among 3 choices randomly.
// Output will be determined by the result of user and computer choices. 

// Computer will pick randomly 1 of 3 numbers.
function computerPlay() {
  let number = Math.floor(Math.random() * 3);

  // condition to associate number with rock paper scissors choice.
  if (number == 0) {
    return "rock";  
  } else if (number == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//function that plays a single round of Janken!
//player choice = comp choice -> tie
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (computerSelection == "paper") {
    return "You Lose!";
  } else {
    return "You Win!"
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));