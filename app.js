
//function to get a random choice of rock, paper, scissors
function getComputerChoice() {
    let draw = ['Rock', 'Paper', 'Scissors'];
    let randomDraw = draw[Math.floor(Math.random() * draw.length)];
    console.log(randomDraw);
    return randomDraw.toUpperCase();
}

/*plays a single round takes in random choice from getComputerChoice and user input
use else if to compare and declares winner*/
function playRound(computerSelection, playerSelection) {
    
    if (computerSelection === playerSelection) {
        return 'This is a Tie';
    } else if ( 
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore += 1;
        return 'You loose ' + computerSelection + ' beats ' + playerSelection;

    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore += 1;
        return 'You win ' + playerSelection + ' beats ' + computerSelection;
    }
    
}

//function to loop over and play 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Please enter 'Rock, Paper, Scissors'").toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection));
        
    }
}



playGame();
