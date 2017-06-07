'use strict';

var game = alert('Would you like to play a game?');

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
    'What two sports do I enjoy the most?'
  ];
  var answers = [];
  var userGuesses = [];
  var answerCorrect = [];
  var data = [
    questions,
    answers,
    userGuesses,
    answerCorrect
  ];

  var userName = prompt('First, what is your name?');
  console.log('User name is: ' + userName);
  /*
  var question = [];
  var answerKey = ['no',
    'yes',
    'no',
    'no',
    'yes'];
*/
//Question 1
  userGuesses[0] = prompt(questions[0]);
  console.log('Question: ' + questions[0]);
  console.log('First answer stored as: ' + userGuesses[0]);
//Question 2
  userGuesses[1] = prompt(questions[1]);
  console.log('Question: ' + questions[1]);
  console.log('Second answer stored as: ' + userGuesses[1]);
//Question 3
  userGuesses[2] = prompt(questions[2]);
  console.log('Question: ' + questions[2]);
  console.log('Third answer stored as: ' + userGuesses[2]);
//Question 4
  userGuesses[3] = prompt('Do I consider myself a morning person?');
  console.log('Forth answer stored as: ' + userGuesses[3]);
//Question 5
  userGuesses[4] = prompt('Do I have 6 siblings?');
  console.log('Fifth answer stored as: ' + userGuesses[4]);

  getLowerCase(question);
  checkAnswer(question);
  displayScore();

  function getLowerCase(question) {
    var questionLowerCase = [];
    for (var j = 0; j < 4; j++) {
      questionLowerCase[j] = question[j].toLowerCase();
    }
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
