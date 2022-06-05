//define choices in game

const choice = ['rock','paper','scissors'];

//choose random value from available choices

function computerPlay() { 
    return choice[Math.floor(Math.random() * choice.length)]
}

//define player selection --> repair infinte loop, cant access cancel button

function userPlay() {
    let input = prompt('Choose your weapon: rock, paper or scissors!').toLowerCase();
    
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
       return input;
    } else {
        do input = prompt('Can\'t do that. Choose between available weapons.').toLowerCase();
        while (input !== 'rock' & input !== 'paper' & input !== 'scissors')}
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
    } else {
    return ('You lost!')
    }
}

//show results

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));