// Janken! is a game between user and computer.
// Program doen not need to have interface. It's console-based. 
// User will input data by choosing one of three choices, input from a prompt.
// It is desired that the computer, will also pick one among 3 choices randomly.
// Output will be determined by the result of user and computer choices. 

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
//player choice = comp choice -> tie
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
   
  // rock
  } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        return "You Lose! Paper beats rock.";
      } else {
        return "You Win! Rock slams scissors!";
      }
  // paper
  } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        return "You Lose! Scissors cut paper.";
      } else {
        return "You Win! Paper beats rock.";
      }
  // scissors
  } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        return "You Lose! Rock slams scissors.";
      } else {
        return "You Win! Scissors cut paper.";
      }
  } else {
    return "You did not choose. Your indecisiveness has cost you a win."
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
  }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));