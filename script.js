// set game variables
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.gameBtn');
const display = document.querySelector('#display');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');

// get computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// play a round
function playRound(playerSelection, computerSelection) {
  const winText = 'You win!';
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return winText;
  } else {
    computerScore++;
    return 'You lose!';
  }
}

// update score
function updateScore(result) {
  if (result) {
    display.textContent = `${result} Player: ${playerScore} Computer: ${computerScore}`;
  } else {
    display.textContent = '';
  }
}

// reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

// start game
function startGame() {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let result = playRound(button.textContent, getComputerChoice());
      updateScore(result);
      if (playerScore === 5 || computerScore === 5) {
        let winner = playerScore > computerScore ? 'Player' : 'Computer';
        display.textContent = `${winner} wins the game!`;
        resetGame();
      }
    });
  });
}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
