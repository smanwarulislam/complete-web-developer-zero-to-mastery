/* JAVASCRIPT LOOPING
------------------
for
while
do
forEach (new in ECMAScript 5) */

// for

var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

// i = It's just a random variable. 'i' is it's common to be used in a 'for' loop. 'i' stands for an index.
// ; = We have a semicolon (;) which means the end of the expression.
// syntax
for (var i = 0; i < todos.length; i++) {

}

// Chrome DevTools Console (See the Chrome DevTools Console)

var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

todos.length;
// expected output:
// 5

"helllooo".length;
// expected output:
// 8

var i = 0;

i;
// expected output:
// 0

i++;
// expected output:
// 0

i;
// expected output:
// 1

i++;
// expected output:
// 1

i;
// expected output:
// 2

for (var i = 0; i < todos.length; i++) {
  console.log(i);
}

// expected output:
/* 0
1
2
3
4 */

var todos2 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

for (var i = 0; i < todos2.length; i++) {
  console.log(todos2[i]);
}

// expected output:
/* clean room
brush teeth
exercise
study JavaScript
eat healthy */

var todos3 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

for (var i = 0; i < todos3.length; i++) {
  console.log(todos3[i] + "!");
}

// expected output:
/* clean room!
brush teeth!
exercise!
study JavaScript!
eat healthy! */

// Chrome DevTools Console (See the Chrome DevTools Console)

todos3;
// expected output:
/* -> (5) ['clean room', 'brush teeth', 'exercise', 'study JavaScript', 'eat healthy']
0: "clean room"
1: "brush teeth"
2: "exercise"
3: "study JavaScript"
4: "eat healthy"
length: 5
-> [[Prototype]]: Array(0) */

var todos4 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

for (var i = 0; i < todos4.length; i++) {
  todos4[i] = todos4[i] + "!";
}

// Chrome DevTools Console (See the Chrome DevTools Console)

todos4;
// expected output:
/* -> (5) ['clean room!', 'brush teeth!', 'exercise!', 'study JavaScript!', 'eat healthy!']
0: "clean room!"
1: "brush teeth!"
2: "exercise!"
3: "study JavaScript!"
4: "eat healthy!"
length: 5
-> [[Prototype]]: Array(0) */

var todos5 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

/* for (var i = 0; i < todos5.length; i++) {
  todos5[i].pop();
} */

// expected output:
/* -> Uncaught TypeError: todos5[i].pop is not a function
at script.js:161:13 */

/* for (var i = 0; i < todos5.length; i++) {
  todos5.pop();
} */

// Chrome DevTools Console (See the Chrome DevTools Console)

todos5;
// expected output:
/* -> (2) ['clean room', 'brush teeth']
0: "clean room"
1: "brush teeth"
length: 2
-> [[Prototype]]: Array(0) */

// So what's one way that we can fix that issue?
var todos5Length = todos5.length;

for (var i = 0; i < todos5Length; i++) {
  todos5.pop();
}

// Chrome DevTools Console (See the Chrome DevTools Console)

todos5;
// expected output:
/* -> []
length: 0
-> [[Prototype]]: Array(0) */

// while

var counterOne = 0;

while (counterOne < 10) {
  console.log(counterOne);
  counterOne++;
}

// expected output:
/* 0
1
2
3
4
5
6
7
8
9 */

var counterTwo = 10;

while (counterTwo > 0) {
  console.log(counterTwo);
  counterTwo--;
}

// expected output:
/* 10
9
8
7
6
5
4
3
2
1 */

// do
// do...while

var counterThree = 10;

do {
  console.log(counterThree);
  counterThree--;
} while (counterThree > 0);

// expected output:
/* 10
9
8
7
6
5
4
3
2
1 */

// while
// do...while
// What is the difference here?

// while
var counterFour = 10;

while (counterFour > 10) {
  console.log("while", counterFour);
  counterFour--;
}

// do...while
var counterFive = 10;

do {
  console.log("do...while", counterFive);
  counterFive--;
} while (counterFive > 10);

// expected output:
// do...while 10

// So that's the difference between these two.

// forEach (new in ECMAScript 5)

// What is the forEach() method?
// The difference between a 'for' statement/loop and 'forEach' method. Both are the same thing. But which one looks better?

// for
var todos6 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

var todos6Length = todos6.length;

for (var i = 0; i < todos6Length; i++) {
  console.log(i);
}

// forEach
todos6.forEach(function (i) {
  console.log(i);
});

// Or I could just say (forEach)
todos6.forEach(function (todo) {
  console.log(todo);
});

// expected output:
// for
/* 0
1
2
3
4 */
// forEach
/* clean room
brush teeth
exercise
study JavaScript
eat healthy */
// Or I could just say (forEach)
/* clean room
brush teeth
exercise
study JavaScript
eat healthy */

// for
var todos7 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

var todos7Length = todos7.length;

for (var i = 0; i < todos7Length; i++) {
  console.log(todos7[i]);
}

// forEach
todos7.forEach(function (todo2) {
  console.log(todo2);
});

// expected output:
// for
/* clean room
brush teeth
exercise
study JavaScript
eat healthy */
// forEach
/* clean room
brush teeth
exercise
study JavaScript
eat healthy */

// In that case now with all the same.

// How do I access the index within the 'for' statement/loop and 'forEach' method?

// for
var todos8 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

var todos8Length = todos8.length;

for (var i = 0; i < todos8Length; i++) {
  console.log(todos8[i], i);
}

// forEach
todos8.forEach(function (todo3, i) {
  console.log(todo3, i);
});

// expected output:
// for
/* clean room 0
brush teeth 1
exercise 2
study JavaScript 3
eat healthy 4 */
// forEach
/* clean room 0
brush teeth 1
exercise 2
study JavaScript 3
eat healthy 4 */

// forEach
function logTodos(todo4, i) {
  console.log(todo4, i);
}

todos8.forEach(logTodos);

// expected output:
/* clean room 0
brush teeth 1
exercise 2
study JavaScript 3
eat healthy 4 */

// But I can now use logTodos2 in other palaces.

var todos9 = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JavaScript",
  "eat healthy"
];

// I have another list
var todos9Important = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study JavaScript!",
  "eat healthy!"
];

function logTodos2(todo5, i) {
  console.log(todo5, i);
}

todos9.forEach(logTodos2);
todos9Important.forEach(logTodos2);

// expected output:
/* clean room 0
brush teeth 1
exercise 2
study JavaScript 3
eat healthy 4
clean room! 0
brush teeth! 1
exercise! 2
study JavaScript! 3
eat healthy! 4 */

// And just the test if we open at our Console while we can definitely see that.
// Chrome DevTools Console (See the Chrome DevTools Console)

[].forEach;
// expected output:
// ƒ forEach() { [native code] }