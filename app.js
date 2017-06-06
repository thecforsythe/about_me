'use strict';

alert('Would you like to play a game?');
var userName = prompt('First, what is your name?');

var question = [];
var answer = ['no' || 'n',
  'yes' || 'y',
  'no' || 'n',
  'no' || 'n',
  'yes' || 'y'];

//Question 1
question[0] = prompt('Am I 20 years old?');
console.log('First answer stored as: ' + question[0]);
//Question 2
question[1] = prompt('Did I used to be an electrician?');
console.log('Second answer stored as: ' + question[1]);
//Question 3
question[2] = prompt('Is DeltaV Codeschool my first exposure to programming/web development?');
console.log('Third answer stored as: ' + question[2]);
//Question 4
question[3] = prompt('Do I consider myself a morning person?');
console.log('Forth answer stored as: ' + question[3]);
//Question 5
question[4] = prompt('Do I have 6 siblings?');
console.log('Fifth answer stored as: ' + question[4]);

getLowerCase(question);
checkAnswer(question);

function getLowerCase(question) {
  var questionLowerCase = [];
  for (var j = 0; j < 4; j++) {
    questionLowerCase[j] = question[j].toLowerCase();
  }
}

//This function checks user answer and displays it, as well as whether the answer is true or false
function checkAnswer(questionLowerCase) {
  var isAnswerCorrect = [];
  for(var i = 0; i <= 4; i++) {
    if (questionLowerCase[i] === answer[i]) {
      isAnswerCorrect;
      console.log('Answer #' + (i + 1) + ' is correct.');
    }
    else {
      isAnswerCorrect = false;
      console.log('Answer #' + (i + 1) + ' is incorrect.');
    }
  }
}

function displayScore()
