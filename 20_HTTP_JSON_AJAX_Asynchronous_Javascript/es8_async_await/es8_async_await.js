// ES8 - Async Await

// 'Async Await' (“async/await”)

// Using promises - JavaScript
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

// with “async/await” it would look something like this:
async function playerStart() {
  const first = await movePlayer(100, 'Left'); // pause
  const second = await movePlayer(400, 'Left'); // pause
  await movePlayer(10, 'Right'); // pause
  await movePlayer(330, 'Left'); // pause
}

// Fetch API
// The fetch() function
fetch();

// Expected output:
// -> Promise {<rejected>: TypeError: Failed to execute 'fetch' on 'Window': 1 argument required, but only 0 present.
//     at <…}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "rejected"
//    -> [[PromiseResult]]: TypeError: Failed to execute 'fetch' on 'Window': 1 argument required, but only 0 present. at <anonymous>:1:1
// -> Uncaught (in promise) TypeError: Failed to execute 'fetch' on 'Window': 1 argument required, but only 0 present.
// at <anonymous>:1:1

// JSONPlaceholder - Free Fake REST API
// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(console.log)

// Expected output:
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined
// -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// using async/await:
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

fetchUsers();

// Expected output:
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined
// -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

const urls = [
  // 'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholde.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => 
  fetch(url).then(response => response.json())
)).then(array => {
  console.log('users', array[0]);
  console.log('posts', array[1]);
  console.log('albums', array[2]);
}).catch('oops');

// Expected output:
// -> Promise {<pending>}
// users -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// posts
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// albums
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// Let's convert this (diagram_273.png/diagram_279.png) into an async function:
const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url => 
    fetch(url).then(response => response.json())
  ))
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
};

getData();

// Expected output:
// -> Promise {<pending>}
// users -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// posts
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// albums
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// try...catch
// try...catch statement/try...catch block
const getData2 = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
      fetch(url).then(response => response.json())
    ))
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch () {
    console.log('oops');
  }
};

// Expected output:
// Uncaught SyntaxError: Unexpected token ')'

const getData3 = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
      fetch(url).then(response => response.json())
    ))
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log('oops', error);
  }
};

getData3();

// Expected output:
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined
// -> GET https://jsonplaceholde.typicode.com/users net::ERR_NAME_NOT_RESOLVED
// oops TypeError: Failed to fetch
//     at <anonymous>:4:7
//     at Array.map (<anonymous>)
//     at getData3 (<anonymous>:3:61)
//     at <anonymous>:1:1