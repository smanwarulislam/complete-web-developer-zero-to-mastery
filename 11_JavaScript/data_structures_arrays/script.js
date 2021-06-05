/* JAVASCRIPT DATA STRUCTURES
--------------------------
Array
Object */

// Chrome DevTools Console (See the Chrome DevTools Console)

// Array

var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);
// expected output: cat

console.log(list[0]);
// expected output: tiger

var list = ["tiger", "cat", "bear", "bird"];

list;
// expected output:
/* -> (4) ["tiger", "cat", "bear", "bird"]
0: "tiger"
1: "cat"
2: "bear"
3: "bird"
length: 4
-> __proto__: Array(0) */

var numbers = [1, 2, 3, 4, 5];

var booleans = [true, false, true];

var functionList = [function apple() {
  console.log("apple");
}];

functionList;
// expected output:
/* -> [ƒ]
  -> 0: ƒ apple()
     length: 1
  -> __proto__: Array(0) */

var mixedList = ["apples", 3, undefined, true, function apple() {
  console.log("apples");
}];

mixedList;
// expected output:
/* -> (5) ["apples", 3, undefined, true, ƒ]
0: "apples"
1: 3
2: undefined
3: true
-> 4: ƒ apple()
length: 5
-> __proto__: Array(0) */

var list2 = [
  ["tiger", "cat", "bear", "bird"]
];

console.log(list2[0]);
// expected output:
/* -> (4) ["tiger", "cat", "bear", "bird"]
0: "tiger"
1: "cat"
2: "bear"
3: "bird"
length: 4
-> __proto__: Array(0) */

var list3 = [
  ["tiger", "cat", "bear", "bird"]
];

console.log(list3);
// expected output:
/* -> [Array(4)]
  -> 0: (4) ["tiger", "cat", "bear", "bird"]
      0: "tiger"
      1: "cat"
      2: "bear"
      3: "bird"
      length: 4
      -> __proto__: Array(0)
     length: 1
  -> __proto__: Array(0) */

var list4 = [
  ["tiger", "cat", "bear", "bird"]
];

console.log(list4[0][2]);
// expected output: bear

var list = ["tiger", "cat", "bear", "bird"];

list;
// expected output:
/* -> (4) ["tiger", "cat", "bear", "bird"]
0: "tiger"
1: "cat"
2: "bear"
3: "bird"
length: 4
-> __proto__: Array(0) */

list.shift();
// expected output: "tiger"

list;
// expected output:
/* -> (3) ["cat", "bear", "bird"]
0: "cat"
1: "bear"
2: "bird"
length: 3
-> __proto__: Array(0) */

list.pop();
// expected output: "bird"

list;
// expected output:
/* -> (2) ["cat", "bear"]
0: "cat"
1: "bear"
length: 2
-> __proto__: Array(0) */

list.push("elephant");
// expected output: 3

list;
// expected output:
/* -> (3) ["cat", "bear", "elephant"]
0: "cat"
1: "bear"
2: "elephant"
length: 3
-> __proto__: Array(0) */

list.unshift("tiger");
// expected output: 4

list;
// expected output:
/* -> (4) ["tiger", "cat", "bear", "elephant"]
0: "tiger"
1: "cat"
2: "bear"
3: "elephant"
length: 4
-> __proto__: Array(0) */

list.shift();
// expected output: "tiger"

list;
// expected output:
/* -> (3) ["cat", "bear", "elephant"]
0: "cat"
1: "bear"
2: "elephant"
length: 3
-> __proto__: Array(0) */

list.concat(["bee", "deer"]);
// expected output:
/* -> (5) ["cat", "bear", "elephant", "bee", "deer"]
0: "cat"
1: "bear"
2: "elephant"
3: "bee"
4: "deer"
length: 5
-> __proto__: Array(0) */

list.sort();
// expected output:
/* -> (3) ["bear", "cat", "elephant"]
0: "bear"
1: "cat"
2: "elephant"
length: 3
-> __proto__: Array(0) */

var myList = ["cat", "bear", "elephant", "bee", "deer"];

var myNewList = myList.concat(["monkey"]);

myList;
// expected output:
/* -> (5) ["cat", "bear", "elephant", "bee", "deer"]
0: "cat"
1: "bear"
2: "elephant"
3: "bee"
4: "deer"
length: 5
-> __proto__: Array(0) */

myNewList;
// expected output:
/* -> (6) ["cat", "bear", "elephant", "bee", "deer", "monkey"]
0: "cat"
1: "bear"
2: "elephant"
3: "bee"
4: "deer"
5: "monkey"
length: 6
-> __proto__: Array(0) */