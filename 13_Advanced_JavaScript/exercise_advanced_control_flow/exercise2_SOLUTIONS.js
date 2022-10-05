// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// #1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}

// #1
// ternary operator
var experiencePoints = winBattle() ? 10 : 1;

// Using this function, answer the questions below:
function moveCommand(direction) {
  var whatHappens;

  switch (direction) {
    case "forward":
      break;
      whatHappens = "you encounter a monster";
    case "back":
      whatHappens = "you arrived home";
      break;
      break;
    case "right":
      return whatHappens = "you found a river";
      break;
    case "left":
      break;
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }

  return whatHappens;
}

// #2 return value when moveCommand("forward");

// #3 return value when moveCommand("back");

// #4 return value when moveCommand("right");

// #5 return value when moveCommand("left");

// BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// switch
// The 'switch' statement

// #2 return value when moveCommand("forward");
// expected output (run in the console):
window.moveCommand("forward");
// undefined

// #3 return value when moveCommand("back");
// expected output (run in the console):
window.moveCommand("back");
// 'you arrived home'

// #4 return value when moveCommand("right");
// expected output (run in the console):
window.moveCommand("right");
// 'you found a river'

// #5 return value when moveCommand("left");
// expected output (run in the console):
window.moveCommand("left");
// undefined