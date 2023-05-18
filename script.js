const buttons = document.querySelectorAll(".buttons > button");
const retry = document.querySelector(".retry");
const result = document.querySelector(".result");
const pWins = document.querySelector(".pWins");
const cpWins = document.querySelector(".cpWins");
const hands = document.querySelectorAll(".img-container");
let computerWins = 0, playerWins = 0;
retry.classList.add("hidden");


function displayScore(){
  pWins.textContent = playerWins;
  cpWins.textContent = computerWins;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    game(e);
  });
});

retry.addEventListener("click", event =>{
  computerWins = 0;
  playerWins = 0;
  displayScore();
  retry.classList.replace("visible","hidden");
})

function clearHands(){
  hands.forEach(handContainer=>{
    for(let i=0; i< handContainer.children.length;i++){
      handContainer.children[i].classList.add("hidden");
    }
  })
}

function getPlayerChoice(event) {
  return event.target.dataset.move;
}

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) return "Rock";
  else if (randomChoice === 1) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let win;
  switch (playerSelection) {
    case "Rock":
      win =
        computerSelection === "Scissors"
          ? true
          : computerSelection === "Paper"
          ? false
          : null;
      break;
    case "Paper":
      win =
        computerSelection === "Rock"
          ? true
          : computerSelection === "Scissors"
          ? false
          : null;
      break;
    case "Scissors":
      win =
        computerSelection === "Paper"
          ? true
          : computerSelection === "Rock"
          ? false
          : null;
      break;
  }

  return win;
}

function game(event) {
  if(playerWins === 5 || computerWins === 5){
    return;
  }
  
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice(event);

  let cpHand = document.querySelector(`.image.right img[data-move=${computerSelection}`);
  let pHand = document.querySelector(`.image.left img[data-move=${playerSelection}`);
  
  clearHands();

  cpHand.classList.remove("hidden");
  pHand.classList.remove("hidden");

  roundResults = playRound(playerSelection, computerSelection);
  if (roundResults === true) {
    playerWins++;
    result.textContent = "You win! " + playerSelection + " beats " + computerSelection;
  } else if (roundResults === false) {
    computerWins++;
    result.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
  } else if (roundResults === null) {
    result.textContent = "It's a tie!";
  }

  displayScore();

  if(playerWins === 5){
    retry.classList.replace("hidden","visible");
    result.textContent = "Player Wins!";
  }
  else if(computerWins === 5){
    retry.classList.replace("hidden","visible");
    result.textContent = "Computer Wins!";
  }
  /*
  if (playerWins > computerWins) console.log("Player wins!");
  else if (computerWins > playerWins) console.log("Computer wins!");
  else console.log("Tie!");
  */
}
// game();
displayScore();