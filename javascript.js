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
    return "It's a tie! You both chose the same option.";
   
  // rock
  } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        computerScore++;
        return "You Lose! Rock cannot beat paper.";
      } else {
        playerScore++;
         return "You Win! Rock slams scissors!";
      }
  // paper
  } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        computerScore++;
        return "You Lose! Paper was cut by scissors.";
      } else {
        playerScore++;
        return "You Win! Paper beats rock.";
      }
  // scissors
  } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        computerScore++;
        return "You Lose! Scissors was slammed by rock.";
      } else {
        playerScore++;
        return "You Win! Scissors cut paper.";
      }
  } else {
    return "Please choose between 'rock, 'paper' or scissors'!";
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
    return "no choice";
  }
}

// score
let playerScore = 0;
let computerScore = 0;

// function to play 5 rounds game
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Your score : " + playerScore)
    console.log("Computer score : " + computerScore)
  }

  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("There is no winner.");
  }
}

game();