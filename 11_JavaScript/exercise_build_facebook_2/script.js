var database = [
  {
    username: "smraju",
    password: "supersecret"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "ingrid",
    password: "777"
  }
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "JavaScript is so cool!"
  },
  {
    username: "Mitch",
    timeline: "JavaScript is pretty cool!"
  }
];

// Let's create another function
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      // So if a user is valid
      return true;
    }
  }

  // If the user is not valid then we should return false
  return false;
}

function signIn(username, password) {
  // Looks like we need to add a looping here
  // We should add a 'for' loop
  /* for (var i = 0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      console.log(newsfeed);
    } else {
      alert("Sorry, wrong username and password!");
    }
  } */

  // So our logic here isn't right
  // What can we do to solve it?
  // Let's create another function

  // So now if the user is valid
  // Let's test this out
  // console.log(isUserValid(username, password));

  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  }

  /* if (username === database[0].username && password === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  } */
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);

// Chrome DevTools Console (See the Chrome DevTools Console)

// shows the popup
/* This page says
What's your username?
___ (ingrid) */

/* This page says
What's your password?
___ (777) */

// expected output:
// shows the popup
/* This page says
Sorry, wrong username and password! */

// We should add a 'for' loop

// shows the popup
/* This page says
What's your username?
___ (ingrid) */

/* This page says
What's your password?
___ (777) */

// expected output:
// shows the popup
/* This page says
Sorry, wrong username and password! */

// shows the popup
/* This page says
Sorry, wrong username and password! */

/* -> (3) [{…}, {…}, {…}]
-> 0: {username: 'Bobby', timeline: 'So tired from all that learning!'}
-> 1: {username: 'Sally', timeline: 'JavaScript is so cool!'}
-> 2: {username: 'Mitch', timeline: 'JavaScript is pretty cool!'}
 length: 3
-> [[Prototype]]: Array(0) */

// So now if the user is valid
// Let's test this out

// shows the popup
/* This page says
What's your username?
___ (ingrid) */

/* This page says
What's your password?
___ (777) */

// expected output:
// true

// Let's test something were not right

// shows the popup
/* This page says
What's your username?
___ (kjdhjkash) */

/* This page says
What's your password?
___ (ljhdkjhkdhasjkh) */

// expected output:
// false

// if (isUserValid(username, password)) {} else {}

// shows the popup
/* This page says
What's your username?
___ (ingrid) */

/* This page says
What's your password?
___ (777) */

// expected output:
/* -> (3) [{…}, {…}, {…}]
-> 0: {username: 'Bobby', timeline: 'So tired from all that learning!'}
-> 1: {username: 'Sally', timeline: 'JavaScript is so cool!'}
-> 2: {username: 'Mitch', timeline: 'JavaScript is pretty cool!'}
 length: 3
-> [[Prototype]]: Array(0) */

// If we enter the wrong information

// shows the popup
/* This page says
What's your username?
___ (hello) */

/* This page says
What's your password?
___ (123) */

/* This page says
Sorry, wrong username and password! */