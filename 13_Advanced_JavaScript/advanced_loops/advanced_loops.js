// JAVASCRIPT LOOPING
// ------------------
// for
// while
// do (do...while)
// forEach (new in ECMAScript 5)

// You see I actually left out a few other ways that we can loop in JavaScript.
// - But there are actually two other ways that we can loop in JavaScript and I'm going to show you how to do that here.

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

// Advanced Loops

const basket = ['apples', 'oranges', 'grapes'];

// Now in order for us to loop through this basket we know how to do this right.
// - We've learned about the 'for' loops.
// 1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

// So that's the first type of loop that we saw.

// expected output:
// apples
// oranges
// grapes

// All right so that's the first way we already know how to do that.

// We could also use the 'forEach' loop that came new in ES5.
// 2
basket.forEach(item => {
  console.log(item);
});

// That looks a lot cleaner than it was before.

// expected output:
// apples
// oranges
// grapes

// I'm not going to show you how to do the 'while' loop and the 'do...while' loop because we've known about it.

// But there are two other ways that we can loop through things in JavaScript.
// - The first one is called the 'for of' loop and the other one is the 'for in' loop.

// for of
// The first one the 'for of' loop works in a way that's very similar to these two ('for' loop, 'forEach' loop).
// - It's almost as if we're combining these two ('for' loop, 'forEach' loop) together and this is a new specification with ES6 So this is a new feature of JavaScript.
for (item of basket) { // We're using the 'for' keyword here ('for' loop) but we're saying 'of'. item → And we're just creating a variable we can name this whatever we want. 'basket' which is our array.
  console.log(item);
}

// expected output:
// apples
// oranges
// grapes

// And as we know in programming there are many ways of doing things and these are just some of the ways that we can loop through this array.

// But I want to mention a key term here.
// - What we're doing here is something called 'Iterating' over this array.
// for of
// Iterating - arrays, strings
for (item of basket) { // We're using the 'for' keyword here ('for' loop) but we're saying 'of'. item → And we're just creating a variable we can name this whatever we want. 'basket' which is our array.
  console.log(item);
}

// This wording (Iterating) is really confusing at first when you first hear it.
// - But 'Iterating' simply means we're able to go one by one through an item like let's say a 'basket' which has an array go one by one and look at these items.
// - 'Iterating' is able to be done in JavaScript on what we call iterables.
// - And these iterables is something that JavaScript provides us that says hey you can iterate over this thing and what is this thing.
// - Well in JavaScript you can iterate over arrays and we've already seen that and also strings.
// Iterating - arrays, strings

// If I just turn this (basket) into a string and run the 'for of' loop here
for (item of 'basket') {
  console.log(item);
}

// expected output:
// b
// a
// s
// k
// e
// t

// I see that I'm iterating over the string one by one.

// So both arrays and strings are iterable in JavaScript because we're able to iterate over individual items.
// - and 'for of' allows us to iterate over these iterables.

// But let's talk about the next thing the 'for in' loop.
// for in
// - The 'for in' loop looks something like this.
// - Now the 'for in' loop works with objects.
// - So let's create an object here and we'll call this object 'detailedBasket'
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

// for in
// for in - properties
for (item in detailedBasket) {
  console.log(item);
}

// expected output:
// apples
// oranges
// grapes

// The 'for in' loop allows us to loop over and see the object properties.
// - So that I can check what I need to go grocery shopping for apples oranges and grapes.

// Now here's the tricky part and you'll hear this word mentioned a lot when you talk to your programming friends.
// - And he can get really really confusing.
// - What we're doing here (for in - properties) is not iterating because iterating is something that we can do with arrays and strings (for of → Iterating - arrays, strings).

// for in - properties
// enumerating - objects
for (item in detailedBasket) {
  console.log(item);
}

// With an object in JavaScript, we're doing something called 'enumerating'.
// - Because the properties of an object are what we call enumerable and an object in JavaScript is enumerable if it allows us to see the properties.
// - So apples oranges and grapes are enumerable.
// - That is we can use it in a 'for in' loop to check them out.
// - So enumerating is for objects.

// Now enumerable and iterable what happens if I switch these around?

// - What if I have 'detailedBasket' in here?
// for of
// Iterating - arrays, strings
for (item of detailedBasket) {
  console.log(item);
}

// So we're using a 'for of' loop with an object (detailedBasket).
// - What do you think will happen?

// expected output:
/* -> Uncaught TypeError: detailedBasket is not iterable
at <anonymous>:4:14 */

// I get an error.
// - And why is that?
// - Well, we know that right?
// - I said that in JavaScript we have arrays and strings that are iterable and objects in most cases are not iterable.
// - You see 'for of' loop doesn't work with objects because simply the JavaScript language needs to provide this property that is called iterable when this property is only given by arrays and strings and because 'for of' loops only work with iterable.
// - It's going to give us this error (Uncaught TypeError).

// - And the 'basket' in here.
// for in - properties
// enumerating - objects
for (item in basket) {
  console.log(item);
}

// But what about here?
// - What if I do a 'for in' loop on the 'basket'? Which is the array.

// expected output:
// 0
// 1
// 2

// Look at that it's working.
// - I get 0 1 2 and that is because underneath the hood you can think of JavaScript arrays like object.
// - Because an array has an index of 0 1 and 2.
// - So we can think of a 'basket' as an object that has properties:
basket = {
  0: 'apples',
  1: 'oranges',
  2: 'grapes'
};

// - So the 'for in' loop is enumerating over the properties 0 1 and 2 which lists it out for us:
// 0
// 1
// 2

// And although you can go a long time without ever using 'for in' loops we can use something like:
Object.keys();
// - that we've seen before.
// - or
Object.values();
// - or
Object.entries();
// - or we can use 'forEach' loops or 'for' loops instead of 'for of' loops.

// It's good to know these differences because if you see them in a codebase you want to understand what's happening.
// - And also if you ever hear somebody saying iterable or numerable you kind of have an idea of the difference.

// Now to review:
// - a 'for in' loop loops over enumerable properties and enumerable property names of an object.
// - the 'for of' loop doesn't work with object because they are not iterable.

// Now there are small caveats and exceptions to these rules but 99 percent of the time you should consider this.

// You're using the 'for in' loop for object and the 'for of' loop for arrays and strings.

// Loops:
· for of:
for (param1 of array) {} // It's a for loop in an array and an action over the element number param1 in an array array
· for in:
for (param1 in obj) {} // It's a for loop of the properties and an action over the property number param1 in an object obj

// both arrays and strings are iterable in JS
// 'for of' cannot be used in objects, but 'for in' can be used in arrays, you get the index number as a return