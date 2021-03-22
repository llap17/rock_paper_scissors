let choicesArray = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

//GAME LOGIC
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
        document.getElementById("roundPara").innerHTML = "Player won the round!";
    }else if(
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper"))
    {
        computerScore = computerScore + 1;
        document.getElementById("roundPara").innerHTML = "Computer won the round!";
    }else{
        document.getElementById("roundPara").innerHTML = "The round is even!";
    }
}

//BUTTONS
var btnRock = document.getElementById("rock");
var btnPaper = document.getElementById("paper");
var btnScissors = document.getElementById("scissors");

btnRock.addEventListener("click", function() {
    playRound("rock", computerPlay());
});

btnPaper.addEventListener("click", function() {
    playRound("paper", computerPlay());
});

btnScissors.addEventListener("click", function() {
    playRound("scissors", computerPlay());
});

//RESULTS
var roundPara = document.createElement("p");
roundPara.setAttribute("id", "roundPara");
var element = document.getElementById("results");
element.appendChild(roundPara);
var winPara = document.createElement("p");
winPara.setAttribute("id", "winPara");
element.appendChild(winPara);

//BUTTONS & SCORE
var scorePara = document.createElement("p");
scorePara.setAttribute("id", "scorePara");
element.appendChild(scorePara);

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener('click', function() {
    scorePara.innerHTML = 
    `Player score: ${playerScore} Computer score: ${computerScore}`;
    if (playerScore >= 5) {
        document.getElementById("winPara").innerHTML = "Player wins!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        document.getElementById("winPara").innerHTML = "Computer wins!";
        playerScore = 0;
        computerScore = 0;
    } else {
        document.getElementById("winPara").innerHTML = " ";
    }
}));








