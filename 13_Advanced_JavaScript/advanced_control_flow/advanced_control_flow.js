// JAVASCRIPT CONDITIONALS
// -----------------------
// if
// else
// else if
// ternary operator
// switch

// Advanced Control Flow

// ternary operator
// switch

// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// ternary operator

// syntax
// condition ? expr1 : expr2;

// And that is the syntax. It says, Is this (condition) true or false?
/* If it's (condition) true then provide this value (expr1).
If it's (condition) false provide this value(expr2). */

// Example

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

// expected output (run in the console):
answer;
// 'You may enter'

var answer = isUserValid(false) ? "You may enter" : "Access denied";

// expected output (run in the console):
answer;
// 'Access denied'

// Let's do a little bit more of a complicated answer
var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available");

// expected output (run in the console):
automatedAnswer;
// 'Your account # is not available'

var automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "not available");

// expected output (run in the console):
automatedAnswer;
// 'Your account # is 1234'

function condition() {
  if (isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access denied";
  }
}

var answer2 = condition();

// expected output (run in the console):
answer;
// 'You may enter'

// expected output (run in the console):
answer2;
// 'You may enter'

/* But you see that one way is a lot nicer, It's just a nice simple one-line.
A ternary operator is really really good for these 'if else' where there is a check for a condition and there are two possible expressions, that come out of it. */

// switch
// The 'switch' statement

function moveCommand(direction) {
  var whatHappens;
  
  switch (direction) {
    case "forward":
      whatHappens = "You encounter a monster";
      break;
    case "back":
      whatHappens = "You arrived home";
      break;
    case "right":
      whatHappens = "You found a river";
      break;
    case "left":
      whatHappens = "You run into a troll";
      break;
    default:
      whatHappens = "Please enter a valid direction";
  }

  return whatHappens;
}

// Now we have the 'moveCommand'
// Copy into the console
// expected output (run in the console):
window.moveCommand("forward"); // Remember 'moveCommand' now exists in the root scope which is 'window'
// 'You encounter a monster'

// expected output (run in the console):
window.moveCommand("back");
// 'You arrived home'

// expected output (run in the console):
window.moveCommand("right");
// 'You found a river'

// expected output (run in the console):
window.moveCommand("left");
// 'You run into a troll'

// expected output (run in the console):
window.moveCommand(1356123);
// 'Please enter a valid direction'

/* That's what switch statements are really good for when you have a lot of conditions.
Instead of using an 'if', 'else if', 'else if', 'else if', 'else' statement, you can use a 'switch' statement and you can see, it reads nicely. */

// If I actually do, 'break' before 'whatHappens'
function moveCommand(direction) {
  var whatHappens;
  
  switch (direction) {
    case "forward":
      break; // If I actually do, 'break' before 'whatHappens'
      whatHappens = "You encounter a monster";
      break;
    case "back":
      whatHappens = "You arrived home";
      break;
    case "right":
      whatHappens = "You found a river";
      break;
    case "left":
      whatHappens = "You run into a troll";
      break;
    default:
      whatHappens = "Please enter a valid direction";
  }

  return whatHappens;
}

// expected output (run in the console):
window.moveCommand("forward");
// undefined