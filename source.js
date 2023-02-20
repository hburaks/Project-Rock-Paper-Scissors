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

/*
  const computerChoice = getComputerChoice();
console.log(computerChoice);
// Output: "rock", "paper", or "scissors"
*/

// create a function for user choice
function getUserChoice() {
    const userIn = prompt("Enter a number between 1 to 3:");
    const userNum = parseInt(userIn);

    // Map the user number to a choice
    if (userNum === 1) {
      return "rock";
    } else if (userNum === 2) {
      return "paper";
    } else if (userNum === 3) {
        return "scissors";
    } else {
      return "Wrong input. Please select a number not greater than 3!";
    }
  }

// compare the result with the computer
// add one point to who wins
// finish the game when some one reaches to five point