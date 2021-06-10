var database = [
  {
    username: "smraju",
    password: "supersecret"
  }
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "JavaScript is so cool!"
  }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);

// Chrome DevTools Console (See the Chrome DevTools Console)

// shows the popup
/* This page says
What's your username?
___ (smraju) */

/* This page says
What's your password?
___ (supersecret) */

// expected output:
/* -> (2) [{…}, {…}]
  -> 0: {username: "Bobby", timeline: "So tired from all that learning!"}
  -> 1: {username: "Sally", timeline: "JavaScript is so cool!"}
     length: 2
  -> __proto__: Array(0) */

// Let's also try out the else statement in case we messed up our information

// shows the popup
/* This page says
What's your username?
___ (smraju) */

/* This page says
What's your password?
___ (123) */

// expected output:
// shows the popup
/* This page says
Sorry, wrong username and password! */