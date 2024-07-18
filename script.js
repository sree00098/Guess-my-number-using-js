'use strict';
let x = 20;
let y = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter the number please';
  } else if (guess === secretNumber) {
    if (x > y) {
      y = x;
      document.querySelector('.highscore').textContent = y;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.score').textContent = x++;
    ocument.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      'you have guessed it right';
    
  } else if (guess > secretNumber) {
    if (x > 1) {
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = --x;
      document.querySelector('.message').textContent = 'Too high!!';
      document.querySelector('.score').textContent = x;
    } else {
      document.querySelector('.message').textContent = 'You have lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (x > 1) {
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = --x;
      document.querySelector('.message').textContent = 'Too low!!';
      document.querySelector('.score').textContent = x;
    } else {
      document.querySelector('.message').textContent = 'You have lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  //console.log('hii');
  x = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = x;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'start again';
   document.querySelector('.highscore').textContent=y;
});
