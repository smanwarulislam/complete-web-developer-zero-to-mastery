/* JAVASCRIPT FUNCTIONS
--------------------
var a = function name() {}
function name() {}
return
() => (new in ECMAScript 6) */

// Chrome DevTools Console (See the Chrome DevTools Console)

/* With function, we have two options:
1. Using existing JavaScript function like alert() and prompt()
2. We can create our own function */

// 1. Using existing JavaScript function like alert() and prompt()

alert();
// press an enter

// shows the popup
// This page says

// expected output: undefined

prompt();
// press an enter

// shows the popup
/* This page says
___ (press cancel) */

// expected output: null

// Note:
/* alert()
prompt()
() -> That in JavaScript means to execute function */

alert;
// press an enter

// expected output: ƒ alert() { [native code] }
// f -> f stands for function
// ƒ alert() { [native code] } -> This is what running a function means

alert(); // In order to run alert(), I executed or calling it like this
// () -> So this bracket means calling a function. So I can call it a function.

alert("hi there!"); // "hi there!" -> Arguments
// press an enter

// shows the popup
/* This page says
hi there! */

console.log("Hellooooo"); // "Hellooooo" -> Arguments
// expected output: Hellooooo

console.log("Hellooooo", "How are you?");
// expected output: Hellooooo How are you?

// Review:
alert; // It is function
alert(); // I'm calling the alert function
alert("Hi"); // I'm calling the alert function with the argument

// 2. We can create our own function

// Let's create our own function

/* JAVASCRIPT FUNCTIONS
--------------------
var a = function name() {}
function name() {}
return
() => (new in ECMAScript 6) */

// function declaration
// function name() {}

function sayHello() {
  console.log("Hello");
}

// expected output: (nothing happens)

// Declare this function (function declaration)
function sayHello2() {
  console.log("Hello 2");
}

// We have to call the function
sayHello2();
// expected output: Hello 2

// function expression
// var a = function name() {}

var sayBye = function() {
  console.log("Bye");
};

// expected output: (nothing happens)

// Assigning this function to a variable (function expression)
var sayBye2 = function() { // function() {} -> anonymous function
  console.log("Bye 2");
};

// We have to call the function
sayBye2();
// expected output: Bye 2

var sayBye3 = function byeBye() { // byeBye() -> But, its use is limited so we won't worry about it for now
  console.log("Bye 3");
};

sayBye3();
// expected output: Bye 3

function sing() {
  console.log("AHHHHHHHHHH");
  console.log("TEEEEEEEEEE");
}

sing();
// expected output:
/* AHHHHHHHHHH
TEEEEEEEEEE */

function sing2() {
  console.log("laaa deee daaa");
  console.log("laaaaaaaaaa");
}

sing2();
// expected output:
/* laaa deee daaa
laaaaaaaaaa */

function sing3(song) {
  console.log(song);
}

sing3("Laaa deee daaa");
sing3("hellooooo");
sing3("backstreets back alright");
// expected output:
/* Laaa deee daaa
hellooooo
backstreets back alright */

function multiply(a, b) {
  a * b;
}

multiply(5, 10);

// Using the console
multiply;
// press an enter

// expected output:
/* ƒ multiply(a, b) {
  a * b;
} */

// Using the console
multiply(5, 10);
// expected output: undefined

multiply(5, 12);
// expected output: undefined

// debugging
function multiply2(a, b) {
  console.log(a, b); // debugging
  a * b;
}

multiply2(5, 10);
// expected output: 5 10

// Using the console
// We just run the function again
multiply2(5, 12);
// expected output: 5 12

// Diagram

// Input (5, 10) -> function -> Output

// Input (5, 10) -> function (console.log()) -> (Return?) - undefined or value

function multiply3(a, b) {
  console.log(a, b); // debugging
  a * b;
}

multiply3(5, 10);
// expected output: 5 10

// Using the console
multiply3(10, 5);
// expected output: 10 5
// undefined

function multiply4(a, b) {
  a * b;
}

multiply4(5, 10);

// Using the console
multiply4(10, 5);
// expected output: undefined

// return

// Input (5, 10) -> function (console.log()) -> (Return?) - undefined or value

function multiply5(a, b) {
  return a * b;
}

multiply5(5, 10);

// Using the console
multiply5(5, 10);
// expected output: 50

function multiply6(a, b) {
  return a * b;
  return a;
  return b;
}

multiply6(5, 10);

// Using the console
multiply6(5, 10);
// expected output: 50

function multiply7(a, b) {
  return a;
  return a * b;
  return b;
}

multiply7(5, 10);

// Using the console
multiply7(5, 10);
// expected output: 5

// Note:
// In a function, you should have one "return"

function multiply8(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b; 
  }
  // never get there
  // return a * b;
}

multiply8(5, 10);

// Using the console
multiply8(5, 4);
// expected output: 20

// Using the console
multiply8(5, 40);
// expected output: "that's too hard"

// For "never get there"
// Using the console
multiply8(5, 40);
// expected output: "that's too hard"

// In JavaScript functions are variable

var a = function(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b; 
  }
  // never get there
  // return a * b;
};

a();

function multiply9(a, b) {
    return a * b;
}

alert(multiply9(3, 4));
// press an enter

// shows the popup
// This page says
12

function multiply10(a, b) { // multiply10(a, b) -> parameters
  return a * b;
}

var total = multiply10(4, 5); // multiply10(4, 5) -> arguments
alert(total);
// press an enter

// shows the popup
// This page says
20

// parameters
// arguments