// Solve the problems below:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then(console.log);

// Solution #1)
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
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

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

// Solution #2)
const getData2 = async function () {
  const [ users, posts, albums ] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }),
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData2();

// or
// Grok (https://grok.com/) | Grok 3
// So, alternatively, the complete getData3 function becomes (using an async arrow function): (Async/Await in Fetch API - Grok)
const getData3 = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
      const resp = await fetch(url);
      return resp.json();
    }),
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData3();

// or
// Grok (@grok) / X (https://x.com/grok) | Grok 3
// Final Updated Code (the getData4 function) (using an async arrow function)
const getData4 = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    })
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData4();

// or
// Grok (@grok) / X (https://x.com/grok) | Grok 3 (Thoughts)
// So, the updated function (getData5) is (using an async arrow function):
const getData5 = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    })
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData5();

// or
// Grok (@grok) / X (https://x.com/grok) | Grok 3 (Thoughts)
// Alternatively, I could write a separate async function to fetch and parse JSON.
// So, for example, I can do:
const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const getData6 = async function () {
  const promises = urls.map(fetchJson);
  const [users, posts, albums] = await Promise.all(promises);
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData6();

// or
// Alternatively, I could inline the async function without defining fetchJson separately.
const getData7 = async function () {
  const promises = urls.map(async (url) => {
    const response = await fetch(url);
    return response.json();
  });
  const [users, posts, albums] = await Promise.all(promises);
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData7();

// or
// Grok (https://grok.com/) | Grok 3 (Thoughts)
// Alternatively, I could write a separate async function to fetch and parse JSON. (Async/Await in Fetch API - Grok)
// For example:
const fetchJson2 = async (url) => {
  const resp = await fetch(url);
  return resp.json();
};

// Then, in getData (getData8):
const getData8 = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetchJson2(url)),
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData8();

// Expected output (getData2(); getData3(); getData4(); getData5(); getData6(); getData7(); getData8();):
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined
// users -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// posts -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// albums -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now, use the given array containing an invalid url, so you console.log
// your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

// Solution #3)
const getData9 = async function () {
  try {
    const [ users, posts, albums ] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      }),
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log('oooooops', error);
  }
};

getData9();

// Expected output:
// -> Promise {<pending>}
//    -> [[Prototype]]: Promise
//       [[PromiseState]]: "fulfilled"
//       [[PromiseResult]]: undefined
// -> GET https://jsonplaceholdetypo.typicode.com/posts net::ERR_NAME_NOT_RESOLVED
// oooooops TypeError: Failed to fetch
//     at <anonymous>:6:32
//     at Array.map (<anonymous>)
//     at getData9 (<anonymous>:5:12)
//     at <anonymous>:1:1
