'use strict';

alert('Would you like to play a game?');
var userName = prompt('First, what is your name?');

var question = [];
var answer = [no, yes, no, no, yes];
function displayQuestion() {
  for (i = 0; i <= 4; i++)
  question[i];
  
}
//Question 1
question[0] = prompt('Am I 20 years old?');
//Question 2
question[1] = prompt('Did I used to be an electrician?');
//Question 3
question[2] = prompt('Is DeltaV Codeschool my first exposure to programming/web development?');
//Question 4
question[3] = prompt('Do I consider myself a morning person?');
//Question 5
question[4] = prompt('')
//This function checks user answer and displays it, as well as whether the answer is true or false
function checkAnswer(){
  if (question[i].toLowerCase() === answer[i].toLowerCase()) {
    return alert('Correct!')

  }
}
