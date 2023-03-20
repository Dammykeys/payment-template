// Your JavaScript goes here

var randomNumber = Math.floor(Math.random() * 100) + 1;

const results = document.querySelector('.results');
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var reset = document.querySelector('.gameReset');
var guessCount = 1;
var resetButton;
var progress;

guessField.focus();

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  progress = guesses.textContent;
  if (userGuess === randomNumber) {
    if (guessCount <= 3) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      progress = document.createElement('p');
      progress.textContent = 'Very good!';
      progress.style.color = 'green';
      document.querySelector('.guesses').appendChild(progress);
      lowOrHi.textContent = '';
      setGameOver();
    } else if ((guessCount <= 10) && (guessCount > 6)) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      progress = document.createElement('p');
      progress.textContent = 'Poor!';
      progress.style.color = 'red';
      document.querySelector('.guesses').appendChild(progress);
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      progress = document.createElement('p');
      progress.textContent = 'Fair!';
      progress.style.color = 'rgb(255, 187, 0)';
      document.querySelector('.guesses').appendChild(progress);
      lowOrHi.textContent = '';
      setGameOver();
    }

  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    results.style.backgroundColor = 'red';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    results.style.backgroundColor = '#ff5252';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  reset.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  reset.textContent = 'Reset';

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  results.style.backgroundColor = '#00000000';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
function gameReset(event) {
  event.preventDefault();
  guessField.focus();
  resetGame();
}
reset.addEventListener('click', gameReset);

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
})