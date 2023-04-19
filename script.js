// set game variables
let playerScore = 0;
let computerScore = 0;
let gameover = false;

const buttons = document.querySelectorAll('.gameBtn');
const display = document.querySelector('#display');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');
resetButton.style.display = 'none';
buttons.forEach((button) => (button.disabled = true));

// get computer choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// play a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
    if (playerScore === 5) {
      gameover = true;
    }
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    if (computerScore === 5) {
      gameover = true;
    }
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
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
  gameover = false;
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// start game
function startGame() {
  startButton.style.display = 'none';
  resetButton.style.display = 'block';
  buttons.forEach((button) => {
    if (gameover) {
      return;
    }
    button.disabled = false;
    button.addEventListener('click', () => {
      const playerChoice = button.textContent;
      const computerChoice = getComputerChoice();
      let result = playRound(playerChoice, computerChoice);
      updateScore(result);
      if (playerScore === 5 || computerScore === 5) {
        let winner = playerScore > computerScore ? 'Player' : 'Computer';
        display.textContent = `${winner} wins the game!`;
        buttons.forEach((button) => {
          button.disabled = true;
        });
        gameover = true;
      }
    });
  });
}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
