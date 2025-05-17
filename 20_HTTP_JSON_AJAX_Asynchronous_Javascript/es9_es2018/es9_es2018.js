// ES9 (ES2018)

// Object spread operator (...)

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
};

const { tiger, ...rest } = animals;

tiger;

// Expected output:
// 23

rest;

// Expected output:
// -> {lion: 5, monkey: 2}

// This (spread operator (...)) is something that we were able to do with arrays in ES6
// I could have done an array that had
const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

sum(...array);

// Expected output:
// 15

// I was able to spread the 'array' ([1, 2, 3, 4, 5]) over these parameters ((a, b, c, d, e)), which was the same thing I was doing.

sum(1, 2, 3, 4, 5);

// Expected output:
// 15

// And this new feature of the Object spread operator (...) just means we're able to do this with an object as well

const animals2 = {
  tiger2: 23,
  lion2: 5,
  monkey2: 2,
  bird: 40
};

// so that in the same manner, if we had a function
function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger2, lion2, ...rest2 } = animals2;

objectSpread(tiger2, lion2, rest2);

// Expected output:
// 23
// 5
// -> {monkey2: 2, bird: 40}

// And I know what you're thinking.
// You're saying, Andrei Neagoie, I'm pretty sure we're able to do this in the React (also known as React.js or ReactJS) section of the course.
// And if you've caught onto that, good job.
// In React (also known as React.js or ReactJS), 
// when we're building our RoboFriends (robofriends) app, we're able to do this, 
// especially in Redux, where we learned about Reducers, and if you don't remember it or you haven't watched that section, don't worry about it
// and the reason that this worked and React (also known as React.js or ReactJS) was that 'create-react-app'
// Remember, the tool (create-react-app) that we use to build our React application uses the Object spread operator (...) by default
// even though it wasn't officially part of JavaScript because it was so useful.
// But now that it's part of JavaScript officially as of ES2018 (ES9), you can use it freely.

// Wait... what about the other 2 new features?
// See the next video (lecture/lesson)!