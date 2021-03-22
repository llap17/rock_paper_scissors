let choicesArray = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;
let playerSelection = "rock";

/*function playerPlay(){
    let playerSelection = prompt("rock, paper, scissors");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        console.log ("you chose rock");
    }else if (playerSelection === "paper"){
        console.log ("you chose paper");
    }else if (playerSelection === "scissors"){
        console.log ("you chose scissors");
    }else{
        console.log ("you didn't choose a valid option");
    }
    return playerSelection;
}*/

function playerPlay(){
    if (playerSelection === "rock"){
        console.log ("you chose rock");
    }else if (playerSelection === "paper"){
        console.log ("you chose paper");
    }else if (playerSelection === "scissors"){
        console.log ("you chose scissors");
    }else{
        console.log ("you didn't choose a valid option");
    }
    return playerSelection;
}

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*choicesArray.length);
    let computerSelection = choicesArray[randomNumber];
    console.log ("computer chose " + computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock"))
    {
        playerScore = playerScore + 1;
        console.log ("player won the round");
    }else if(
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper"))
    {
        computerScore = computerScore + 1;
        console.log ("computer won the round");
    }else if(
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors"))
    {
        console.log ("the round is a draw")
    }
}

function game(){
    playRound(playerPlay(), computerPlay());
    playRound(playerPlay(), computerPlay());
    playRound(playerPlay(), computerPlay());
    playRound(playerPlay(), computerPlay());
    playRound(playerPlay(), computerPlay());
    if(playerScore > computerScore){
        console.log ("the player won the game");
    }else if(playerScore < computerScore){
        console.log ("the computer won the game");
    }else if(playerScore === computerScore){
        console.log ("the game is a draw");
    }
    playerScore = 0;
    computerScore = 0;
    //console.log("test");
    //console.log(computerScore);
    return "";
}


var buttonRock = document.getElementById("rock");
var buttonPaper = document.getElementById("paper");
var buttonScissors = document.getElementById("scissors");

buttonRock.addEventListener("click", function() {
    playerSelection = "rock";
    playRound(playerPlay(), computerPlay());
});

buttonPaper.addEventListener("click", function() {
    playerSelection = "paper";
    playRound(playerPlay(), computerPlay());
});

buttonScissors.addEventListener("click", function() {
    playerSelection = "scissors";
    playRound(playerPlay(), computerPlay());
});