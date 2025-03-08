// Solve the questions below:

// Solutions for Questions (Solves the problem of questions):

// #1) Create a promise that resolves in 4 seconds and returns "success" string

// Solution #1)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// #2) Run the above promise and make it console.log "success"

// Solution #2)
promise.then(console.log);
// or
promise.then((response) => console.log(response));

// Expected output:
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined
// success


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

// Solution #3)
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// Expected output:
// success


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// Solution #4)
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'));

// Expected output:
// Ooops something went wrong
// -> Promise {<rejected>: 'failed'}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "rejected"
//       [[PromiseResult]]: "failed"
// -> Uncaught (in promise) failed

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'
];

// Solution #5)
Promise.all(urls.map(url => 
  fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0]);
    console.log('2', array[1]);
    console.log('3', array[2]);
    console.log('4', array[3]);
  })
  .catch(err => console.log('Ughhhh, fix it!', err));

// Expected output:
// -> Promise {<pending>}
// 1 -> {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
// 2 -> {name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', …}
// 3 -> {name: 'R2-D2', height: '96', mass: '32', hair_color: 'n/a', skin_color: 'white, blue', …}
// 4 -> {name: 'Darth Vader', height: '202', mass: '136', hair_color: 'none', skin_color: 'white', …}

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

// Solution #6)
const urls = [
  'https://swap.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'
];

Promise.all(urls.map(url => 
  fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0]);
    console.log('2', array[1]);
    console.log('3', array[2]);
    console.log('4', array[3]);
  })
  .catch(err => console.log('Ughhhh, fix it!', err));

// Expected output:
// -> Promise {<pending>}
// -> GET https://swap.dev/api/people/1/ net::ERR_NAME_NOT_RESOLVED
/* Ughhhh, fix it! TypeError: Failed to fetch
    at <anonymous>:13:3
    at Array.map (<anonymous>)
    at <anonymous>:12:18 */