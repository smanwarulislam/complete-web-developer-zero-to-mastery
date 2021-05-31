// Make a keyless car EVEN BETTER!

// We are improving our car from the previous exercise now.

// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
  alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
}

// 1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

// Notice the benefit of having checkDriverAge() instead of copying and pasting the function every time?

// Function Declaration
// function name() {}

function checkDriverAge() {
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

checkDriverAge(); // press an enter
// expected output:

// shows the popup
// This page says
What is your age?
___ (17)

// shows the popup
// This page says
Sorry, you are too young to drive this car. Powering off

checkDriverAge();
// expected output:

// shows the popup
// This page says
What is your age?
___ (18)

// shows the popup
// This page says
Congratulations on your first year of driving. Enjoy the ride!

checkDriverAge();
// expected output:

// shows the popup
// This page says
What is your age?
___ (19)

// shows the popup
// This page says
Powering On. Enjoy the ride!

// 2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// Function Expression
// var a = function name() {}

var checkDriverAge2 = function() {
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

checkDriverAge2(); // press an enter
// expected output:

// shows the popup
// This page says
What is your age?
___ (17)

// shows the popup
// This page says
Sorry, you are too young to drive this car. Powering off

checkDriverAge2();
// expected output:

// shows the popup
// This page says
What is your age?
___ (18)

// shows the popup
// This page says
Congratulations on your first year of driving. Enjoy the ride!

checkDriverAge2();
// expected output:

// shows the popup
// This page says
What is your age?
___ (19)

// shows the popup
// This page says
Powering On. Enjoy the ride!

// BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

// return

function checkDriverAge3(age) {
  if (Number(age) < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
}

checkDriverAge3(92);
// expected output: "Powering On. Enjoy the ride!"