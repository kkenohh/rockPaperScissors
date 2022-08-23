function capitalize(string) {
    return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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

function game() {
    let player;
    let computer;
    let count = 0;
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

        count += path;
        if (count >= 3) {
            break;
        }
    }

    count >= 3 ? console.log("You Win! Computer says: well played") : console.log("You Lose! Computer says: gg ez ur trash");
}

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