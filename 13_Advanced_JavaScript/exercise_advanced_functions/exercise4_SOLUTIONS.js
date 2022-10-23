// Solve these problems:

// #1 Create a one line function that adds two parameters

// Solution:
const sum = (a, b) => a + b;

// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);

// Solution:
const addTo = x => y => x + y; // think of these arrows (=>) as functions

// expected output (run in the console):
addTo(10); // const addTo = 10 => y => 10 + y; | addTo(10) -> f(x) returns y => x + y
// y => x + y

var addToTen = addTo(10);

// expected output (run in the console):
addToTen(3); // addToTen(3) -> f(y) returns 10 + 3 (y => x + y)
// 13

// Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

// Solution:
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b; // think of these arrows (=>) as functions

// expected output (run in the console):
curriedSum(30); // const curriedSum = (30) => (b) => 30 + b; | curriedSum(30) -> f(a) returns (b) => a + b
// (b) => a + b

// expected output (run in the console):
curriedSum(30)(1); // curriedSum(a)(b); a = 30, b = 1
// 31

// Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);

// Solution:
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b; // think of these arrows (=>) as functions

// expected output (run in the console):
curriedSum(5); // const curriedSum = (5) => (b) => 5 + b; | curriedSum(5) -> f(a) returns (b) => a + b
// (b) => a + b

const add5 = curriedSum(5);

// expected output (run in the console):
add5(12); // add5(12) -> f(b) returns 5 + 12 ((b) => a + b)
// 17

// Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

// Solution:
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;

// expected output (run in the console):
compose(add1, add5)(10);
// 16

// Note:
// So why is that (16)?
// Let's take it one by one
// - If 'f' and 'g' are 'add1' and 'add5' and 'a' is 10, we look at what the function returns --> f(g(a)).
// - And because again we have two brackets --> (add1, add5)(10), we're executing the first part --> (add1, add5) of the function which returns us in another function which is this --> (a) => f(g(a)).
// - And within it, we give the 'a', 10.
// - So when this function runs it says 'a' is 10 --> f(g(10)).
// - And then let's run the inner function 'g'. In this case, it's 'add5' --> f(add5(10)).
// - So if you remember 'add5' is just saying give me 10 and then 10 plus 5. So now this --> f(add5(10)) changes to f(15).
// - And then finally the 'f' function runs which is 'add1'. And this --> f(15) says 'add1' is giving me 15. So 15 plus 1 is 16 --> f(16).
// - And this whole thing returns 16.

// What are the two elements of a pure function?

// Answer:
// 1. Deterministic --> always produce the same results given the same inputs
// 2. No Side Effects --> It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.