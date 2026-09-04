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

// declare and initialise variables to track score
let humanScore = 0;
let computerScore = 0;

// function to play a single round
function playRound (humanChoice, computerChoice) {

    // convert player choice to lower case
    humanChoice = humanChoice.toLowerCase()

    // if player has win selection declare win
    if ((humanChoice == 'paper' && computerChoice == 'rock') || 
    (humanChoice == 'scissors' && computerChoice == 'paper') ||
    (humanChoice == 'rock' && computerChoice == 'scissors')) {
        console.log (`You win! ${humanChoice} beats ${computerChoice}`)
        // increment player score
        humanScore++
    }
    // else declare win for computer
    else {
        console.log (`You lose! ${computerChoice} beats ${humanChoice}`)
        // increment computer score
        computerScore++
    }
}

// function to play 5 rounds of game
function playGame () {

    // loop 5 times 
    for (i = 0; i < 5; i++) {
        // call human selection
        const humanSelection = getHumanChoice();
        // call computer selection
        const computerSelection = getComputerChoice();
        // validate selections and select winner, updating score
        playRound(humanSelection, computerSelection);
    }

    // if computer has higher score declare winner, otherwise set human as winner 
    if (computerScore > humanScore) {
        console.log(`Computer Wins Game! ${humanScore} to ${computerScore}.`)
    }
    else {
        console.log(`Congratulations you have won the game! ${humanScore} to ${computerScore}.`)
    }
}

playGame ()