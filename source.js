let userScore = 0;
let computerScore = 0;
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const buttons = document.querySelectorAll("button");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button === scissors) {
            userChoice= "scissors";
        } else if (button === rock) {
            userChoice= "rock";
        } else if (button === paper) {
            userChoice= "paper";
        }
        computerChoice = getComputerChoice();
        compareResults(computerChoice);

        if (userScore === 5){
            alert(`You Win!!!! Congrats!!! User: ${userScore} Computer: ${computerScore}`);
            resetScores();
        } else if (computerScore === 5){
            alert(`You Lose. Try Next Time. User: ${userScore} Computer: ${computerScore}`);
            resetScores();
        }
    });
});

function compareResults() {
    if (userChoice === computerChoice){
        console.log("It is a tie!")
        alert('It is a tie!');
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You Lose! Paper beats rock")
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        userScore++;
        console.log("You Win! Rock beats scissors")
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You Lose! Scissors beats paper")
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        userScore++;
        console.log("You Win! Paper beats rock")
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You Lose! Rock beats scissors")
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        userScore++;
        console.log("You Win! Scissors beats paper")
    }
    alert(`User: ${userScore} Computer: ${computerScore}`);
}
function resetScores() {
    userScore = 0;
    computerScore = 0;
}





/* buttons.forEach(button => {
    button.addEventListener("click", () => {
    scissors.addEventListener('click', function() {
        userChoice= "scissors";
    })
    paper.addEventListener('click', function() {
    })
    rock.addEventListener('click', function() {
        userChoice= "rock";
    })
    function getComputerChoice() {
        // Generate a random number between 0 and 2
        const randomNumber = Math.floor(Math.random() * 3);
    
        // Map the random number to a choice
        if (randomNumber === 0) {
        return "rock";
        } else if (randomNumber === 1) {
        return "paper";
        } else {
        return "scissors";
        }
    }
    let computerChoice = getComputerChoice()
    // compare the result with the computer and add one point to who wins
    // report who wins the round
    function compareResults() {
        if (userChoice === computerChoice){
            console.log("It is a tie!")
            alert('It is a tie!');
        }
        else if (userChoice === "rock" && computerChoice === "paper") {
            computerScore = (computerScore + 1);
            console.log("You Lose! Paper beats rock")
        }
        else if (userChoice === "rock" && computerChoice === "scissors") {
            userScore = (userScore + 1);
            console.log("You Win! Rock beats scissors")
        }
        else if (userChoice === "paper" && computerChoice === "scissors") {
            computerScore = (computerScore + 1);
            console.log("You Lose! Scissors beats paper")
        }
        else if (userChoice === "paper" && computerChoice === "rock") {
            userScore = (userScore + 1);
            console.log("You Win! Paper beats rock")
        }
        else if (userChoice === "scissors" && computerChoice === "rock") {
            computerScore = (computerScore + 1)
            console.log("You Lose! Rock beats scissors")
        }
        else if (userChoice === "scissors" && computerChoice === "paper") {
            userScore = (userScore + 1);
            console.log("You Win! Scissors beats paper")
        }
        alert("User: ${userScore} Computer: ${computerScore}")
        compareResults();
        alert(userScore)
        alert(computerScore)
        

        if (userScore === 5){
            alert("You Win!!!! Congrats!!! User: ${userScore} Computer: ${computerScore}")
            } else if (computerScore === 5){
            alert("You Loose. Try Next Time. User: ${userScore} Computer: ${computerScore}")
            }
        }
    });
});



 


// finish the game when some one reaches to five point */
