// For all of these, what is the value of a when the function gets called with the alert()

// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// #1
function q1() {
  var a = 5;
  if (a > 1) {
      a = 3;
  }
  alert(a);
}

// expected output (run in the console):
q1();
// (shows the popup: This page says)
// 3

// #2
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a);
}

// you must first run q2() in your console to add the new value. then run q22()

// expected output (run in the console):
q22();
// (shows the popup: This page says)
// 0
q2();
// undefined
q22();
// (shows the popup: This page says)
// 5

// #3
function q3() {
  window.a = "hello";
}

function q32() {
  alert(a);
}

// you must first run q3() in your console to add the 'a' property to the window. then run q32()

// expected output (run in the console):
q3();
// undefined
q32();
// (shows the popup: This page says)
// hello

// #4
var a = 1;
function q4() {
  var a = "test";
  alert(a);
}

// expected output (run in the console):
q4();
// (shows the popup: This page says)
// test

// #5
var a = 2;
if (true) {
  var a = 5;
  alert(a); // 5
}
alert(a); // 5

// with the var keyword, if statements do not create a new scope

// expected output (run in the console):
// (shows the popup: This page says)
// 5
// (shows the popup: This page says)
// 5