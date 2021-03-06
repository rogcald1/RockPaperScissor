let playerScore = 0;
let cpuScore = 0;
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

function game() {
    playerScore = 0;
    cpuScore = 0;
    alert('Let\'s play five games of Rock, Paper, Scissors!');
    
    function showConfirm1() {
        max_count = 5;
        let playerChoice1 = prompt("What's your first choice: rock, paper, or scissors?").toLowerCase();
        if (playerChoice1 == 'rock' || playerChoice1 == 'paper' || playerChoice1 == 'scissors') {
            let result1 = playRound(playerChoice1, computerSelection());
            alert(result1);
        } else {
            alert("Didn't get a correct value, try again. Rock, paper, or scissors?");
            if (--max_count > 0)
            showConfirm1()
        }
    }
    showConfirm1();

    function showConfirm2() {
        max_count = 5;
        let playerChoice2 = prompt("What's your second choice: rock, paper, or scissors?").toLowerCase();
        if (playerChoice2 == 'rock' || playerChoice2 == 'paper' || playerChoice2 == 'scissors') {
            let result2 = playRound(playerChoice2, computerSelection());
            alert(result2);
        } else {
            alert("Didn't get a correct value, try again. Rock, paper, or scissors?");
            if (--max_count > 0)
            showConfirm2()
        }
    }
    showConfirm2();

    function showConfirm3() {
        max_count = 5;
        let playerChoice3 = prompt("What's your third choice: rock, paper, or scissors?").toLowerCase();
        if (playerChoice3 == 'rock' || playerChoice3 == 'paper' || playerChoice3 == 'scissors') {
            let result3 = playRound(playerChoice3, computerSelection());
            alert(result3);
        } else {
            alert("Didn't get a correct value, try again. Rock, paper, or scissors?");
            if (--max_count > 0)
            showConfirm3()
        }
    }
    showConfirm3();

    function showConfirm4() {
        max_count = 5;
        let playerChoice4 = prompt("What's your fourth choice: rock, paper, or scissors?").toLowerCase();
        if (playerChoice4 == 'rock' || playerChoice4 == 'paper' || playerChoice4 == 'scissors') {
            let result4 = playRound(playerChoice4, computerSelection());
            alert(result4);
        } else {
            alert("Didn't get a correct value, try again. Rock, paper, or scissors?");
            if (--max_count > 0)
            showConfirm4()
        }
    }
    showConfirm4();

    function showConfirm5() {
        max_count = 5;
        let playerChoice5 = prompt("What's your fifth choice: rock, paper, or scissors?").toLowerCase();
        if (playerChoice5 == 'rock' || playerChoice5 == 'paper' || playerChoice5 == 'scissors') {
            let result5 = playRound(playerChoice5, computerSelection());
            alert(result5);
        } else {
            alert("Didn't get a correct value, try again. Rock, paper, or scissors?");
            if (--max_count > 0)
            showConfirm5()
        }
    }
    showConfirm5();
   
    alert(`Your score: ${playerScore}. CPU score: ${cpuScore}`);

function playRound(playerSelection, computerSelection) {
        if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        let result = 'You win! Rock beats scissors!';
        playerScore++;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'paper')) {
        let result = "You lose! Paper beats rock!"; 
        cpuScore++;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'rock')) {
        let result = "It's a tie - rock and rock!"; 
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        let result = "You win! Scissors beats paper!"; 
        playerScore++;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'rock')) {
        let result = "You lose! Rock beats scissors!"; 
        cpuScore++;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'scissors')) {
        let result = "It's a tie - scissors and scissors!"; 
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'paper')) {
        let result = "It's a tie - paper and paper!"; 
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        let result = "You win! Paper beats rock!";
        playerScore++;
        return result;
        }
        else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'scissors')) {
        let result = "You lose! Scissors beat paper!"; 
        cpuScore++;
        return result;
        }
        else {
            let result = "Did you choose rock, paper, or scissors?";
            return result;
        }
    }
}
