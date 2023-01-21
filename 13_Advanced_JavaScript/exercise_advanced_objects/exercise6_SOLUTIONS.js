// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// Evaluate these:
// #1
[2] === [2]
{} === {}

// Solution:
[2] === [2]
// expected output:
// false

{} === {}
// expected output:
// false

// #2 what is the value of property a for each object?
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

// Solution:
console.log(object1);
// expected output:
// -> {a: 4}

console.log(object2);
// expected output:
// -> {a: 4}

console.log(object3);
// expected output:
// -> {a: 4}

console.log(object4);
// expected output:
// -> {a: 5}


// #3 create two classes: an Animal class and a Mammal class.
// create a cow that accepts a name, type, and color and has a sound method that moo's her name, type, and color.

// Solution:
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(`Moo I'm ${this.name}, I'm a ${this.type}, and I'm ${this.color}.`);
  }
}

const cow = new Mammal('Shelly', 'cow', 'brown');

cow.sound();
// expected output:
// Moo I'm Shelly, I'm a cow, and I'm brown.