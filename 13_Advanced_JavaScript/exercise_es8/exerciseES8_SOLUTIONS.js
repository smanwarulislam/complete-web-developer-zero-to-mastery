// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// Solution:
startLine.padStart(6);
console.log(startLine);
// Expected output:
// '     ||<- Start line'

turtle.padStart(8);
console.log(turtle);
// Expected output:
// '      🐢'

rabbit.padStart(8);
console.log(rabbit);
// Expected output:
// '      🐇'


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

// Solution:
turtle = turtle.trim().padEnd(9, '=');
// Expected output:
// '🐢======='

rabbit = rabbit.trim().padStart(9, '=');
// Expected output:
// '=======🐇'


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};
// to this:
'my name is Rudolf the raindeer'

// Solution:
Object.entries(obj).map(value => value.join(" ")).join(' ');
// Expected output:
// 'my name is Rudolf the raindeer'

// Or (alternative solution):
Object.entries(obj).map(value => {
  return value.join(" ");
}).join(' ');

// Expected output:
// 'my name is Rudolf the raindeer'