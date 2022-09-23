const cenView = document.querySelector(".centerView");
const disBottom = document.querySelector(".displayBottom");
const playerSelectionBox = document.querySelector(".playerSelectionBox");
const computerSelectionBox = document.querySelector(".computerSelectionBox");
const winnerText = document.createElement('p');
const replayButton = document.createElement('button');
replayButton.classList.add('replayButton');

const rockImage = document.createElement("img");
rockImage.src = 'images/rock.png';
const paperImage = document.createElement("img");
paperImage.src = 'images/paper.png';
const scissorsImage = document.createElement("img");
scissorsImage.src ='images/scissors.png';
rockImage.classList.add('selectionImage');
paperImage.classList.add('selectionImage');
scissorsImage.classList.add('selectionImage');


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

function removeAllChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

function playRound(playerSelection, computerSelection) {
  removeAllChildNodes(playerSelectionBox);
  removeAllChildNodes(computerSelectionBox);
  rockImage.style.border = "2px solid #336699";
  paperImage.style.border = "2px solid #336699";
  scissorsImage.style.border = "2px solid #336699";
  if (playerSelection == computerSelection) {
    disBottom.textContent = "It's a tie! You both chose the same option.";
    if (playerSelection == "rock") {
      playerSelectionBox.appendChild(rockImage);
      let cloneRock = rockImage.cloneNode();
      computerSelectionBox.appendChild(cloneRock);
    } else if (playerSelection == "paper") {
      playerSelectionBox.appendChild(paperImage);
      let clonePaper = paperImage.cloneNode();
      computerSelectionBox.appendChild(clonePaper);
    } else if (playerSelection == "scissors") {
      playerSelectionBox.appendChild(scissorsImage);
      let cloneScissors = scissorsImage.cloneNode();
      computerSelectionBox.appendChild(cloneScissors);
    }
  } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        paperImage.style.border = "10px solid #336699"
        playerSelectionBox.appendChild(rockImage);
        computerSelectionBox.appendChild(paperImage);
        computerScore++;
        disBottom.textContent = "You Lose! Rock cannot beat paper.";
      } else {
        rockImage.style.border = "10px solid #336699"
        playerSelectionBox.appendChild(rockImage);
        computerSelectionBox.appendChild(scissorsImage);
        playerScore++;
        disBottom.textContent = "You Win! Rock slams scissors!";
      }
  } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        scissorsImage.style.border = "10px solid #336699"
        playerSelectionBox.appendChild(paperImage);
        computerSelectionBox.appendChild(scissorsImage);
        computerScore++;
        disBottom.textContent = "You Lose! Paper was cut by scissors.";
      } else {
        paperImage.style.border = "10px solid #336699"
        playerSelectionBox.appendChild(paperImage);
        computerSelectionBox.appendChild(rockImage);
        playerScore++;
        disBottom.textContent = "You Win! Paper beats rock.";
      }
  } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        rockImage.style.border = "10px solid #336699";
        playerSelectionBox.appendChild(scissorsImage);
        computerSelectionBox.appendChild(rockImage);
        computerScore++;
        disBottom.textContent = "You Lose! Scissors was slammed by rock.";
      } else {
        scissorsImage.style.border = "10px solid #336699"
        playerSelectionBox.appendChild(scissorsImage);
        computerSelectionBox.appendChild(paperImage);
        playerScore++;
        disBottom.textContent = "You Win! Scissors cut paper.";
      }
  };
  cenView.textContent = `${playerScore} : ${computerScore}`;
  game();
}

function game() {
  if (playerScore === 5) {
    winnerText.textContent = `Victory!`
    cenView.appendChild(winnerText);
    cenView.appendChild(replayButton);
    replayButton.textContent = "Again";
    buttons.forEach(button => button.removeEventListener("click", playerPlay));

  } else if (computerScore === 5) {
    winnerText.textContent = `Defeat...`
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