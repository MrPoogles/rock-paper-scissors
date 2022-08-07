const cenView = document.querySelector(".centerView");
const disBottom = document.querySelector(".displayBottom");
const winnerText = document.createElement('p');
const replayButton = document.createElement('button');
replayButton.classList.add('replayButton');

const buttons = document.querySelectorAll(".button");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";  
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const playerPlay = function(e) {
  let playerSelection = e.target.value;
  playRound(playerSelection, computerPlay());
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    disBottom.textContent = "It's a tie! You both chose the same option.";   
  } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        computerScore++;
        disBottom.textContent = "You Lose! Rock cannot beat paper.";
      } else {
        playerScore++;
        disBottom.textContent = "You Win! Rock slams scissors!";
      }
  } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        computerScore++;
        disBottom.textContent = "You Lose! Paper was cut by scissors.";
      } else {
        playerScore++;
        disBottom.textContent = "You Win! Paper beats rock.";
      }
  } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        computerScore++;
        disBottom.textContent = "You Lose! Scissors was slammed by rock.";
      } else {
        playerScore++;
        disBottom.textContent = "You Win! Scissors cut paper.";
      }
  };
  cenView.textContent = `${playerScore} : ${computerScore}`;
  game();
}

function game() {
  if (playerScore === 5) {
    winnerText.textContent = `Player Victory! Play again?`
    cenView.appendChild(winnerText);
    cenView.appendChild(replayButton);
    replayButton.textContent = "Again";
    buttons.forEach(button => button.removeEventListener("click", playerPlay));

  } else if (computerScore === 5) {
    winnerText.textContent = `Player Loss! Play again?`
    cenView.appendChild(winnerText);
    cenView.appendChild(replayButton);
    replayButton.textContent = "Again"; 
    buttons.forEach(button => button.removeEventListener("click", playerPlay));
  }
}

function replay() {
  location.reload();
}

buttons.forEach(button => button.addEventListener("click", playerPlay))
replayButton.addEventListener('click', replay)