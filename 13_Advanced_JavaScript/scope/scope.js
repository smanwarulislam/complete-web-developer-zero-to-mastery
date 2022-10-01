// scope

/* What is JavaScript 'scope'?
- scope means variable access */

/* What variables do I have access to when a code is running?
- By default in JavaScript, you are in the 'root scope' which is the 'window' object. */

// Chrome DevTools Console (See the Chrome DevTools Console)

function aa() {
  console.log("test");
}

window.aa();

// expected output:
// test

window;

// expected output:
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//   -> aa: ƒ aa()

// When you are working in a browser, this is called the 'root scope'.

/* function bb() {
  var a = "hello";
} */

// window.bb();
// undefined

// console.log(a);

// expected output:
/* -> Uncaught ReferenceError: a is not defined
at <anonymous>:1:13 */

// Because 'a' only lives within 'function bb()'. The scope is inside the function.

function bb() {
  var a = "hello";
  console.log(a);
}

bb();

// expected output:
// hello

// The interesting thing is that functions have access to any variable in the root scope.

// window.cc;
// window.c;

// Because as you know 'window.cc' exists and variable 'c' lives on the window object. So they both have the same parent.

// var c = "Can I access this?";

/* function cc() {
  var a = "hi";
} */

var c = "Can I access this?";

function cc() {
  var a = "hi";
  console.log(c);
}

cc();

// expected output:
// Can I access this?

var d = "Can I access this 2?";

function dd() {
  d = "dear";
}

console.log(d);

// expected output:
// Can I access this 2?

// I have "Can I access this 2?" because I haven't run the function but if I run the function 'dd()'
dd();

console.log(d);

// expected output:
// dear

// Because 'd' is the same variable. (dear)

// Let's do something a little bit more complex

// Root Scope (window)
var fun = 5;

function funFunction() { // as soon as we create these curly brackets '{}' we've created a child scoping here
  // child scope
  var fun = "hellooo";
  console.log(1, fun);
}

function funnerFunction() { // as soon as we create these curly brackets '{}' we've created a child scoping here
  // child scope
  var fun = "Byee";
  console.log(2, fun);
}

function funnestFunction() { // as soon as we create these curly brackets '{}' we've created a child scoping here
  // child scope
  fun = "AHHHHHH";
  console.log(3, fun);
}

console.log("window", fun);

// expected output:
// window 5

var fun2 = 5;

function funFunction2() { // as soon as we create these curly brackets '{}' we've created a child scoping here
  // child scope
  var fun2 = "hellooo";
  console.log(1, fun2);
}

function funnerFunction2() { // as soon as we create these curly brackets '{}' we've created a child scoping here
  // child scope
  var fun2 = "Byee";
  console.log(2, fun2);
}

function funnestFunction2() { // as soon as we create these curly brackets '{}' we've created a child scoping here
  // child scope
  fun2 = "AHHHHHH";
  console.log(3, fun2);
}

console.log("window2", fun2);
funFunction2();
funnerFunction2();
funnestFunction2();

// expected output:
// window2 5
// 1 'hellooo'
// 2 'Byee'
// 3 'AHHHHHH'

// Here's the fun part though
console.log(fun2);

// expected output:
// AHHHHHH

// So to finalize this point and go over what's happening below:
/* When somebody runs 'funnestFunction()' we run this and JavaScript reads console log 'fun'.
- Ok, 'fun', Do we know her (console.log)? and we look at the scope here (child scope).
- You (console.log) look at this function.
- Hey, do you (funnestFunction()) know what 'fun' is?
- And the function says, Well sorry friend (console.log) I don't really know 'fun' but ask my parent.
So now we go outside of the function. In this case the roots scope.
- Now we say hey do you know 'fun'?
- And they're like, Yah yah! we have a variable 'fun'. It equals five.
So now 'console.log' can log 5. */

// Root Scope (window)
var fun = 5;

function funnestFunction() {
  // child scope
  console.log(fun);
}

// But if 'fun' doesn't exist (var fun = 5;)
/* - We asked the parents and the parent says, Sorry I have no idea what 'fun' is.
Then we get an error. */
/* So the last check is always the root scope ('window' object).
In our case the 'window' object. If we can't find it, we get this error in the console. We always see.
- Sorry! your friend variable doesn't exist. I think you made her up. */

// Root Scope (window)

function funnestFunction() {
  // child scope
  console.log(fun);
}