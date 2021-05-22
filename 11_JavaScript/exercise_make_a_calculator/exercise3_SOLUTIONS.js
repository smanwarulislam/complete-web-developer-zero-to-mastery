// Chrome DevTools Console (See the Chrome DevTools Console)

// Make a Calculator! using prompt(), and variables, make a program that does the following:

// 1. Prompts the user for the first number.
// 2. Stores that the first number.
var firstNumber = prompt("Please provide the first number");
// press an enter

This page says // shows the popup
Please provide the first number
___ (10)

// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.
var secondNumber = prompt("Please provide the second number");
// press an enter

This page says // shows the popup
Please provide the second number
___ (15)

var sum = Number(firstNumber) + Number(secondNumber);

alert("Sum: " + sum);
// press an enter

This page says // shows the popup
Sum: 25

// BONUS: Make a program that can subtract, multiply, and also divide!

var a = 6;
var b = 3;

// subtract
var subtraction = a - b;
subtraction;
// expected output: 3

// multiply
var multiplication = a * b;
multiplication;
// expected output: 18

// divide
var divide = a / b;
divide;
// expected output: 2