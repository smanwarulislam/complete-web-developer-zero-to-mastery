// Advanced Arrays

const array = [1, 2, 10, 16];

// So these are arrays and we can do 'for' loops (The 'for' statement ('for' loop)) with them, we can do 'forEach' (The forEach() method) with them which was new in ECMAScript 5.

// Let's remember how the forEach() works
const newArray = array.forEach((num) => {
  num * 2;
});

// Now we'll see what that gives us the console.log

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

// expected output (run in the console):
console.log(newArray);
// undefined

// forEach() just says I'm going to move over these elements ([1, 2, 10, 16]) and I'm going to multiply num by 2 but we're not changing the array.
// If we look at the 'array' right now well it's still the same thing.

// expected output (run in the console):
array;
// -> (4) [1, 2, 10, 16]

// We're just randomly multiplying the num by 2 but we're not really storing it anywhere.
// If we want to do what we're doing then we have to say
const double = [];

const newArray = array.forEach((num) => {
  double.push(num * 2);
});

// expected output (run in the console):
console.log('forEach', double);
// forEach -> (4) [2, 4, 20, 32]

// map, filter, reduce

// map
const mapArray = array.map((num) => {
  return num * 2; // The way 'map' works is that you always need to 'return' something
});

// The way 'map' works is that you always need to 'return' something
// because what's different for 'map' than it is for 'forEach()', well 'forEach()' just loop's over something and it just does whatever the function says
// versus with the 'map' we can do what we couldn't with 'forEach()' which is loop over each element each number and 'return' a new array.

// expected output (run in the console):
console.log('map', mapArray);
// map -> (4) [2, 4, 20, 32]

// 'forEach()', 'map' looking at these two seem to both be doing the same thing.
// But there's a critical difference between 'map' and 'forEach()'
// and I'm here to tell you that whenever you want to loop do a simple loop and take some action on something like an array you want to use 'map' over 'forEach()'.

// With 'forEach()' the operation may do nothing.
// You can just leave this completely blank or do console.log because all 'forEach()' cares about is to iterate which is going one by one to iterate over a collection of elements and apply whatever operation we tell it to on each element.
// Now, 'map' on the other hand has a restriction on the operation. It expects the operation to 'return' an element.
// So with 'forEach()' you can have multiple lines of code doing all these crazy things versus 'map', with 'map' you always have a 'return' element.
// The 'map' iterates again loop through over a collection of elements applying the operation on each element and then finally storing the result of each invocation of the operation. That's this into another collection which is 'mapArray'.

// In other words, 'map' transforms the 'array'. It creates a new array which is 'mapArray'.
// versus 'forEach()' which just does a whole bunch of actions based on the array and those actions aren't really that limited.
// If we want to 'return' a new array we have to create our own array and then push.

// Notice here something that we spoke about the idea of side effects
// Let's look at the diagrams
// If we go back with 'forEach()' we can do a whole bunch of side effects within the function.
// You can console.log, you can create a new array, you can push to that array, you can return undefined.
// When we first did the 'forEach()' or even now we're not really returning anything. So we're returning undefined
// versus with a 'map', all these side effects are theoretically gone. And because with a 'map', we have to 'return'.

// Let me just show you if I don't 'return' here (map) let's see what happens
const mapArray = array.map((num) => {
  num * 2;
});

// expected output (run in the console):
console.log('map', mapArray);
// map -> (4) [undefined, undefined, undefined, undefined]

// Right away we know that we're doing something wrong that we need to 'return'.

// We've now created a pure function where there's no question about whether we 'return' or not. We have inputs, a function with no side effects that just simply returns a value (diagram_map.png).

// Again we want to write pure simple functions and that is what 'map' allows us to do.
// And the other important thing is that we're not changing the array. This array stays the exact same with 'map' because we're always just making a new copy of the array. We're never mutating the data ([1, 2, 10, 16]).

// When you only have a single parameter with an arrow function you can actually avoid the brackets.
const double = [];

const newArray = array.forEach(num => {
  double.push(num * 2);
});

// expected output (run in the console):
console.log('forEach', double);
// forEach -> (4) [2, 4, 20, 32]

// And again because we're returning and we're just returning a single line here we can do shorthand which is just this
const mapArray = array.map(num => num * 2);

// expected output (run in the console):
console.log('map', mapArray);
// map -> (4) [2, 4, 20, 32]

// filter
// As the name suggests we can 'filter' our 'array' with a condition
const filterArray = array.filter(num => {
  return num > 5; // And as with 'map', this returns a new array so we have to 'return' something because filterArray is going to contain that information
});

// And again because it's just a single line (return num > 5;) we can do a short form here
const filterArray = array.filter(num => num > 5);

// expected output (run in the console):
console.log('filter', filterArray);
// filter -> (2) [10, 16]

const filterArray = array.filter(num => num === 5);

// expected output (run in the console):
console.log('filter', filterArray);
// filter -> []

// All you have to do is return true or false if it returns false It won't go into the array if it returns true while it will go into the array.

// reduce
const reduceArray = array.reduce((accumulator, num) => { // accumulator -> Obviously, this can be any name
  return accumulator + num; // Let's say the accumulator is zero
});

// What is an accumulator?
// - The accumulator is something where we can store the information that happens in the body of the function.

// Now, what is the accumulator? We haven't defined it anywhere.
// In 'reduce' after the function you have a second parameter. And here we can specify what we want our accumulator to start with the default value. In our case let's say zero.
const reduceArray = array.reduce((accumulator, num) => { // accumulator -> Obviously, this can be any name
  return accumulator + num;
}, 0);

// expected output (run in the console):
console.log('reduce', reduceArray);
// reduce 29

const reduceArray = array.reduce((accumulator, num) => { // accumulator -> Obviously, this can be any name
  return accumulator + num;
}, 5);

// expected output (run in the console):
console.log('reduce', reduceArray);
// reduce 34

// Remember these three methods (map, filter, reduce) because you're going to be using them a lot in your career.
// They're very very useful.
// They're pure which means every time we do an operation whatever inputs we get in it always returns a value. And there are no side effects.

// Arrays:
· array.forEach(num => {}) // For each element num of the array, executes the actions inside {}
· array.map(num => {}) // For each element num in the array, executes actions inside {} and the return needs to be specified since the return will be placed in a new array.
· array.filter(num => {}) // For each element num of the array, a condition is checked. If the value turns out true, it will be added to the new array. If none of the elements meet the condition, it will return an empty array. The return needs to be specified.
· array.reduce((accumulator, num) => {}, param3) // Accumulates values of the operation performed in previous elements, param3 being the initial value of the accumulator.
· array.concat(param1) // Concats param1 to the array
· array.includes('param1') // Verifies the array includes param1
· array.flat(param1) // Eliminates the nested arrays to a param1 level
· array.flatMap(param1 => {}) // For each element num, the operation inside {} is performed and the array is lowered to a level 1 nesting
· array.fromEntries // Turns the array into an object, making the first element of the array the property and the second the value of such property