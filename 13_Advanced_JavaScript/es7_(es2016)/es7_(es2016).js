// ES7 (ES2016)

// ES7 which was introduced in 2016, is very very easy to grasp.
// - Why?
// - Well, because, unlike ES6 which had a lot of changes.
// - ES7 only has two additions to the language.
// - Here, I'll go through both of them.
// - The first one is the 'includes' method that was added to strings and arrays.
// - Let me show you.

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

'Hellooooo'.includes('o');
// expected output:
// true

// - We can also use it on arrays.
const pets = ['cat', 'dog', 'bat'];

pets.includes('dog');
// expected output:
// true

pets.includes('bird');
// expected output:
// false

// That's one of them.
// - And then the second one is the exponential operator.
const square = (x) => x ** 2; // That means 'x' to the power of 2

square(2);
// expected output:
// 4

square(5);
// expected output:
// 25

const cube = (y) => y ** 3;

cube(3);
// expected output:
// 27

cube(4);
// expected output:
// 64

// Isn't that nice?

// ECMAScript is going to be releasing small incremental changes every year,
// - so it's easy to stay on top of language and avoid scenarios like ES6 where all of these changes were made and people had a hard time learning all of them.