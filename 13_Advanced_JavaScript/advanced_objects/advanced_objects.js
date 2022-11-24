// Advanced Objects

// Three things that are important with objects:
// - reference type
// - context
// - instantiation

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

// reference type

// expected output (run in the console):
[] === [];
// false

// expected output (run in the console):
[1] === [1];
// false

var object1 = { value: 10 };

var object2 = object1;

var object3 = { value: 10 };

// What happens if I do 'object1' equals 'object2'?

// expected output (run in the console):
object1 === object2;
// true

// That makes sense, I mean 'object2' is 'object1' (var object2 = object1;).

// But what if I do 'object1' equals 'object3'?

// expected output (run in the console):
object1 === object3;
// false

// Here I get, 'false'.
// But why is that? We have value 10 (object1), value 10 (object3). They're both the same thing.

// Let's check something else

// expected output (run in the console):
object1.value = 15;
// 15

// expected output (run in the console):
object2.value;
// 15

// expected output (run in the console):
object3.value;
// 10

// I get 10.
// Well, that was confusing, right?

// Let's look at what's actually going on.
// Let's look at the diagrams.
// - Objects are what are called the 'reference types' in JavaScript.
// - Up until this point, all the other JavaScript types that we've learned including 'numbers', 'null', 'undefined', 'booleans', 'strings' even 'symbols' they're all defined by the programming language.
// - So JavaScript, the person who wrote JavaScript and ECMAScript the standard says these are 'primitive types'.
// - Now a 'reference type' which is a 'non-primitive type' is not defined by the programming languages. What that means is that they're created by the programmer.

// So let's look over here as an example.

var number1 = 1;

// - JavaScript knows what 1 is.
// - It's a number.
// - It's a 'primitive type'.
// - It's always the same thing.
// - It's immutable every time it uses the 1 that's the same 1 that JavaScript knows about.

var number2 = 1;

// - Yeah, it's using the same number 1 that JavaScript knows about.

// - However when we created:
var object1 = { value: 10 }; // (←→ object1)

var object2 = object1; // (←→ object1)

var object3 = { value: 10 }; // (←→ object3)

// - Well, those are created by the programmer. There are 'reference types'.

// var object1 = { value: 10 }; // (←→ object1)
// - So what we said was I want 'object1' to create a new object, will say this box (object1) over here this filing cabinet and in it, put 'value 10' into this box (object1).

// var object2 = object1; // (←→ object1)
// - 'object2' says, I want you to just reference and that's where the word comes from, reference 'object1', saying hey! I want whatever's inside this box (object1).

// var object3 = { value: 10 }; // (←→ object3)
// - When 'object3' gets created, it's a new object because we have the new brackets. And it's saying to put 'value 10' in this box (object3).

var object1 = Box1; // (←→ Box1)

var object2 = object1; // (←→ Box1)

var object3 = Box3; // (←→ Box3)

// var object1 = Box1; // (←→ Box1)
// - Essentially what we're doing is saying, when we create a variable (var) 'object1' when we're storing just a reference, an address to where we're storing the 'value 10' which is 'Box1'.
// - So we're saying 'object1', I'm just letting you know that this is the address of all the contents that you want and that's in 'Box1'.

// var object2 = object1; // (←→ Box1)
// - 'object2' is saying, I want whatever is an 'object1' and we look at an 'object1', an 'object1' just has the information of 'box1'. So it references that (box1).

// var object3 = Box3; // (←→ Box3)
// - An 'object3' creates a new object. So it's saying, I'm going to put my contents in 'Box3' and I'm just going to have the address of the box saying 'Box3' that's right over here (Box3).

// So going back to our example:

// expected output (run in the console):
object1.value = 15;
// 15

// - This makes sense when we change the 'object1' value to 15, we change the contents of 'Box1'.

// expected output (run in the console):
object2.value;
// 15

// - So when we do 'object2.value' which is referencing the same box as 'object1' that's 15.

// expected output (run in the console):
object3.value;
// 10

// - But 'object3.value' doesn't change because that's, that's interested in a completely different box, it's 'Box3'.

// Going back to the first example:

// expected output (run in the console):
[] === [];
// false

// Arrays, well as I mentioned, arrays are just objects at the end of the day.

// [] === [];
// - So when you create an array ('[]' → first array), it's the same thing, creating a box, a data structure. And this ('[]' → the second array) is creating a second data structure.

// So that is a 'reference type'. A very important concept.

// context
// context vs scope

// scope
// - Remember, 'scope' is created when it sees curly brackets '{}'.
// - We said that, if we create a function, as soon as we create that function there is a new 'scope' that's created.
function b() { // So we can have, 'let a' equals '4' and that lives within this universe.
  let a = 4;
}

// It ('let a' equals '4') doesn't know anything about the root scope which is over here.
// So if I do 'console.log(a)', well it's not going to work.
// So if I do this, well 'console.log(a)'

// expected output (run in the console):
console.log(a);
/* -> Uncaught ReferenceError: a is not defined
at <anonymous>:1:13 */

// Well, just return 'ReferenceError' because it doesn't exist.

// So that's 'scope'.

// Objects:

· this // when using this parameter, the method/action is applied exclusively to the element in which "this" has been summoned.

// context
// Now how is 'context' different?
// - 'context' tells you, where we are within the object.

// expected output (run in the console):
console.log(this); // ('this' - It's a special word in JavaScript)
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// 'this' is, as you can see, the 'window' object.

// expected output (run in the console):
console.log(this === window);
// true

// I can access

// expected output (run in the console):
this.alert('hello');
// (shows the popup: This page says)
// hello

// So what 'this' means, is what is the object environment that we're in right now.
// - The best way to think about it ('this') is, what is to the left (such as 'window.') of the dot ('.')?
// - So right now, I'm able to do 'alert()' because I'm inside the 'window' object (window.alert();). So doing 'window' or doing 'this' (this.alert();) is the same thing.
// - But remember, 'this' just refers to what object it's inside of.

// Two more examples to demonstrate 'this'.

// One is
function a() {
  console.log(this);
}

// expected output (run in the console):
a();
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Still the window object 'this'. Still refers to the function.
// And remember that's because I said, it has to be what object we're inside of right now.

// expected output (run in the console):
window.a();
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Second is
// In order to create a new value for 'this', you have to do something like this
const object4 = {
  a: function() {
    console.log(this);
  }
}

// expected output (run in the console):
object4.a();
// -> {a: ƒ}
//   -> a: ƒ ()
//   -> [[Prototype]]: Object

// So why is that important to us?
// - Well, first of all, you'll see it in other codebases, so it's good to know.
// - But it's really important when we do 'instantiation', 'instantiation' is when you make a copy of an object and reuse the code.
// - Imagine you're building a big multiplayer game online, and this game is going to have many many players. You can have wizards you can have trolls, warlocks, elves.
// - Now, if you had to create an object for every single player that's a lot of repeated code, that's a lot of hassle and well, that's a lot of your time and it's not very efficient.
// - To solve that, you can do something called 'instantiation'.
// - You're making instances or multiple copies of an object.

// So let me show you how we do 'instantiation' in JavaScript.

// instantiation

// Classes:

// · Class creator syntax:
Classname {
  constructor(param1, param2) {
    this.param1 = value;
    this.param2 = value2;
  }
  classmethod() {
    
  }
}

// · Create class object syntax:
new Classname(param1, param2);

// · Class extension syntax:
Classextension extends Classname {
  constructor(param1, param2) {
    super(param1, param2);
  }
  classextensionmethod() {

  }
}

// You utilize a class when we are planning to create several objects with similar properties.
// A class extension is used when those several objects can contain properties or categories with specific properties and methods while respecting the initial constructor.

class Player { // capitalize a 'class'
  constructor(name, type) { // Let's give it, this 'Player' can have a 'name' and a 'type'
    this.name = name;
    this.type = type;
  }
  introduce() { // And now I can create anything that I want for the 'Player'. Let's say, we want to create a method such as 'introduce()'.
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

// What just happened here? → constructor(name, type) {...}
// - 'constructor', when you create a 'class', a 'Player', 'class' says.
// - Every time I'm making a copy of a 'Player' the first thing that gets run is the 'constructor' function and this 'constructor' function is gonna create these properties on the 'Player' object. So 'name' and a 'type'.
// introduce() {...}
// - And now I can create anything that I want for the 'Player'.
// - Let's say, we want to create a method such as 'introduce()'.

// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//   }
// }

// - And the reason we use 'this' here is that when we create a 'Player' we can access the 'name' and 'type' properties.
// - In order to access the 'Player' and make copies of it.
// - You'll have to run a 'constructor' which is all the properties and methods that you want the 'Player' to have.
// - You can also create methods ('introduce()') that 'Players' can have any time you want to access a property within the 'constructor', well, use 'this.name' for (if I) wanna use 'introduce' I'll have to do 'this.introduce'.

// OK, so we have a 'Player' but when we're building our multiplayer game we want to now copy this but add onto it.
// - Let's say we have what we want to create a wizard player, a player that's a wizard.
// In that case, we would do,
class Wizard extends Player { // 'class Wizard' again a capital letter | 'extends' is just the JavaScript keyword
  constructor(name, type) { // again because it's a 'class', I have to do a 'constructor'
    super(name, type);
  }
  play() { // OK, so let's say that with the 'Wizard', we also want to have a 'play' function
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

// So what is this saying?
// - I'm saying, I want 'Wizard' to extend whatever 'Player' has. So I want to add on top of whatever 'Player' has.
// - Any time we extend something we need to also call the 'constructor' function of the 'Player'.
// - We have to do something called 'super' with the properties that we want to pass to the 'constructor'. In this case, 'name' and 'type'.
// - Whenever you 'extend' a class, you want to use 'super' so that you essentially have access to these:
// constructor(name, type) {
//   this.name = name;
//   this.type = type;
// }

// What's the power? What's the reason that we just did this?
// - Now we can do this, instead of constantly creating 'Player' and then saying that they have their 'Wizard' and they can 'play'.

const wizard1 = new Wizard('Shelly', 'Healer');

// And if I want to create a new wizard
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// There were a lot of new syntaxes, so let's go through it and make sure we understand everything.
// As we've learned, let's use console log(console.log) to really understand what we're doing.

// instantiation
class Player { // capitalize a 'class'
  constructor(name, type) { // Let's give it, this 'Player' can have a 'name' and a 'type'
    console.log(this); // I'm going to add a console log(console.log) right at the top over here
    this.name = name;
    this.type = type;
  }
  introduce() { // And now I can create anything that I want for the 'Player'. Let's say, we want to create a method such as 'introduce()'.
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player { // 'class Wizard' again a capital letter | 'extends' is just the JavaScript keyword
  constructor(name, type) { // again because it's a 'class', I have to do a 'constructor'
    super(name, type);
  }
  play() { // OK, so let's say that with the 'Wizard', we also want to have a 'play' function
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');

// And if I want to create a new wizard
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Actually, I'm going to copy this into the console
// And see what the console log(console.log) gives us
class Player { // capitalize a 'class'
  constructor(name, type) { // Let's give it, this 'Player' can have a 'name' and a 'type'
    console.log(this); // I'm going to add a console log(console.log) right at the top over here
    this.name = name;
    this.type = type;
  }
  introduce() { // And now I can create anything that I want for the 'Player'. Let's say, we want to create a method such as 'introduce()'.
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player { // 'class Wizard' again a capital letter | 'extends' is just the JavaScript keyword
  constructor(name, type) { // again because it's a 'class', I have to do a 'constructor'
    super(name, type);
  }
  play() { // OK, so let's say that with the 'Wizard', we also want to have a 'play' function
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');

// expected output (run in the console):
// -> Wizard {}
//   name: "Shelly"
//   type: "Healer"
//  -> [[Prototype]]: Player

// Now, if I go to 'wizard1.play()'
// expected output (run in the console):
wizard1.play();
// WEEEEEEE I'm a Healer

// But I also have access to 'wizard1.introduce()'
// expected output (run in the console):
wizard1.introduce();
// Hi I am Shelly, I'm a Healer

// And, we also have access to 'wizard2'
// I have to run this again. Let's run this again.
class Player { // capitalize a 'class'
  constructor(name, type) { // Let's give it, this 'Player' can have a 'name' and a 'type'
    console.log(this); // I'm going to add a console log(console.log) right at the top over here
    this.name = name;
    this.type = type;
  }
  introduce() { // And now I can create anything that I want for the 'Player'. Let's say, we want to create a method such as 'introduce()'.
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player { // 'class Wizard' again a capital letter | 'extends' is just the JavaScript keyword
  constructor(name, type) { // again because it's a 'class', I have to do a 'constructor'
    super(name, type);
  }
  play() { // OK, so let's say that with the 'Wizard', we also want to have a 'play' function
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard2 = new Wizard('Shawn', 'Dark Magic');

// expected output (run in the console):
wizard2.introduce();
// Hi I am Shawn, I'm a Dark Magic

// Let's just try something
// - And I'm only going to copy the first wizard so that we don't get two of these running.
// - Again because we're creating two 'wizards', we're going to have this run twice.
// - But just for our sanity, we'll run 'Shelly'.
class Player { // capitalize a 'class'
  constructor(name, type) { // Let's give it, this 'Player' can have a 'name' and a 'type'
    console.log('player', this); // I'm going to add a console log(console.log) right at the top over here
    this.name = name;
    this.type = type;
  }
  introduce() { // And now I can create anything that I want for the 'Player'. Let's say, we want to create a method such as 'introduce()'.
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player { // 'class Wizard' again a capital letter | 'extends' is just the JavaScript keyword
  constructor(name, type) { // again because it's a 'class', I have to do a 'constructor'
    console.log('wizard', this); // If I do console log(console.log) here
    super(name, type);
  }
  play() { // OK, so let's say that with the 'Wizard', we also want to have a 'play' function
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');

// expected output (run in the console):
/* -> Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
at new Wizard (<anonymous>:14:13)
at <anonymous>:22:17 */

// I get an error, 'ReferenceError'
// - What that's saying is, that in order for me to access 'this' and get 'this.type', I have to call 'super' which runs a 'constructor' function and 'Player'. So that's what 'super' is doing.
// - I'm gonna just put this (console.log('wizard', this);) at the bottom after we call 'super' and now it should work.

// Let's see
class Player { // capitalize a 'class'
  constructor(name, type) { // Let's give it, this 'Player' can have a 'name' and a 'type'
    console.log('player', this); // I'm going to add a console log(console.log) right at the top over here
    this.name = name;
    this.type = type;
  }
  introduce() { // And now I can create anything that I want for the 'Player'. Let's say, we want to create a method such as 'introduce()'.
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player { // 'class Wizard' again a capital letter | 'extends' is just the JavaScript keyword
  constructor(name, type) { // again because it's a 'class', I have to do a 'constructor'
    super(name, type);
    console.log('wizard', this); // If I do console log(console.log) here
  }
  play() { // OK, so let's say that with the 'Wizard', we also want to have a 'play' function
    console.log(`WEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');

// expected output (run in the console):
// player -> Wizard {}
//             name: "Shelly"
//             type: "Healer"
//           -> [[Prototype]]: Player
// wizard -> Wizard {name: 'Shelly', type: 'Healer'}
//             name: "Shelly"
//             type: "Healer"
//           -> [[Prototype]]: Player

// Now just to show you something.
// This is actually new syntax that you'll see in 'React' and it was part of ES6.

// But back in the day, this is how we used to do it.
// - The exact same code I have up there is right here it's called classical inheritance.
// - It doesn't look too bad but you see that there's a prototype which it's another thing that you'll see in JavaScript and, to be honest with you, you shouldn't really use it.

// Classical Inheritance
var Player = function(name, type) {
  this.name = name;
  this.type = type;
}

Player.prototype.introduce = function() {
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard1 = new Player('Shelly', 'healer');
var wizard2 = new Player('Shawn', 'dark magic');

wizard1.play = function() {
  console.log(`WEEEEEEE I'm a ${this.type}`);
}

wizard2.play = function() {
  console.log(`WEEEEEEE I'm a ${this.type}`);
}

// - It doesn't look very nice and you see that we have to attach 'play' to both 'wizard1' and 'wizard2'.
// - It (Classical Inheritance) just doesn't look as nice as this (instantiation).

// And once you get used to everything (instantiation). It's (instantiation) not too bad.
// - All we're saying is, as soon as we say 'class', we say, hey! we're probably going to make a copy of this object (Player).
// - So we want to make copies of the 'Player', we want to make copies of 'Wizard' and that's called 'instantiation'.
// - When I do the 'new' keyword, I say make an instance of 'Wizard' and 'Wizard' uses some functionality from the 'Player' and adds its own little 'play' function as well.

// 'Objects' are really really complicated. They're really hard. But with that, it gives us a lot of power.