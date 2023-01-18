// Pass By Value vs Pass By Reference

// Now in the previous, I said that primitive types are immutable.
// - What does that mean?
// - Well, it means that we can't really change them in order to change them we need to completely remove the primitive type.
// - Let's say variable a equals 5.
// - Well, in order for me to change what that 5 value is I have to literally move it from memory and create something new like a equals 10.
// - I can really modify it just something new gets created and
// - primitive types are exactly like that when I assign variable a to 5 somewhere in memory variable a is going to contain and reference the value 5
// - if I do variable b equals to let's say 10 again the same thing and they don't really know of each other's existence.
// - This is what we call pass by value.
// - Objects on the other hand are what we call pass by reference.
// - Let's write some code to figure out what this really means.

// → Chrome DevTools Console (See the Google Chrome JavaScript Console)
// → Let's run this through the console
// → Run code live in your browser through Replit, formerly Repl.it, which is an online integrated development environment (IDE).

var a = 5;
// Well, variable a now has an address of where this primitive value 5 sits in memory.

// var b = 10;
// And the same with variable b. Variable b has an address of where the primitive value 10 sits in memory.

// What if I do
var b = a;
// Hey, what happens then remember primitive types they're passed by value when we do pass by value.

// Well, what if I do something like here?
b++;

console.log(a);
// expected output:
// 5

console.log(b);
// expected output:
// 6

// This is because of pass by value all I did or all the JavaScript engine did was copy the primitive type value 5 as if I was doing
// var b = 5;
// - so that now b has a reference to the value primitive type 5 all we did was copy the value.
// - So looking at this (by_reference_vs_by_value.png) diagram should make sense.
// - Any time even though we did b equals to a, we simply copied the value and put it into a new memory space in our machine.
// - Remember our memory heap or our stack where we store information we just simply made a copy they don't really have any connection whatsoever and that's what pass by value meets.
// - Pass by value simply means we copy the value and we create that value somewhere else in memory.

// Now let's see how objects are different.

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1);
// expected output:
// -> {name: 'Yao', password: 'easypeasy'}

console.log(obj2);
// expected output:
// -> {name: 'Yao', password: 'easypeasy'}

// Whoa what just happened
// - password has been changed to both the obj1 password and the obj2 password were updated by doing this (obj2.password = 'easypeasy';).
// - And this is due to pass by reference.
// - You see objects in JavaScript are stored in memory and are passed by reference which means that we don't copy the values as we did with primitive types.
// - We simply when we assigned obj1 to obj2 we simply said hey this (Object) is where the Object is in memory.
// - obj1 and obj2 are both pointing somewhere in memory.
// - We don't know where.
// - Somewhere in the memory heap to a shelf that contains this ({name: 'Yao', password: '123'}) information.
// - So all I did by saying obj2 equals obj1 is hey this (obj1) is let's say the
// let obj1 = {name: 'Yao', password: '123'};
// let obj2 = 'address in memory';
// - of wherever this ({name: 'Yao', password: '123'}) is located.
// - So what that means is when I change
// obj2.password = 'easypeasy';
// - I'm saying well change the password (obj2.password) on this ({name: 'Yao', password: '123'}) object in memory that also obj1 is pointing to its referencing that's where pass by reference comes from.

// Now, why do you think that's a good idea?
// - Let's think about this.
// - Why is this good?
// - I mean it's kind of nice right?
// - Because by just having one object here ({name: 'Yao', password: '123'}) we're saving space and memory.
// - We're not copying and cloning the object creating multiple versions.
// - We can simply save memory references in just one location ({name: 'Yao', password: '123'}) instead of just loading up our memory heap.

// But why might this also be bad?
// - Well because, unlike a primitive type, we might have this (obj2.password = 'easypeasy';) issue whereby mistake somebody else changes a property (password) on that (let obj1 = {name: 'Yao', password: '123'};) referenced object.
// - So this is something that we need to be careful about.

// Let's do another example.

// And just to prove as I said before that arrays are simply object.
// Let's try this with an array.
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(187628761);

console.log(d);
// expected output:
// -> (6) [1, 2, 3, 4, 5, 187628761]

// We modified the array but because arrays are object they're passed by reference.
// - c should also have changed right?
console.log(c);
// expected output:
// -> (6) [1, 2, 3, 4, 5, 187628761]

// - c has also changed as well.

// We noticed something here right?
// - This is good. We're saving memory.
// - We're not just constantly copying things.
// - Imagine if c was a massive massive object.
// - If we're copying two different parts of the code every time well this would create a lot of memory
// - but then there are times when maybe we do want to own an object and copy it so that we don't modify it like this.
// - How can we do that
// - Well with something like an array.
// - There are different ways of doing it but I can simply do:

var c2 = [1, 2, 3, 4, 5];
var d2 = [].concat(c2);
d2.push(187628761);

console.log(c2);
// expected output:
// -> (5) [1, 2, 3, 4, 5]

// You see that c2 is still the same.
// - But if I go to d2
console.log(d2);
// expected output:
// -> (6) [1, 2, 3, 4, 5, 187628761]

// - I have a new array. It's cloned an array.

// Objects are a little bit more difficult.

// Let's say we had an object.
let obj3 = {a: 'a', b: 'b', c: 'c'};

// This object I want a copy.
// - I want to have this ({a: 'a', b: 'b', c: 'c'}) piece of code.
// - This ({a: 'a', b: 'b', c: 'c'}) object is in a different location in memory.
// - How can we do that?
// - Well I can't do another object like this:
// let obj4 = obj3;
// - because it's simply going to pass by reference and we're still going to be referencing the same object ({a: 'a', b: 'b', c: 'c'})
// - instead, we can clone an object by doing something like this:
let clone = Object.assign({}, obj3);

obj3.c = 5;

console.log(clone);
// expected output:
// -> {a: 'a', b: 'b', c: 'c'}

// Look at that the cloned object was not affected at all.
// - Even though we changed c to 5.
// - Remember if we didn't do this (Object.assign({}, obj3)) we didn't clone it and we just did:
let obj5 = {a: 'a', b: 'b', c: 'c'};
let clone2 = obj5;

obj5.c = 5;

console.log(clone2);
// expected output:
// -> {a: 'a', b: 'b', c: 5}

// - that would have been passed by reference and we would see the change that we saw in the original object
// - but because of Object.assign() we were able to clone the object.

// - There's also another way of doing it and that is using the spread operator (...).
let obj6 = {a: 'a', b: 'b', c: 'c'};
let clone3 = Object.assign({}, obj6);
let clone4 = {...obj6};

// - spread operator (...). This is a new feature that we got in the JavaScript language which is really really nice.

obj6.c = 5;

console.log(obj6);
// expected output:
// -> {a: 'a', b: 'b', c: 5}

console.log(clone3);
// expected output:
// -> {a: 'a', b: 'b', c: 'c'}

console.log(clone4);
// expected output:
// -> {a: 'a', b: 'b', c: 'c'}

// I see that clone3 hasn't been modified
// - and if I do clone4 that hasn't been modified
// - either just for reference, I'll add the original object (obj6) as well to see that indeed it is different than what we had before.

// So cloning is great but let me ask you this what do you think will happen with the code that we have if we have an object inside an object?
// - For example, if c instead of just being a string is another pass by reference object that let's say:
let obj7 = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};

let clone5 = Object.assign({}, obj7);
let clone6 = {...obj7};

// obj7.c = 5;

// As to what is happening.
// - So what happens here?
// - We have an object (obj7) that is referenced somewhere in memory and inside of that object there is again another pointer to another place in memory that references this (deep: 'try and copy me') object.

// console.log(obj7);
// expected output:
// { a: 'a', b: 'b', c: 5 }

// console.log(clone5);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// console.log(clone6);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// - well, nothing has changed.
// - I mean c has obviously changed.
// - Well, that's something that we already saw before.
// - But what if I change this time instead of c what if I do:
obj7.c.deep = 'hahaha';

// - What do you think will happen here?

// console.log(obj7);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

// console.log(clone5);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

// console.log(clone6);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

// - Oh no we've just cloned everything but it got overwritten I thought we cloned everything.
// - What happened here
// - Remember each object gets pass by reference.
// - So although we clone (clone5, clone6) the object (obj7) initial object (obj7), this is what we call a shallow clone.
// - It clones the first level (let obj7 = {}).
// - So that is the memory address in this (obj7) object but within this (obj7) object, there was another address to another object ({deep: 'try and copy me'}).
// - So again remember this is just another address (c: '87912879812') that we had someplace in memory
// - and this ({deep: 'try and copy me'}) address well it never changed. It ({deep: 'try and copy me'}) always referenced this (deep: 'try and copy me') object.
// - So this is shallow cloning where we can only clone the first layer (let obj7 = {}).
// - That's a big problem, right?
// - How can we do deep cloning?
// - And the way we can do this is well a little funky we use JSON (JavaScript Object Notation).
// let superClone = JSON.parse(JSON.stringify(obj8));
let obj8 = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};

let clone7 = Object.assign({}, obj8);
let clone8 = {...obj8};
let superClone = JSON.parse(JSON.stringify(obj8));

obj8.c.deep = 'hahaha';

console.log(obj8);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

console.log(clone7);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

console.log(clone8);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'hahaha' } }

console.log(superClone);
// expected output:
// { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// The superClone version did a deep clone of the object.

// Now I do want to give you a bit of a warning.
// - However, if you're doing a deep clone:
// JSON.parse(JSON.stringify(obj8))
// - Well you should be careful because this:
// JSON.parse(JSON.stringify(obj8))
// - can have some performance implications.
// - If this (let obj8 = {}) object was extremely deep a massive object it's:
// JSON.parse(JSON.stringify(obj8))
// - going to take a long time to clone everything right.
// - So you won't see this:
// JSON.parse(JSON.stringify(obj8))
// - out in the wild too much if you're cloning objects like this (let obj8 = {}).
// - There are most likely some other ways that you should be doing things.
// - But I wanted to show you the idea of pass by reference, the idea of shallow cloning, deep cloning, and some of the ways that we can use objects to get the desired output.