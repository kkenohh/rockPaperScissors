/*
    capitalizes the first letter of the given
    string and lowercases the rest
*/
function capitalize(string) {
    return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

/*
    returns a random int from the range given (non-inclusive)
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* 
    returns a random rock, paper, scissors selection for the computer 
*/
function getComputerChoice() {
    let choice = getRandomInt(3);
    switch (choice) {
        case 0:
            choice = "Rock";
            break;
        case 1: 
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}

/* 
    compares the users choice to the computers to decide who won the round
    or if it was a tie
*/
function playRound(player, computer) {
    if ((player == "Rock" && computer == "Paper") || 
            (player == "Paper" && computer == "Scissors") || 
            (player == "Scissors" && computer == "Rock")) {
                
        return 0;

    } else if ((computer == "Rock" && player == "Paper") || 
            (computer == "Paper" && player == "Scissors") || 
            (computer == "Scissors" && player == "Rock")) {
                
        return 1;

    } else {

        return 2;

    }
}

let playerCount = 0;
let comCount = 0;
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');

/* 
    plays a game of rock, paper, scissors, best of 5
*/
function game() {
    let player;
    let computer;
    playerCount = 0;
    comCount = 0;
    playerScore.textContent = `${playerCount}`;
    computerScore.textContent = `${comCount}`;
    alert("You will be playing a game of Rock, Paper, Scissors, best of 5. Are you ready?")

    for (let i = 0; i < 5; i++) {
        player = capitalize(prompt("Rock, Paper, or Scissors? "));
        computer = getComputerChoice();
        let result = playRound(player, computer);

        let path = helper(result, player, computer);

        while (path == 2) {
            player = capitalize(prompt("It was a tie or you suck at spelling. Go again. Rock, Paper, or Scissors? "));
            computer = getComputerChoice();
            result = playRound(player, computer);
            path = helper(result, player, computer);
        }
        
        if (path == 0) comCount++;
        playerCount += path;
        playerScore.textContent = `${playerCount}`;
        computerScore.textContent = `${comCount}`;
        if (playerCount === 3 || comCount === 3) break;
    }

    playerCount >= 3 ? console.log("You Win! Computer says: well played") : console.log("You Lose! Computer says: gg ez ur trash");
}

/* 
    helper function for game()
*/
function helper(result, player, computer) {
    if (result == 0) {
        console.log(`You Lose! ${computer} beats ${player}`);
        return 0;
    } else if (result == 1) {
        console.log(`You Win! ${player} beats ${computer}`);
        return 1;
    } else {
        return 2;
    }
}




