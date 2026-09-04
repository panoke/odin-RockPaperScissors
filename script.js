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