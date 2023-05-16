const buttons = document.querySelectorAll(".buttons > button");

buttons.forEach(button =>{
  button.addEventListener("click", (e)=>{console.log(getPlayerChoice(e))});
})

function getPlayerChoice(event) {
  return event.target.dataset.move
}


function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) return "Rock";
  else if (randomChoice === 1) return "Paper";
  else return "Scissors";
}
/*(NO LONGER NEEDED)
function capitalize(string) {
  if (string !== null)
    return (
      string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
    );
}
*/
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

function game() {
  let playerSelection, computerSelection;
  let playerWins = 0,
    computerWins = 0;
  let roundResults;
  for (let i = 0; i < 5; i++) {
    // Asks the user for input until it is valid (NO LONGER NEEDED)
    /*
    do {
      playerSelection = capitalize(prompt("Choose move"));
    } while (
      playerSelection !== "Rock" &&
      playerSelection !== "Paper" &&
      playerSelection !== "Scissors"
        ? (console.log("Player selection invalid."), true)
        : false
    );
    */
    computerSelection = getComputerChoice();

    roundResults = playRound(playerSelection, computerSelection);
    if (roundResults === true) {
      playerWins++;
      console.log(
        "You win! " + playerSelection + " beats " + computerSelection
      );
    } else if (roundResults === false) {
      computerWins++;
      console.log(
        "You lose! " + computerSelection + " beats " + playerSelection
      );
    } else if (roundResults === null) {
      console.log("It's a tie!");
    }
  }

  if (playerWins > computerWins) console.log("Player wins!");
  else if (computerWins > playerWins) console.log("Computer wins!");
  else console.log("Tie!");
}



// game();
