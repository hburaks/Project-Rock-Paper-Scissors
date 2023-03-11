/* eslint-disable no-plusplus */
let userScore = 0;
let computerScore = 0;
let computerChoice;
let userChoice;

const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function resetScores() {
  userScore = 0;
  computerScore = 0;
}
function compareResults() {
  if (userChoice === computerChoice) {
    console.log('It is a tie!');
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    console.log('You Lose! Paper beats rock');
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    userScore++;
    console.log('You Win! Rock beats scissors');
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    console.log('You Lose! Scissors beats paper');
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    userScore++;
    console.log('You Win! Paper beats rock');
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    console.log('You Lose! Rock beats scissors');
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    userScore++;
    console.log('You Win! Scissors beats paper');
  }
  console.log(`User: ${userScore} Computer: ${computerScore}`);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button === scissors) {
      userChoice = 'scissors';
    } else if (button === rock) {
      userChoice = 'rock';
    } else if (button === paper) {
      userChoice = 'paper';
    }
    computerChoice = getComputerChoice();
    compareResults(computerChoice);

    if (userScore === 5) {
      console.log(
        `You Win!!!! Congrats!!! User: ${userScore} Computer: ${computerScore}`
      );
      resetScores();
    } else if (computerScore === 5) {
      console.log(
        `You Lose. Try Next Time. User: ${userScore} Computer: ${computerScore}`
      );
      resetScores();
    }
  });
});
