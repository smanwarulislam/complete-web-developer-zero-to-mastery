// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

// Solution:
dragons.includes('John');
// Expected output:
// false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

// Solution:
dragons.filter(name => name.includes('John'));
// Expected output:
// -> ['Johnathan']

// #3) Create a function that calculates the power of 100 of a number entered as a parameter

// Solution:
const power100 = (num) => num ** 100;

// #4) Using your function from #3, put in the parameter 10000. What is the result?
// Research for yourself why you get this result

// Solution:
power100(10000);
// Infinity