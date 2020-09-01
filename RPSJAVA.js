let playerScore = 0;
let cpuScore = 0;
let roundResult = 'First to 5 wins!';
let max_count = 5;

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

// function game() {
    
//     function showConfirm1() {
//         max_count = 5;
//         let playerChoice1 = prompt("What's your first choice: rock, paper, or scissors?").toLowerCase();
//         if (playerChoice1 == 'rock' || playerChoice1 == 'paper' || playerChoice1 == 'scissors') {
//             let result1 = playRound(playerChoice1, computerSelection());
//             alert(result1);
//         } else {
//             alert("Didn't get a correct value, try again. Rock, paper, or scissors?");
//             if (--max_count > 0)
//             showConfirm1()
//         }
//     }
//     showConfirm1();

function playRound(playerSelection, computerSelection) {
        if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        let result = 'You win! Rock beats scissors!';
        playerScore++;
        pscore.textContent = `${playerScore}`;
        rscore.textContent = `${result}`;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'paper')) {
        let result = "You lose! Paper beats rock!"; 
        cpuScore++;
        cscore.textContent = `${cpuScore}`;
        rscore.textContent = `${result}`;
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
        rscore.textContent = `${result}`;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'rock')) {
        let result = "You lose! Rock beats scissors!"; 
        cpuScore++;
        cscore.textContent = `${cpuScore}`;
        rscore.textContent = `${result}`;
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
        rscore.textContent = `${result}`;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'scissors')) {
        let result = "You lose! Scissors beat paper!"; 
        cpuScore++;
        cscore.textContent = `${cpuScore}`;
        rscore.textContent = `${result}`;
        return result;
        }
        else {
            let result = "Did you choose rock, paper, or scissors?";
            return result;
        }
    }
// }

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
rscore.textContent = `${roundResult}`;

resultcontainer.appendChild(rscore)
