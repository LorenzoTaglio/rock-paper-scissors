const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3);
    if(randomChoice === 0)
        return "Rock";
    else if(randomChoice === 1)
        return "Paper";
    else
        return "Scissors";
}