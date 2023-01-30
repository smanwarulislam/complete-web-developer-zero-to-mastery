// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// Solve the below questions:

// #1 Turn this array into a new array: [1, 2, 3, [4], [5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

// Solution:
console.log(array.flat(2));
// Expected output:
// -> (5) [1, 2, 3, Array(1), Array(1)]

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// Solution:
console.log(greeting.flatMap(x => x.join(' ')));
// Expected output:
// -> (3) ['Hello young grasshopper!', 'you are', 'learning fast!']

// #3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// Solution:
console.log(greeting.flatMap(x => x.join(' ')).join(' '));
// Expected output:
// Hello young grasshopper! you are learning fast!

// #4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

// Solution:
console.log(trapped.flat(Infinity));
// Expected output:
// -> [3]

// Infinity is actually a LARGE number in JavaScript. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

// #5 Clean up this email to have no white spaces. Make the answer in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';

// Solution:
console.log(userEmail3.trimStart().trimEnd());
// Expected output:
// cannotfillemailformcorrectly@gmail.com

// #6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Solution:
const usersArray = Object.entries(users);
console.log(usersArray);
// Expected output:
// -> (3) [Array(2), Array(2), Array(2)]
/*   -> 0: (2) ['user1', 18273]
  -> 1: (2) ['user2', 92833]
  -> 2: (2) ['user3', 90315]
  length: 3
  -> [[Prototype]]: Array(0) */

// #7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// Solution:
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);
// Expected output:
// -> (3) [Array(2), Array(2), Array(2)]
/*   -> 0: (2) ['user1', 36546]
  -> 1: (2) ['user2', 185666]
  -> 2: (2) ['user3', 180630]
  length: 3
  -> [[Prototype]]: Array(0) */

// #8 change the output array of question #7 back into an object with all the user's IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

// Solution:
const updatedUsers = Object.fromEntries(updatedUsersArray);
console.log(updatedUsers);
// Expected output:
// -> {user1: 36546, user2: 185666, user3: 180630}