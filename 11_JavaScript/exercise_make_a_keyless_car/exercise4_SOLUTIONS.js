// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:
// using prompt() and alert(), ask a user for their age.
var age = prompt("What is your age?");

if (Number(age) < 18) { // IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off"
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) { // IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
  alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) { // IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!"
  alert("Congratulations on your first year of driving. Enjoy the ride!");
}
// press an enter

// shows the popup
This page says
What is your age?
___ (17)

// expected output:
This page says
Sorry, you are too young to drive this car. Powering off

// again execute the code...
// press an enter

// shows the popup
This page says
What is your age?
___ (19)

// expected output:
This page says
Powering On. Enjoy the ride!

// again execute the code...
// press an enter

// shows the popup
This page says
What is your age?
___ (18)

// expected output:
This page says
Congratulations on your first year of driving. Enjoy the ride!