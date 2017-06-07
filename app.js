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
  var answers = [];
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
  var data = [
    questions,
    answers,
    userGuesses,
    answerCorrect
  ];

  var userName = prompt('First, what is your name?');
  console.log('User name is: ' + userName);
  for (var i = 0; i < questions.length; i++) {
//Question 1
    userGuesses[i] = prompt(questions[i]);
    console.log('Question: ' + questions[i]);
    console.log('Answer stored as: ' + userGuesses[i]);
  }

  getLowerCase(userGuesses);
  checkAnswer(question);
  displayScore();

  function getLowerCase() {
    var userGuessesLowerCase = [];
    for (var j = 0; j < questions.length; j++) {
      userGuessesLowerCase[j] = userGuesses[j].toLowerCase();
    }
    return userGuessesLowerCase;
  }

//This function checks user answer is true or false
  function checkAnswer(questionLowerCase) {
    var isAnswerCorrect = [];
    var score = 0;
    for(var i = 0; i <= question.length; i++) {
      if (questionLowerCase[i] === answerKey[i]) {
        isAnswerCorrect = true;
        console.log('Answer #' + (i + 1) + ' is correct.');
        return score++;
      }
      else {
        isAnswerCorrect = false;
        console.log('Answer #' + (i + 1) + ' is incorrect.');
      }
    }
  }

  function displayScore(score) {
    alert('You got ' + score + ' questions correct!');
  }
  game = confirm('');
}
