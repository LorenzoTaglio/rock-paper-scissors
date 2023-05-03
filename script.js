/*
Get a random number between 1 and 2
IF the random number is 0
    RETURN Rock
ELSE IF the random number is 1
    RETURN Paper
ELSE
    RETURN Scissors
*/
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3);
    if(randomChoice === 0)
        return "Rock";
    else if(randomChoice === 1)
        return "Paper";
    else
        return "Scissors";
}

/*
CREATE variable win and set it to null
    IF player is Rock 
        IF computer is Scissors
            SET win to true
        ELSE IF computer is Paper
    ELSE IF player is Paper
        IF computer is Rock
        ELSE IF computer Scissors
    ELSE
        IF computer is Paper
        ELSE IF computer is Rock
*/  
function playRound(playerSelection, computerSelection){
    let win;
    switch (playerSelection) {
        case "Rock":
            win = computerSelection === "Scissors" ? true
                : computerSelection ==="Paper" ? false 
                : null;
            break;
        case "Paper":
            win = computerSelection === "Rock" ? true
                : computerSelection === "Scissors" ? false
                : null;
            break;
        case "Scissors":
            win = computerSelection === "Paper" ? true
                : computerSelection === "Rock" ? false
                : null
            break;
        default:
            return "Player selection invalid.";
    }

    if(win === true)
        return "You win! " + playerSelection + " beats " + computerSelection
    else if(win === false)
        return "You lose! " + computerSelection + " beats " + playerSelection
    else if(win === null)
        return "It's a tie!"
}
