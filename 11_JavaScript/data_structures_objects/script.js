/* JAVASCRIPT DATA STRUCTURES
--------------------------
Array
Object */

/* JAVASCRIPT TYPES
----------------
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (new in ECMAScript 6)
7. Object */

// Chrome DevTools Console (See the Chrome DevTools Console)

// Object

// Object - Objects are collections of property

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false
};

user;
// expected output:
/* -> {name: "John", age: 34, hobby: "Soccer", isMarried: false}
age: 34
hobby: "Soccer"
isMarried: false
name: "John"
-> __proto__: Object */

// Array

var list = ["apple", "banana", "orange"];

list;
// expected output:
/* -> (3) ["apple", "banana", "orange"]
0: "apple"
1: "banana"
2: "orange"
length: 3
-> __proto__: Array(0) */

list[1];
// expected output: "banana"

// Object

user.name;
// expected output: "John"

user.age;
// expected output: 34

user.hobby;
// expected output: "Soccer"

user.isMarried;
// expected output: false

// How can add properties to an object?

user.favouriteFood = "spinach";
// expected output: "spinach"

user;
// expected output:
/* -> {name: "John", age: 34, hobby: "Soccer", isMarried: false, favouriteFood: "spinach"}
age: 34
favouriteFood: "spinach"
hobby: "Soccer"
isMarried: false
name: "John"
-> __proto__: Object */

user.isMarried = true;
// expected output: true

user;
// expected output:
/* -> {name: "John", age: 34, hobby: "Soccer", isMarried: true, favouriteFood: "spinach"}
age: 34
favouriteFood: "spinach"
hobby: "Soccer"
isMarried: true
name: "John"
-> __proto__: Object */

// Object

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abrakadbra", "shazam", "boo"]
};

// Array

var list2 = [
  {
    username: "andy",
    password: "secret"
  },
  {
    username: "jess",
    password: "123"
  }
];

list2;
// expected output:
/* -> (2) [{…}, {…}]
  -> 0: {username: "andy", password: "secret"}
      password: "secret"
      username: "andy"
     -> __proto__: Object
  -> 1: {username: "jess", password: "123"}
      password: "123"
      username: "jess"
     -> __proto__: Object
     length: 2
  -> __proto__: Array(0) */

// Object

user.spells;
// expected output:
/* -> (3) ["abrakadbra", "shazam", "boo"]
0: "abrakadbra"
1: "shazam"
2: "boo"
length: 3
-> __proto__: Array(0) */

user.spells[1];
// expected output: "shazam"

// Array

list2[0].password;
// expected output: "secret"

// Object

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abrakadbra", "shazam", "boo"],
  shout: function() { // Method - shout is a method of user
    console.log("AHHHHH");
  }
};

user;
// expected output:
/* -> {name: "John", age: 34, hobby: "Soccer", isMarried: false, spells: Array(3), …}
age: 34
hobby: "Soccer"
isMarried: false
name: "John"
-> shout: ƒ ()
-> spells: (3) ["abrakadbra", "shazam", "boo"]
-> __proto__: Object */

user.shout(); // Method
// expected output: AHHHHH

// Note:
// A function inside an object is a method
// Just like with an array-like list.pop() - pop is a method of list

console;
// expected output:
// -> console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

console.info("hello");
// expected output: hello

console.error("ahhh");
// expected output:
// -> ahhh // (an error)

// Object

user2 = {};
// expected output:
/* -> {}
  -> __proto__: Object */

user2;
// expected output:
/* -> {}
  -> __proto__: Object */

// Array

list3 = [];
// expected output:
/* -> []
  length: 0
  -> __proto__: Array(0) */

list2[0];
// expected output:
/* -> {username: "andy", password: "secret"}
password: "secret"
username: "andy"
-> __proto__: Object */

list3[0];
// expected output: undefined (which is the empty one)

// Variable

var a;
// expected output: undefined

a;
// expected output: undefined

// Object

var emptyObj = {};
// expected output: undefined

// Null

var nullObj = null;
// expected output: undefined

emptyObj;
// expected output:
/* -> {}
  -> __proto__: Object */

nullObj;
// expected output: null

nullObj.name = "Andy";
// expected output:
/* -> Uncaught TypeError: Cannot set property 'name' of null
at <anonymous>:1:14 */

emptyObj.name = "Andy";
// expected output: "Andy"