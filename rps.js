// main text selector
const mainText = document.querySelector('#main-text');

// icon selector
const playerSelect = document.querySelector('.player.icon');
const computerSelect = document.querySelector('.computer.icon');

// button selector
const buttons = document.querySelectorAll('.button');

buttons.forEach( button => {
    button.addEventListener('click', playRound)
});

// score selector
const playerScore = document.querySelector('.player.points');
const computerScore = document.querySelector('.computer.points');

// name selector
const playerName = document.querySelector('.player.name');
const computerName = document.querySelector('.computer.name');

// reset selector
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);

// global variables
const options = {
    '0': 'Rock',
    '1': 'Paper',
    '2': 'Scissors'
}
let playerCount = 0;
let comCount = 0;

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
            computerSelect.innerHTML = '<i class="icon fa-regular fa-hand-back-fist fa-8x"></i>';
            break;
        case 1: 
            computerSelect.innerHTML = '<i class="icon fa-regular fa-hand fa-8x"></i>';
            break;
        case 2:
            computerSelect.innerHTML = '<i class="icon fa-regular fa-hand-scissors fa-8x"></i>';
            break;
    }
    return choice;
}

function getPlayerChoice(word) {
    const rockRegex = new RegExp('rock.+');
    const paperRegex = new RegExp('paper.+');
    const scissorsRegex = new RegExp('scissors.+');
    let choice;
    if (word.match(rockRegex)) {
        playerSelect.innerHTML = '<i class="icon fa-regular fa-hand-back-fist fa-8x"></i>';
        choice = 0;
    } else if (word.match(paperRegex)) {
        playerSelect.innerHTML = '<i class="icon fa-regular fa-hand fa-8x"></i>';
        choice = 1;
    } else if (word.match(scissorsRegex)) {
        playerSelect.innerHTML = '<i class="icon fa-regular fa-hand-scissors fa-8x"></i>';
        choice = 2;
    }
    return choice;
}

/* 
    compares the users choice to the computers to decide who won the round
    or if it was a tie
*/
function playRound(e) {
    let player = getPlayerChoice(e.target.className);
    let computer = getComputerChoice();
    let playerConvert = options[player + ''];
    let comConvert = options[computer + ''];

    if ((player == 0 && computer == 1) || 
        (player == 1 && computer == 2) || 
        (player == 2 && computer == 0)) {
            
        comCount++;
        computerScore.textContent = `${comCount}`;
        computerName.classList.remove('red');
        playerName.classList.remove('green');
        computerName.classList.add('green');
        playerName.classList.add('red');
        if (comCount === 5) {
            mainText.textContent = 'You lost! Hit "Reset Game" to play again!';
        } else {
            mainText.textContent = `You lost this round. ${comConvert} beats ${playerConvert}`;
        }
    } else if ((computer == 0 && player == 1) || 
            (computer == 1 && player == 2) || 
            (computer == 2 && player == 0)) {
                
        playerCount++;
        playerScore.textContent = `${playerCount}`;
        computerName.classList.remove('green');
        playerName.classList.remove('red');
        computerName.classList.add('red');
        playerName.classList.add('green');
        if (playerCount === 5) {
            mainText.textContent = 'You won! Hit "Reset Game" to play again!';
        } else {
            mainText.textContent = `You won this round. ${playerConvert} beats ${comConvert}`;
        }
    } else {

        mainText.textContent = "We tied. Go again.";

    }
    if (playerCount == 5 || comCount == 5) {
        buttons.forEach(button => button.disabled = true);
    }
    
}

function resetGame() {
    mainText.innerHTML = 'Rock, Paper, Scissors. First to 5. <span class="tertiary">Ready?</span>';
    playerSelect.innerHTML = '';
    computerSelect.innerHTML = '';
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    comCount = 0;
    playerCount = 0;
    buttons.forEach(button => button.disabled = false);
    computerName.classList.remove('green');
    playerName.classList.remove('red');
    computerName.classList.remove('red');
    playerName.classList.remove('green');
}