// Promises (Promises are a new feature in JavaScript as of ES6)

// I'm going to create our very first promise.
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked');
  } else {
    reject('Error, it broke');
  }
});

// Now let's show you something else that promises can do. That makes them really really powerful.

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'POOKIE');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'Is it me you are looking for?');
});

Promise.all([promise, promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  });

// Expected output:
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined
// -> (4) ['Stuff Worked', 'HIII', 'POOKIE', 'Is it me you are looking for?']
//       0: "Stuff Worked"
//       1: "HIII"
//       2: "POOKIE"
//       3: "Is it me you are looking for?"
//       length: 4
//    -> [[Prototype]]: Array(0)

promise.then(result => console.log(result));

// Expected output:
// Stuff Worked
// -> Promise {<fulfilled>: undefined}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined

promise;

// Expected output:
// -> Promise {<fulfilled>: 'Stuff Worked'}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: "Stuff Worked"

promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2);
  });

// Expected output:
// Stuff Worked!
// -> Promise {<fulfilled>: undefined}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined

promise
  .then(result => result + '!')
  .then(result2 => {
    throw Error;
    console.log(result2);
  })
  .catch(console.log);

// Expected output:
// ƒ Error() { [native code] }
// -> Promise {<fulfilled>: undefined}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined

promise
  .then(result => result + '!')
  .then(result2 => {
    throw Error;
    console.log(result2);
  })
  .catch(() => console.log('error!'));

// Expected output:
// error!
// -> Promise {<fulfilled>: undefined}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined

promise
  .then(result => {
    throw Error;
    return result + '!';
  })
  .then(result2 => {
    console.log(result2);
  })
  .catch(() => console.log('error!'));

// Expected output:
// error!
// -> Promise {<fulfilled>: undefined}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined

promise
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('error!'))
  .then(result3 => {
    console.log(result3 + '!');
  });

// Expected output:
// Stuff Worked!?!
// -> Promise {<fulfilled>: undefined}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined

promise
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('error!'))
  .then(result3 => {
    throw Error;
    console.log(result3 + '!');
  });

// Expected output:
// -> Promise {<rejected>: ƒ}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "rejected"
//    -> [[PromiseResult]]: ƒ Error()
// -> Uncaught (in promise) ƒ Error() { [native code] }
// Promise.then (async)		
// (anonymous)	@	VM723:5

// JSONPlaceholder - Free Fake REST API
// https://jsonplaceholder.typicode.com/

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
})).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[3]);
});

// Expected output:
// -> Promise {<pending>}
// -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// undefined

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
})).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});

// Expected output:
// -> Promise {<pending>}
// -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

const urls = [
  'https://jsonplaceholde.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
})).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
}).catch(() => console.log('error'));

// Expected output:
// -> Promise {<pending>}
// -> GET https://jsonplaceholde.typicode.com/users net::ERR_NAME_NOT_RESOLVED
// error

fetch('https://jsonplaceholder.typicode.com/users');

// Expected output:
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//    -> [[PromiseResult]]: Response