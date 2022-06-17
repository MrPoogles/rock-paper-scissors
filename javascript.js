// Computer will pick randomly 1 of 3 numbers.
function computerPlay() {
  let choice = Math.floor(Math.random() * 3);

  // condition to associate number with rock paper scissors choice.
  if (choice == 0) {
    return "rock";  
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//function that plays a single round of Janken!
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie! You both choose the same option.");
   
  // rock
  } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        console.log("You Lose! Rock cannot beat paper.");
      } else {
        console.log("You Win! Rock slams scissors!");
      }
  // paper
  } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        console.log("You Lose! Paper was cut by scissors.");
      } else {
        console.log("You Win! Paper beats rock.");
      }
  // scissors
  } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        console.log("You Lose! Scissors was slammed by rock.");
      } else {
        console.log("You Win! Scissors cut paper.");
      }
  } 
}

// function to input player choice via promptbox
function playerPlay() {
  let playerChoice = prompt("Please select between 'rock', 'paper', or 'scissors'");
  if (playerChoice.toLowerCase() == "rock") {
    return "rock";
  } else if (playerChoice.toLowerCase() == "paper") {
    return "paper";
  } else if (playerChoice.toLowerCase() == "scissors") {
    return "scissors";
  } else {
    console.log("Please choose between 'rock, 'paper' or scissors'!");
  }
}


let playerSelection = playerPlay();
let computerSelection = computerPlay();

// function to play 5 round game
function game() {
  playRound(playerSelection, computerSelection);
}

game();