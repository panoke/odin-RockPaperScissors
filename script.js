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

// convert string to title case
function toTitleCase(string) {
    const stringArray = string.split("")
    stringArray[0] = stringArray[0].toUpperCase();
    return stringArray.join("")
}

// add button for each of three choices
const choices = ['Rock', 'Paper', 'Scissors']
choices.forEach((option) => {
    const newButton = document.createElement('button');
    newButton.textContent = option;

    newButton.addEventListener('click', () => {
        playRound(option, getComputerChoice())
    })

    document.body.appendChild(newButton);
})

// add div to show results
const resultsDiv = document.createElement('div');
document.body.appendChild(resultsDiv);

// declare and initialise variables to track score
let playerScore = 0;
let computerScore = 0;

// function to play a single round
function playRound (playerChoice, computerChoice) {
    // convert player choice to lower case
    playerChoice = playerChoice.toLowerCase()

    // if both select same choice draw
    if (playerChoice === computerChoice) {
        resultsDiv.innerText = `Draw! ${toTitleCase(playerChoice)} draws ${toTitleCase(computerChoice)}`
    }
    // if player has win selection declare win
    else if ((playerChoice == 'paper' && computerChoice == 'rock') || 
    (playerChoice == 'scissors' && computerChoice == 'paper') ||
    (playerChoice == 'rock' && computerChoice == 'scissors')) {
        resultsDiv.innerText = `You win! ${toTitleCase(playerChoice)} beats ${toTitleCase(computerChoice)}`
        // increment player score
        playerScore++
    }
    // else declare win for computer
    else {
        resultsDiv.innerText = `You lose! ${toTitleCase(computerChoice)} beats ${toTitleCase(playerChoice)}`
        // increment computer score
        computerScore++
    }

    // create a score element - variables may be reset before applying
    const scoreText = document.createTextNode(
    `Player Score: ${playerScore}, Computer Score: ${computerScore}`,
    );    

    // check if there's a winner
    if (computerScore >= 5 || playerScore >= 5)
    {
        let winText;
        if (computerScore > playerScore) {
                winText = document.createTextNode(
                    `Computer Wins Game!`
                );
        }
        else {
                winText = document.createTextNode(
                    `Congratulations you have won the game!`
                );
        }

        // add win text to div
        resultsDiv.appendChild(document.createElement("br"));
        resultsDiv.appendChild(winText)

        // reset game
        computerScore = 0;
        playerScore = 0;

    }

    // add score text to div
    resultsDiv.appendChild(document.createElement("br"));
    resultsDiv.appendChild(scoreText)
}

