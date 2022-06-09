//choose random value from available choices

function computerPlay() { 
    return choice[Math.floor(Math.random() * choice.length)]
}

//define player selection

function userPlay() {

    let input = prompt('Choose your weapon: rock, paper or scissors!');
    if (input === null) {
        return 'escape'
    } else if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors') {
       return input.toLowerCase()
    } else {
        do {
            input = prompt('Can\'t do that. Choose between available weapons (rock, paper, scissors).');
            if (input === null) {
                return 'escape'
            } else if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors') {
                return input.toLowerCase()
            }}
        while (input === '' || input.toLowerCase() !== 'rock' || input.toLowerCase() !== 'paper' || input.toLowerCase() !== 'scissors')}
}

//play single game

function playRound(playerSelection,computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock'||
        playerSelection === 'paper' && computerSelection === 'paper'||
        playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a tie! None wins.'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'||
    playerSelection === 'paper' && computerSelection === 'rock'||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You won!'
    } else if (playerSelection === 'escape') {
        return 'You escaped the battle!'
    } else {
        return 'You lost!'
    } 
}

//keeping score

function whoWon() {
    if (playRound(playerSelection,computerSelection) === 'You won!') {
        playerScore++;
    } else if (playRound(playerSelection,computerSelection) === 'You lost!') {
        computerScore++;
    } else {
        return
    }
}

//play 5 games in a row

function game() {

    for (i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = userPlay();
        playRound(playerSelection,computerSelection);
        whoWon();
        console.log('Computer pick: ' + computerSelection);
        console.log('Player pick: ' + playerSelection);
        console.log('Computer score: ' + computerScore);
        console.log('Player score: ' + playerScore);
    }
}

//defines a winner

function winner(computerScore, playerScore) {
    if (playerScore>computerScore) {
        return 'Congrats! You win against the machine!'
    }
    if (playerScore<computerScore) {
        return 'I\'m sorry, you lose. Machine beat you!'
    } 
}

//define choices in game

const choice = ['rock','paper','scissors'];

//define moves of the players

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//call a game

game();
console.log(winner(computerScore, playerScore));