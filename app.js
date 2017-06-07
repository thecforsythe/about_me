'use strict';

var game = confirm('Would you like to play a game?');

while (game) {
  runGame();
}

function runGame() {
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

  var userName = prompt('First, what is your name?');

  console.log('User name is: ' + userName);

  //Loop displays questions and collects answer
  for (var i = 0; i < questions.length; i++) {
    userGuesses[i] = prompt(questions[i]);
    console.log('Question ' + (i + 1) + ': ' + questions[i]);
    console.log('Answer stored as: ' + userGuesses[i]);
  }

  getLowerCase();
  checkAnswer();
  displayScore();

  var userGuessesLowerCase = [];
  function getLowerCase() {
    for (var j = 0; j < questions.length; j++) {
      if (userGuesses[j] !== null) {
        userGuessesLowerCase[j] = userGuesses[j].toLowerCase();
      } else {
        return userGuessesLowerCase[j] = '';
      }
    }
    return userGuessesLowerCase;
  }

//This function checks user answer is true or false, then returns out a score
  function checkAnswer(userGuessesLowerCase, answerCorrect) {
    var isAnswerCorrect = [];
    var score = 0;
    for(var i = 0; i <= questions.length; i++) {
      console.log('userGuessesLowerCase');
      if (userGuessesLowerCase[i] === answerCorrect[i]) {
        isAnswerCorrect = true;
        console.log('Answer #' + (i + 1) + ' is correct.');
        return score++;
      }
      else {
        isAnswerCorrect = false;
        console.log('Answer #' + (i + 1) + ' is incorrect.');
      }
    }
    return score;
  }

  function displayScore(score) {
    alert('You got ' + score + ' questions correct!');
  }
  game = confirm('Thank you ' + userName + ' for playing. Would you like to play again?');
}
