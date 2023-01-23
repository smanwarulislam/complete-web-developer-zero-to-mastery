// ES8 (ES2017)

// ES8 has a few more new features that were introduced in 2017, compared to ES7.
// - Here, I'll just go over the important ones.

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

// So the very first one is 'string padding'.
// - We have new functions that we can add to strings which are:
.padStart();
.padEnd();

// Now to demonstrate this, let's go into the console.

'Turtle'.padStart(10);
// expected output:
// '    Turtle'

// 10 "total" spaces used including the string

'Turtle'.padEnd(10);
// expected output:
// 'Turtle    '

// 10 "total" spaces used including the string

// This is useful just for aligning characters, or strings if you want specific padding for them.
// - Again very very simple and easy to pick up, just another method that we received.

// All right let's go into the second one.
// - The second one that we got is something called trailing commas in the function's parameter lists and calls.
// - What does that mean?
const fun = (a, b, c, d,) => { // add a comma at the end
  console.log(a);
};

fun(1, 2, 3, 4,); // and then a comma at the end. And this is still valid JavaScript. If I run this,
// expected output:
// 1

// You see that it works.
// - Which is 1, gets logged.

// Now, why would this be useful at all?
// - The main reason is, when you start getting really really big parameter lists, you'll see a lot of people doing things similar to this:
const fun2 = (a,
  b,
  c,
  d,
  ) => {
  console.log(a);
};

fun2(1, 2, 3, 4);

// - Just to make things a little bit cleaner.
// - And when you start doing this, every time you add a new parameter (e), it's a lot easier.
const fun3 = (a,
  b,
  c,
  d,
  e,
  ) => {
  console.log(a);
};

fun3(1, 2, 3, 4);

// - But also in GitHub, when you make changes, it actually makes the difference. The green and red differences are a lot cleaner.
// - So it's just syntactic and just makes things look a little bit nicer.
// - Again, you normally wouldn't want to do something like this, but maybe when you have a long parameter list like that, the ending comma (e,) is now valid and it won't give out an error.

// Let's look at the next one.
// - The next one is, we have:
Object.values();
Object.entries();

// - and these are very very useful because, before these, we had something called:
Object.keys();

// 'Object.keys()' allowed us to do something similar to arrays but on objects.
// - So for example, let's say we will have an object:
let obj = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr.Grinch'
};

// Now looking at this object, because it's not an array.
// - We can't do the 'map' or 'filter' or 'reduce' but this kind of an ugly object.
// - And this illustrates a good point, sometimes when you're working with servers, you'll get objects that you don't really like or you don't want to work with but you still want to iterate over that.
// - And before we could do something like this with 'Object.keys()', I could do:
// Object.keys(obj).
// - And now, I can use it like an array or go one by one. Like an array.
// - So it's as if, it's an array. But except, it has property and values:
/* let obj = [
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr.Grinch'
]; */

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

// .forEach((key, index) => {});
// - We wanted to do a 'forEach' loop for each key, that is, for each key in the array. So for each 'username'.
// - We also have the index that is 0, 1, 2.
// console.log(key, obj[key]);
// - So now, we're grabbing the object (obj) with the key 'username'.

// So if I 'console.log' this,
// expected output:
// username0 Santa
// username1 Rudolf
// username2 Mr.Grinch

// And that's one way for us to iterate or loop through objects.

// But with 'Object.values()', things become a little bit easier.
Object.values(obj).forEach(value => {
  console.log(value);
});

// expected output:
// Santa
// Rudolf
// Mr.Grinch

// And now, I get the value of each object (obj).
// - That is it loops through 'Santa', 'Rudolf', and 'Mr.Grinch'.

// With the entries, if I do 'Object.entries()'
Object.entries(obj).forEach(value => {
  console.log(value);
});

// expected output:
// -> (2) ['username0', 'Santa']
// -> (2) ['username1', 'Rudolf']
// -> (2) ['username2', 'Mr.Grinch']

// So this gives you a lot of control you get both property and value (or key and value), and you can do whatever you want with it and use 'forEach', 'map', 'reduce', and 'filter' all those array functions.

// So let's use a real-life scenario here.
// - Let's say, we wanted to, we just received this from the backend,
// - the backend just send us a bunch of users that they had in the database
// - and we want to generate 'usernames' for that because we don't have the 'username0', 'username1', 'username2',
// - you want to display names that display 'Santa' with the ID number, that is 0, for 'Rudolf' will be 1, for 'Mr.Grinch' will be 2.
// - How can we do that?
// - using our newfound powers.
// - Well, I can just simply do something with 'Object.entries()'
Object.entries(obj).map(value => { // I can 'map()' over and this will give us a 'value',
  // again remember that this will return arrays
  return value[1] + value[0].replace('username', '');
});

// expected output:
// -> (3) ['Santa0', 'Rudolf1', 'Mr.Grinch2']

// So now, even though we have an object, we can loop through it like an array, and like that, we have new usernames, 'Santa0', 'Rudolf1', and 'Mr.Grinch2'.
// - How cool is that?

// So, these are really really useful additions to the language, especially 'Object.values()' and 'Object.entries()', you can do a lot with it,
// - but there is one big ES8 feature that has arrived and everybody's excited about, and they're called:
// async
// await
// - Now it's brand new and everybody in the community is really excited about it.