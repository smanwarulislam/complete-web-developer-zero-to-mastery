// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

// Create an array using forEach that has all the usernames with a "!" to each of the usernames
// Solution:
let newArray = [];

array.forEach(user => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
});

// expected output (run in the console):
console.log(newArray);
// -> (4) ['john!', 'becky!', 'susy!', 'tyson!']

// Another Solution:
let newArray = [];

array.forEach(user => {
  newArray.push(user.username + "!");
});

// expected output (run in the console):
console.log(newArray);
// -> (4) ['john!', 'becky!', 'susy!', 'tyson!']


// Create an array using map that has all the usernames with a "?" to each of the usernames
// Solution:
const mapArray = array.map(user => {
  let { username } = user;
  return username + "?";
});

// expected output (run in the console):
console.log(mapArray);
// -> (4) ['john?', 'becky?', 'susy?', 'tyson?']

// Another Solution:
const mapArray = array.map(user => user.username + "?");

// expected output (run in the console):
console.log(mapArray);
// -> (4) ['john?', 'becky?', 'susy?', 'tyson?']


// Filter the array to only include users who are on team: red
// Solution:
const filterArray = array.filter(user => {
  return user.team === "red";
});

// expected output (run in the console):
console.log(filterArray);
// -> (2) [{…}, {…}]
  // -> 0: {username: 'john', team: 'red', score: 5, items: Array(3)}
  // -> 1: {username: 'susy', team: 'red', score: 55, items: Array(3)}
  //    length: 2
  // -> [[Prototype]]: Array(0)


// Find out the total score of all users using reduce
// Solution:
const total = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);

// expected output (run in the console):
console.log(total);
// 71

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
});

// (1), what is the value of i?
// Answer:
// INDEX of the array.

// (2), Make this map function pure:
// Solution:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
});

// BONUS: create a new list with all user information, but add "!" to the end of each item they own.
// Solution:
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
});

// expected output (run in the console):
console.log(answer);
// -> (4) [{…}, {…}, {…}, {…}]
  // -> 0: {username: 'john', team: 'red', score: 5, items: Array(3)}
  //    -> items: (3) ['ball!', 'book!', 'pen!']
  //       score: 5
  //       team: "red"
  //       username: "john"
  //    -> [[Prototype]]: Object
  // -> 1: {username: 'becky', team: 'blue', score: 10, items: Array(3)}
  //    -> items: (3) ['tape!', 'backpack!', 'pen!']
  //       score: 10
  //       team: "blue"
  //       username: "becky"
  //    -> [[Prototype]]: Object
  // -> 2: {username: 'susy', team: 'red', score: 55, items: Array(3)}
  //    -> items: (3) ['ball!', 'eraser!', 'pen!']
  //       score: 55
  //       team: "red"
  //       username: "susy"
  //    -> [[Prototype]]: Object
  // -> 3: {username: 'tyson', team: 'green', score: 1, items: Array(2)}
  //    -> items: (2) ['book!', 'pen!']
  //       score: 1
  //       team: "green"
  //       username: "tyson"
  //    -> [[Prototype]]: Object
  //    length: 4
  // -> [[Prototype]]: Array(0)