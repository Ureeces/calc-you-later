/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
// Basic Goal
const calculate = require('./calculate-back-end.js');

// // First number
// let num1 = getInput(0);
// let num2;
// let operator;

// /* First Stretch Goal
// **********************************************/
// // Second number & operator
// // Handle for 3 inputs
// if(!getInput(3)) {
//   num2 = getInput(2);
//   operator = getInput(1);
// }

// // Handle for 4 inputs
// else {
//   num2 = getInput(3);
//   operator = getInput(1) + ' ' + getInput(2);
// }
/* End First Stretch
**********************************************/

/* Begin Advanced Stretch Goal
**********************************************/
let input = [];
let i = 0;

// Array of operators
const operators =[
"+", "plus", "added to",
"-", "minus", "subtracted from",
"x", "times", "X", "multiplied by",
"/", "divide", "divided by",
"%", "modulus", "mod",
];

// Put input into array for parsing
while(getInput(i)) {
  input.push(getInput(i));
  i++
}

// Handle phrases with multiple words
checkWords(input, "added", "to");
checkWords(input, "subtracted", "from");
checkWords(input, "multiplied", "by");
checkWords(input, "divided", "by");

// Array for the phrase evaluation
let expression = [];

// Put appropriate phrases and numbers in phrase
for(let i of input) {
  if(operators.includes(i) || !isNaN(i)) {
    expression.push(i);
  }
}

let num1;
let num2;
let operator;
let len = expression.length;

num1 = expression[parseInt(0)];

// Handle for 3 length
if(len === 3) {
  num2 = parseInt(expression[2]);
  operator = expression[1];
}

// Handle for 4 length
else {
  num2 = parseInt(expression[3]);
  operator = expression[1] + ' ' + expression[2];
}

/* End Advanced Stretch Goal
**********************************************/
const calculation = calculate(num1, num2, operator);

console.log(calculation);


// Function for merging words
function checkWords(inputArray, str1, str2) {
  if(inputArray.includes(str1) && inputArray.includes(str2)) {
    let startIndex = inputArray.indexOf(str1);
    inputArray[startIndex] = str1 +  ' ' + str2;
    let str1Index = inputArray.indexOf(str1);
    let str2Index = inputArray.indexOf(str2);
    inputArray.splice(str2Index, 1);
  }
}

/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
