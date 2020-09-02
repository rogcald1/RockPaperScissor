let playerScore = 0;
let cpuScore = 0;
let roundResult = '';

let computerSelection = function() {
    let ranNum = Math.floor(Math.random() * 3);
    switch(ranNum) {
        case 0:
        play = "rock";
        break;
        case 1: 
        play = "paper";
        break;
        case 2:
        play = "scissors";
        break;
    }
    return play;
};

function playRound(playerSelection, computerSelection) {
        for (; (playerScore < 5) && (cpuScore < 5);) {
        if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        let result = 'You win! Rock beats scissors!';
        playerScore++;
        pscore.textContent = `${playerScore}`;
        if (playerScore == 5) {
            rscore.textContent = 'You win!';
        } else {
        rscore.textContent = `${result}`;
        }
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'paper')) {
        let result = "You lose! Paper beats rock!"; 
        cpuScore++;
        cscore.textContent = `${cpuScore}`;
        if (cpuScore == 5) {
            rscore.textContent = 'CPU wins :[';
        } else {
        rscore.textContent = `${result}`;
        }
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'rock')) {
        let result = "It's a tie - rock and rock!"; 
        rscore.textContent = `${result}`;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        let result = "You win! Scissors beats paper!"; 
        playerScore++;
        pscore.textContent = `${playerScore}`;
        if (playerScore == 5) {
            rscore.textContent = 'You win!';
        } else {
        rscore.textContent = `${result}`;
        }
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'rock')) {
        let result = "You lose! Rock beats scissors!"; 
        cpuScore++;
        cscore.textContent = `${cpuScore}`;
        if (cpuScore == 5) {
            rscore.textContent = 'CPU wins :[';
        } else {
        rscore.textContent = `${result}`;
        }        
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'scissors')) {
        let result = "It's a tie - scissors and scissors!"; 
        rscore.textContent = `${result}`;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'paper')) {
        let result = "It's a tie - paper and paper!"; 
        rscore.textContent = `${result}`;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        let result = "You win! Paper beats rock!";
        playerScore++;
        pscore.textContent = `${playerScore}`;
        if (playerScore == 5) {
            rscore.textContent = 'You win!';
        } else {
        rscore.textContent = `${result}`;
        }
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'scissors')) {
        let result = "You lose! Scissors beat paper!"; 
        cpuScore++;
        cscore.textContent = `${cpuScore}`;
        if (cpuScore == 5) {
            rscore.textContent = 'CPU wins :[';
        } else {
        rscore.textContent = `${result}`;
        }        
        return result;
        }
        else {
            let result = "Did you choose rock, paper, or scissors?";
            return result;
        }
    }
}

const buttons = document.getElementById("choices");
buttons.addEventListener("click",function(e){
   if (e.target == rock) {
       let playerChoice = "rock";
       let result1 = playRound(playerChoice, computerSelection());
   } else if (e.target == paper) {
       let playerChoice = "paper";
       let result1 = playRound(playerChoice, computerSelection());
   } else if (e.target == scissors) {
       let playerChoice = "scissors";
       let result1 = playRound(playerChoice, computerSelection());
   }
})


const pcontainer = document.querySelector(".playerscore");
const pscore = document.createElement('p');
pscore.textContent = `${playerScore}`;
pcontainer.appendChild(pscore);

const scontainer = document.querySelector(".CPUscore");
const cscore = document.createElement('p');
cscore.textContent = `${cpuScore}`;
scontainer.appendChild(cscore);

const resultcontainer = document.querySelector(".roundresult");
const rscore = document.createElement('p');
rscore.textContent = `First to 5, wins!`
resultcontainer.appendChild(rscore)
