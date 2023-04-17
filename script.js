function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return 'rock';
  } else if (result === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  const winText = 'You win!';
  if (playerSelection === computerSelection) {
    return 'Match!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return winText;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return winText;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return winText;
  } else {
    return 'You lose!';
  }
}

function getInput() {
  const validInputs = ['rock', 'paper', 'scissors'];
  let input = prompt('Rock Paper Scissors?').toLowerCase();
  while (!validInputs.includes(input)) {
    alert('Wrong input!');
    input = prompt('Rock Paper Scissors?').toLowerCase();
  }
  return input;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
  let winCount = 0;
  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const playerSelection = getInput();
    const computerSelection = getComputerChoice();
    console.log("Computer's guess: ", capitalizeFirstLetter(computerSelection));
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === 'You win!') {
      winCount++;
    }
  }
  return winCount;
}

console.log('Your Score: ', game());
