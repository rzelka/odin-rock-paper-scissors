//define choices in game

const choice = ['rock','paper','scissors'];

//choose random value from available choices

function computerPlay() { 
    return choice[Math.floor(Math.random() * choice.length)]
}

//define player selection

function userPlay() {
    let input = prompt('Choose your weapon: rock, paper or scissors!');
    
    if (input === null) {
        return 'escape';
    } else if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors') {
       return input.toLowerCase();
    } else {
        do {
            input = prompt('Can\'t do that. Choose between available weapons (rock, paper, scissors).');
            if (input === null) {
                return 'escape';
            } else if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors') {
                return input.toLowerCase();  
            }}
        while (input === '' || input.toLowerCase() !== 'rock' || input.toLowerCase() !== 'paper' || input.toLowerCase() !== 'scissors')}
}
//define players move

let playerSelection  = userPlay();
let computerSelection = computerPlay();

//play single game

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock'||
        playerSelection === 'paper' && computerSelection === 'paper'||
        playerSelection === 'scissors' && computerSelection === 'scissors') {
        return ('It\'s a tie! None wins.')
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'||
    playerSelection === 'paper' && computerSelection === 'rock'||
    playerSelection === 'scissors' && computerSelection === 'paper') {
    return ('You won!')
    } else if (playerSelection === 'escape') {
    return ('You escaped the battle!')
    } else {
    return ('You lost!')
    }
}

//show results

console.log("Computer pick: " + computerSelection);
console.log("Player pick: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));