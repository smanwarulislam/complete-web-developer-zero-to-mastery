// ES5 and ES6

// If you remember JavaScript was created by the Netscape browser and everybody else all the other browsers started using JavaScript.
// So Netscape submitted JavaScript to something called ECMA International. So JavaScript could be standardized and they could say, hey, everybody uses this version of JavaScript on all browsers.
// That's what ECMAScript is, it's JavaScript
// ECMAScript === JavaScript
// But it's just the standard way of calling it (ECMAScript) so that when the browsers implement what JavaScript should do and how they read JavaScript well, everybody agrees on the standard.

// ES6 (ECMAScript 6) and JS (JavaScript)

// ES6 just stands for ECMAScript version 6

// So yes there was ECMAScript version 1 all the way through 6. So we're only learning version 5 and version 6 for now.
// But version 5 and version 6 introduce some new features that are really really powerful and make coding in JavaScript really really nice.

// Now one thing you might be thinking though is, Ah! I don't want to learn something if browsers don't support them and I can't actually use them.
// But Uh! don't worry my friend. These are all features that are supported, you know why?
// Well mainly because of something called Babel (transcompiler) [Babel.js].
// A few years ago programmers created Babel so that developers can start using new JavaScript features as they come.
// Remember ECMAScript releases versions all the time, now without having to wait for browsers to implement these features. Babel, allowed us to use them right away.
// When we actually deploy our application or website which means putting it online after we download it, we can use Babel to say hey read our JavaScript file and transform it (ECMAScript 2015+/ES6+) into this (a version of JavaScript that all browsers know), so it works on all browsers.
// So without even thinking about it, you can write all your code in the newest and best way of writing it and Babel will take care of changing everything for you so that browsers can read it.

// Reference websites:
// Babel.js
// https://babeljs.io/

// Babel is a JavaScript compiler.
// Babel · The compiler for next generation JavaScript

// Wikipedia
// https://en.wikipedia.org/wiki/Babel_(transcompiler)

// Babel (transcompiler)
// Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into backward-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language.
// Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that a Web browser can process.
// Babel is used to compiling TypeScript into JavaScript.

// GitHub
// https://github.com/babel/babel

// Babel is a compiler for writing next-generation JavaScript.

// Intro
// Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.

// ES5 and ES6 made JavaScript a whole lot easier and more fun to write.

// JAVASCRIPT VARIABLES
// --------------------
var
// let (new in ECMAScript 6)
// const (new in ECMAScript 6)

// ES6 (version 6 introduces some new features)
let (new in ECMAScript 6)
const (new in ECMAScript 6)

// let (new in ECMAScript 6)

// var
// As a matter of fact, 'var' (variable) that we've been using up to this point, we don't really need to use it ever again.

// Variable declaration:
let variableName (new in ECMAScript 6) // its value can be altered

// Let's do a small example
// let + const

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

const player = 'bobby'; // 'const' stands for constant
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

// expected output (run in the console):
wizardLevel;
// false

// Hmmm! that's strange right because the scope for had 'wizardLevel' has a 'var' (variable), I would have gotten 'true' here.

// So if this is:
const player = 'bobby'; // 'const' stands for constant
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
  var wizardLevel = true;
}

// expected output (run in the console):
wizardLevel;
// true

// Now that's confusing, right?
// That's because it's not inside of a function.
// This is a little bit tricky but with 'var' (variable) we only were able to create a scope, inside of a function. But never if it had curly brackets, but inside of 'if'.

function name() {

}

// With 'let':
const player = 'bobby'; // 'const' stands for constant
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log('inside', wizardLevel); // inside true
}

console.log('outside', wizardLevel); // outside false

// Now I've created a 'wizardLevel' let' (variable) inside of 'if' so the only way that I can access this is inside the 'if'.

// expected output (run in the console):
// inside true
// outside false

// Because now with 'let', any time it's wrapped around a curly bracket, well it creates a new scope.

// Versus with a 'var' (variable)
// If I change this to a 'var' (variable):
const player = 'bobby'; // 'const' stands for constant
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
  var wizardLevel = true;
  console.log('inside', wizardLevel); // inside true
}

console.log('outside', wizardLevel); // outside true

// expected output (run in the console):
// inside true
// outside true

// Because 'wizardLevel' has been changed.
// No new scope is created, inside the curly brackets because this ('if') isn't a function.

// Now that's really really confusing.
// But the one big takeaway from this is, just don't use 'var' (variable) anymore. 'var' (variable) is actually quite confusing.

// Now think of 'let' as the new variable.
// So from now on, we're going to be using 'let' for variables but what is 'const'?

// const (new in ECMAScript 6)

// Variable declaration:
const variableName (new in ECMAScript 6) // it stands for constant, its value can't be altered once declared

const player = 'bobby'; // 'const' stands for constant
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

// expected output (run in the console):
experience = 80;
// 80
experience;
// 80

// expected output (run in the console):
player = 'Sally';
/* -> Uncaught TypeError: Assignment to constant variable.
at <anonymous>:1:8 */

// What that means is, as a 'const' (constant), you're not able to reassign to the variable. So it cannot be updated.

const a = function name() {
  console.log('a');
};

// So the rule from now on is to use 'const', If you're using a variable that doesn't change, most of the time you'll use this (const).
// If you're using a variable (let) die your re-assign something to like 'wizardLevel' where it changes from 'true' to 'false', 'false' to 'true' then use 'let'.

const obj = {
  player: 'bobby',
  experience: 100,
  wizardLevel: false
};

// Try to reassign this obj (object) to a number, I get an error because it's a constant (const).
// expected output (run in the console):
obj = 5;
/* -> Uncaught TypeError: Assignment to constant variable.
at <anonymous>:1:5 */

// But! if I try and change a property
// expected output (run in the console):
obj.wizardLevel = true;
// true
obj;
// -> {player: 'bobby', experience: 100, wizardLevel: true}

// So one thing with 'const' (constant) is, you can change the properties of the objects, but still you just can't reassign the variable (const).

// ES6 (version 6 introduces some new features)
// Destructuring

const obj = {
  player: 'bobby',
  experience: 100,
  wizardLevel: false
};

// Again if we actually have our obj (object) here, let's say that we wanted to grab these objects, so we'll have to do:
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// And it was a whole lot of typing to access these properties.

// With destructuring, you can do this (You just select the properties you want from an object):
const { player, experience } = obj;
let { wizardLevel } = obj;

// And now you have:
// const player;
// const experience;
// let wizardLevel;

// So you can use 'player' anywhere you want in your codebase
// player;

// Another thing cool thing you can do with objects
// Object properties
const name2 = 'john snow';

// Some new ways of declaring object properties
const obj = {
  // Now, in ES6 you can have something dynamic property values
  [name2]: 'hello',
  // ['ray' + 'smith']: 'hihi'
  [1 + 2]: 'hihi'
}

// expected output (run in the console):
obj;
// -> {3: 'hihi', john snow: 'hello'}

// But even cooler is being able to do something like this
const a = 'Simon';
const b = true;
const c = {};

// If we wanted to add these to an object (obj)
const obj = {
  a: a,
  b: b,
  c: c
}

// Sometimes you wanted the property to match the value
// Again with the new JavaScript if property and value are the same in that case just keep it like this
const obj = {
  a,
  b,
  c
}

// ES6 (version 6 introduces some new features)
// Template literals (Template strings)

const name3 = 'Sally';
const age = 34;
const pet = 'horse';

// const greeting = "Hello " + name3 + " you seem to be doing " + greeting + "!";

// That was really tedious and annoying

`` // are used instead of '' or "". Allows us to avoid the "+" separation and elements and variables should be added with syntax ${element}

const greetingBest = `Hello ${name3} you seem to be ${age - 10}. What a lovely ${pet} you have!`;

// expected output (run in the console):
greetingBest;
// 'Hello Sally you seem to be 24. What a lovely horse you have!'

// ES6 (version 6 introduces some new features)
// Default arguments

function greet(name4 = '', age = 30, pet = 'cat') {
  return `Hello ${name4} you seem to be ${age - 10}. What a lovely ${pet} you have!`;
}

// expected output (run in the console):
greet();
// 'Hello  you seem to be 20. What a lovely cat you have!'

// Even though our browser, and let me just refresh, so you know for sure that our browser has no idea of what age or pet is.

// expected output (run in the console):
age;
/* -> Uncaught ReferenceError: age is not defined
at <anonymous>:1:1 */

// expected output (run in the console):
pet;
/* -> Uncaught ReferenceError: pet is not defined
at <anonymous>:1:1 */

// But, if I run this function
function greet(name4 = '', age = 30, pet = 'cat') {
  return `Hello ${name4} you seem to be ${age - 10}. What a lovely ${pet} you have!`;
}

// expected output (run in the console):
greet();
// 'Hello  you seem to be 20. What a lovely cat you have!'

// When somebody calls this function and they don't provide arguments my function won't fail because I have default arguments.

// If do now

// expected output (run in the console):
greet('John', 50, 'monkey');
// 'Hello John you seem to be 40. What a lovely monkey you have!'

// JAVASCRIPT TYPES
// ----------------
1. Number
2. String
3. Boolean
4. Undefined
5. Null
// 6. Symbol (new in ECMAScript 6)
7. Object

// ES6 (version 6 introduces some new features)
Symbol (new in ECMAScript 6)

// Symbol (new in ECMAScript 6)

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// expected output (run in the console):
sym1;
// Symbol()

// expected output (run in the console):
sym2;
// Symbol(foo)

// expected output (run in the console):
sym3;
// Symbol(foo)

// What's so unique about Symbol
// The unique thing about Symbol is that if I do

// expected output (run in the console):
sym2 === sym3;
// false

// Even though, they look like they're the exact same thing.

// Symbols are used because they are completely unique types. So that you can make sure there's never going to be any conflict.
// And the Symbol value is used as an identifier mostly for object properties.
// It's pretty much the only purpose of that because sometimes you don't want object properties if you have thousands of them to collide and be the same ones because then they'll get bugs.

// JAVASCRIPT FUNCTIONS
// --------------------
var a = function name() {}
function name() {}
return
// () => (new in ECMAScript 6)

// ES6 (version 6 introduces some new features)
// Arrow function
() => (new in ECMAScript 6)

// Arrow function
// () => (new in ECMAScript 6)

// Function declaration syntax:
const functionName = (param1, param2...) => action; // If there is an only return, there is no need to type "return" and if it's just one parameter, no need to add "()"

function add(a, b) {
  return a + b;
}

// And you might have gotten sick and tired of constantly writing function over and over and over.

// With an arrow function, you can do
const add2 = (a, b) => a + b;

// The beauty of it is that you could have done
const add2 = (a, b) => {
  return a + b;
}

// So the only difference is that we have, a function expression that accepts a parameter and we have this fat arrow ('=>')

// If you have a single return, you can just put it on one line, and it assumes that you want to return this
const add2 = (a, b) => a + b;

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

// expected output (run in the console):
add(4, 2);
// 6

// That's the first function and then the new way with the arrow function
// expected output (run in the console):
add2(4, 2);
// 6

// Variable declaration:

let variableName (new in ECMAScript 6) // its value can be altered
const variableName (new in ECMAScript 6) // it stands for constant, its value can't be altered once declared
`` // are used instead of '' or "". Allows us to avoid the "+" separation and elements and variables should be added with syntax ${element}
a**b // it stands for a to the b potence
element.padStart(param1, param2) // param1 number of characters param2 are added before the value of the element is declared. The default param2 is " "
.padEnd(param1, param2) // Same as above but at the end
.trimStart() // eliminates empty spaces from the start of a variable
.trimEnd() // Same as above but from the end
debugger; // Stops running the code and open the console for a step-by-step check

// These are going to help you to write better, cleaner code.