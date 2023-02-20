let userScore = 0;
let computerScore = 0;

// create a repeated loop
while (userScore < 5 && computerScore < 5) { 
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
        // console.log(computerChoice)
        /*
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        // Output: "rock", "paper", or "scissors"
        */
        
        // create a function for user choice
        function getUserChoice() {
            let userInput = prompt("Enter your selection:");
            // Make the user input case-insensitive
            userInput = userInput.toLowerCase();
            if (userInput === "rock") {
            return "rock";
            } else if (userInput === "paper") {
            return "paper";
            } else if (userInput === "scissors") {
                return "scissors";
            } else {
            alert ( "Wrong input. Please make your selection between the three items!");
            }
        }
        let userChoice = getUserChoice()
        //console.log(userChoice)    
        // compare the result with the computer and add one point to who wins
        // report who wins the round
        function compareResults() {
            if (userChoice === computerChoice){
                console.log("It is a tie!")
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
        }
        compareResults() ;
    }
// finish the game when some one reaches to five point
if (userScore === 5){
      alert("You Win!!!! Congrats!!!")
    } else if (computerScore === 5){
      alert("You Loose. Try Next Time.")
    }