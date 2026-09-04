// function to return random choice of rock, paper, scissors
function getComputerChoice () {
    randomValue = Math.floor(Math.random() * 3) + 1;
    switch (randomValue) {
        case 1: 
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3: 
            return 'scissors'
            break; 
        }
}

// function to return human choice
function getHumanChoice () {
    return prompt("Enter Choice");
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()

    if ((humanChoice == 'paper' && computerChoice == 'rock') || 
    (humanChoice == 'scissors' && computerChoice == 'paper') ||
    (humanChoice == 'rock' && computerChoice == 'scissors')) {
        console.log (`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++
    }
    else {
        console.log (`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);