'use strict';

var userName = prompt('What is your name?');
console.log('User name is: ' + userName);
var game = confirm('Welcome ' + userName + '! Would you like to play a game?');
var questions = ['Am I 20 years old?',
  'Did I used to be an electrician?',
  'Is DeltaV my first exposure to programming?',
  'Do I consider myself a morning person?',
  'Do I have 6 siblings?',
  'What is my lucky number?',
  'Name one of the two sports I enjoy the most.'
];
var userGuesses = [];
var answerCorrect = ['no', //Answer 1
  'yes', //Answer 2
  'no', //Answer 3
  'no', //Answer 4
  'yes', //Answer 5
  '7', //Answer 6
  'running', //Answer 7
  'frisbee' //Also answer 7
];
var userGuessesLowerCase = [];
var score = 0;

while (game) {
  runGame();
}

function runGame() {
  //Loop displays questions and collects answer
  for (var i = 0; i < questions.length; i++) {
    userGuesses[i] = prompt(questions[i]);
    console.log('Question ' + (i + 1) + ': ' + questions[i]);
    console.log('Answer stored as: ' + userGuesses[i]);
  }

  getLowerCase();
  normalizeAnswers();
  checkAnswer();
  displayScore();
  game = confirm('Thank you ' + userName + ' for playing. Would you like to play again?');
}

function getLowerCase() {
  for (var j = 0; j < questions.length; j++) {
    if (userGuesses[j] !== null) {
      userGuessesLowerCase[j] = userGuesses[j].toLowerCase();
    }
  }
}

function normalizeAnswers() {
  for(var i = 0; i < questions.lenghth; i++) {
    if (userGuesses[i] === 'y') {
      userGuesses[i] = 'yes';
    }
    if (userGuesses[i] === 'n') {
      userGuesses[i] === 'no';
    }
  }
}

//This function checks user answer is true or false, then returns out a score
function checkAnswer() {
  console.log(userGuessesLowerCase);
  console.log(answerCorrect);
  var score = 0;
  for(var i = 0; i < questions.length; i++) {
    if (userGuessesLowerCase[i] == answerCorrect[i] ||
    userGuessesLowerCase[6] === answerCorrect[7]) {
      console.log('Answer #' + (i + 1) + ' is correct.');
      score++;
    } else {
      console.log('Answer #' + (i + 1) + ' is incorrect.');
    }
  }
}

function displayScore() {
  alert('You got ' + score + ' questions correct!');
}
