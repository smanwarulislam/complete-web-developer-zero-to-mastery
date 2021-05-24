/* JAVASCRIPT CONDITIONALS
-----------------------
if
else
else if
ternary operator
switch */

// Chrome DevTools Console (See the Chrome DevTools Console)

// if

var nickname = "Billy";

if (nickname === "Billy") {
  alert("Hi Billy!");
}
// press an enter

// shows the popup
This page says
Hi Billy!

nickname = "Susy";
// expected output: "Susy"

if (nickname === "Billy") {
  alert("Hi Billy!");
}
// press an enter

// expected output: (nothing happens) (no alert)

// else

if (nickname === "Billy") {
  alert("Hi Billy!");
} else {
  alert("Hmm I don't know you");
}
// press an enter

// shows the popup
This page says
Hmm I don't know you

nickname;
// expected output: "Susy"

nickname = "Billy";
// expected output: "Billy"

if (nickname === "Billy") {
  alert("Hi Billy!");
} else {
  alert("Hmm I don't know you");
}
// press an enter

// shows the popup
This page says
Hi Billy!

// else if

if (nickname === "Billy") {
  alert("Hi Billy!");
} else if (nickname === "Susy") {
  alert("Hi Susy!");
} else {
  alert("I don't know you");
}
// press an enter

// shows the popup
This page says
Hi Billy!

nickname;
// expected output: "Billy"

nickname = "Susy";
// expected output: "Susy"

if (nickname === "Billy") {
  alert("Hi Billy!");
} else if (nickname === "Susy") {
  alert("Hi Susy!");
} else {
  alert("I don't know you");
}
// press an enter

// shows the popup
This page says
Hi Susy!

/* JAVASCRIPT LOGICAL OPERATORS
----------------------------
&&
||
! */

// ||

if (nickname === "Billy" || nickname === "Ann") {
  alert("Hi Billy or Ann!");
}

nickname = "Billy";
// expected output: "Billy"

if (nickname === "Billy" || nickname === "Ann") {
  alert("Hi Billy or Ann!");
}
// press an enter

// shows the popup
This page says
Hi Billy or Ann!

nickname = "Ann";
// expected output: "Ann"

if (nickname === "Billy" || nickname === "Ann") {
  alert("Hi Billy or Ann!");
}
// press an enter

// shows the popup
This page says
Hi Billy or Ann!

// &&

if (nickname === "Billy" && nickname === "Ann") {
  alert("Hi Billy and Ann!");
}

nickname = "Ann";
// expected output: "Ann"

if (nickname === "Billy" && nickname === "Ann") {
  alert("Hi Billy and Ann!");
}
// press an enter

// expected output: (I'm not getting anything)

nickname = "Billy";
// expected output: "Billy"

if (nickname === "Billy" && nickname === "Ann") {
  alert("Hi Billy and Ann!");
}
// press an enter

// expected output: (I'm not getting anything)

if (firstName === "Bob" && lastName === "Smith") {
  alert("Hi Bob Smith!");
}
// press an enter

// expected output:
/* Uncaught ReferenceError: firstName is not defined
  at <anonymous>:1:1 */

var firstName = "Bob";
var lastName = "Smith";

if (firstName === "Bob" && lastName === "Smith") {
  alert("Hi Bob Smith!");
}
// press an enter

// shows the popup
This page says
Hi Bob Smith!

var lastName = "Jones";

if (firstName === "Bob" && lastName === "Smith") {
  alert("Hi Bob Smith!");
}
// press an enter

// expected output: (I'm not getting anything)

// !

if (!(nickname === "Bob")) {
  alert("Hi Bob!");
}
// press an enter

// shows the popup
This page says
Hi Bob!

nickname = "Billy";
// expected output: "Billy"

!false;
// expected output: true

!true;
// expected output: false