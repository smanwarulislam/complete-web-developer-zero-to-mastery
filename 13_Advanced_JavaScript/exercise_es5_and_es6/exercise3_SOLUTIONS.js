// change everything below to the newer Javascript!

// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// expected output (run in the console):
a;
// 'test2'


// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const { firstName, lastName, age, eyeColor } = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// Template strings (Template literals)
const firstName = 'John';
const city = 'Dhaka';

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// expected output (run in the console):
message;
// 'Hello John have I met you before? I think we met in Dhaka last summer no???'


// default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;

// expected output (run in the console):
isValidAge();
// 10


// Symbol
// Create a symbol: "This is my first Symbol"

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');

// expected output (run in the console):
sym;
// Symbol(This is my first Symbol)


// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

// Arrow functions
const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

// expected output (run in the console):
whereAmI();
// 'I am totally lost!'

// expected output (run in the console):
whereAmI('Raju', 'Dhaka');
// 'I am not lost'