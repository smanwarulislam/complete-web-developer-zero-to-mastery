// Advanced Functions

// A sample function
function first() {
  var greet = 'Hi!';
  function second() {
    alert(greet);
  }
  return second;
}

var newFunc = first();
newFunc();

// But knowing what we learned about the new javascript syntax we're going to convert this first to how we should write javascript in 2018 or later.
const first = () => {
  const greet = 'Hi!';
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// Scope
// - We also learned about scope, an important property of functions is that the variables created inside of them including their parameters are local to the function.

// An interesting concept with javascript is 'closures'.
// This (closures) is a confusing concept when you here for the first time.

// - What 'closures' does and this is the rule in Javascript is that the child scope always has access to the parent's scope.
// - So it's almost as if it remembers. They always remember that there's a reference to those variables alive.

// So inside the web browser, the web browser says, ah! this 'second' function needs 'greet'. So I'm going to remember it.

// I'm going to copy this into the console
const first = () => {
  const greet = 'Hi!';
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

// If I run newFunc()
// expected output (run in the console):
newFunc();
// (shows the popup: This page says)
// Hi!

// If I run newFunc(), I get, Hi!, even though 'first' is never going to be run again.
// The only thing that we have left is the 'second' function, the web browser remembers 'greet'.
// Again this (closures) is a confusing concept when you here for the first time.

// Closures
// - a function ran. the function executed. It's never going to execute again.
// - But it's going to remember that there are references to those variables.
// - So the child scope always has access to the parent scope.

// Now may be wondering, if I did hear 'const name' equals 'Bobby'
const first = () => {
  const greet = 'Hi!';
  const second = () => {
    const name = 'Bobby';
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// Will the 'first' function have access to 'Bobby'?
// No, it wouldn't.

// - So think of it this way, children always have access to their parent's scope.
// - But parents scope they don't have access to their children.

// Let's get into a few more things.

// Next going to about 'Currying'.
// - 'Currying' is the process of converting a function that takes multiple arguments into a function that takes them one at a time.

const multiply = (a, b) => a * b;

// Now 'Currying' means we're changing this function to only accept one parameter at a time.
// So that means we do
const curriedMultiply = (a) => (b) => a * b; // think of these arrows (=>) as functions

// Again this looks very confusing but thinks of these arrows (=>) as functions.

curriedMultiply(3);

// See this in action what happens (run in the console)
// expected output (run in the console):
// (b) => a * b

// So now in order to make it work
// Let's run this through the console
// expected output (run in the console):
curriedMultiply(3)(4);
// 12

// And as you can see as I said about currying, it's the process of converting a function that takes multiple arguments as I said ((a, b))
// const multiply = (a, b) => a * b;
// into a function that takes them one at a time ((a) => (b) =>).
// const curriedMultiply = (a) => (b) => a * b;

// Now, why do we even need to do this?
// Because now it's more extensible, I can do something like
const multiplyBy5 = curriedMultiply(5);

// Now any time I want to multiply a number by five
// expected output (run in the console):
multiplyBy5(5);
// 25

// expected output (run in the console):
multiplyBy5(10);
// 50

// expected output (run in the console):
multiplyBy5(11);
// 55

// Now I have this function that was created that always multiplies things by 5, which is very cool.

// We're going to get into one more thing
// It's called 'Compose'.
// - 'Compose' is the act of putting two functions together to form a third function where the output of one function is the input of the other.

// So let's write this down
// A 'compose' looks like this
const compose = (f, g) => (a) => f(g(a));

// Let's say 'f' and 'g' parameters 'f' and 'g' return a function that takes a parameter 'a' that returns a function that has this (f(g(a))).

// What is happening here?
// - It looks like, looking at 'f' and 'g' ((f, g))
// - It looks like 'f' is a function because while we have the brackets and 'g' is also a function (f(g(a)))

// If I had a 'sum' function that let's say takes a number and just adds 1
const sum = (num) => num + 1;

// What we can do with 'compose' is
compose(sum, sum)(5); // We have the function here, 'sum', 'sum' ((sum, sum)). So both 'f' and 'g' ((f, g)) are 'sum'. | And now because it takes another bracket '()', I can say 5 ((5))

// So let's run this (Let's run this through the console)
// expected output (run in the console):
// 7

// Note:
// So why is that? (7)
// Let's take it one by one
// - If both 'f' and 'g' are 'sum' and 'a' is 5, we look at what the function returns (f(g(a)))
// - And because again we have two brackets -> (sum, sum)(5), we're executing the first part -> (sum, sum) of the function which returns us in another function which is this -> (a) => f(g(a)).
// - And within it, we give the 'a', 5.
// - So when this function runs it says 'a' is 5 -> f(g(5)).
// - And then let's run the inner function 'g'. In this case, it's 'sum' -> f(sum(5)).
// - So if you remember 'sum' is just saying give me 5 and then 5 plus 1. So now this -> f(sum(5)) changes to f(6).
// - And then finally the 'f' function runs which is again 'sum'. And this -> f(6) says 'sum' is giving me 6. So 6 plus 1 is 7 -> f(7).
// - And this whole thing returns 7.

// You'll hear words like 'Closures' and 'Currying' and 'Compose' a lot and you'll find tools and libraries that use these heavily.

// Functions:
· Function declaration syntax:
const functionname = (param1, param2...) => action // If there is an only return, there is no need to type "return" and if it's just one parameter, no need to add "()"
· Currying:
const functionname = param1 => param2 => action // To properly call function syntax is: functionname (param1)(param2)
· Compose:
const functionname = (param2, param3) => param1 => param2(param3(param1)) // Being param2 and 3 functions param1 a value. Executes a function inside a function executed with the initial param1

// The most important thing that you can do as a web developer when creating code is the idea of
/* - avoiding side effects and
- functional purity */

// What does that mean?
// Well, let's look at my diagram (screenshots)
// - Input is what we give a function input of some sort. It could be an empty input or it could have parameters like 5 and 10.
// - A function does something that we define, it has its own scope. Remember it's its own universe.
// - It could have 'console log', it could do a bunch of stuff and then it asks, Am I returning anything?
// - So you can return a value or if it doesn't return anything it just does undefined.

// Now the two words that I just said, are side effects and functional purity.

// side effects
// - Well side effects are any of these things, any of the actions that happen, inside of the function that we don't really know anything about.
// - If it interacts or reads or writes to an external variable for example or 'console log', well that's a side effect.

// If we change here
var a = 1;

function b() {
  a = 2;
}

// Well, that's a side effect.

// Again, let's look at my diagram (screenshots)
// - That's something that the function's doing to affect the outside world.
// - Remember we want to think of functions as its own universe and if it starts affecting the outside world. I mean it's not the end of the world.
// - We've done 'console log' before, we've done this before.

// But it is good practice to avoid the side effects and by avoiding the side effects, we have something called functional purity.

// functional purity
// - functional purity is a concept where we say, in order for us to write really really good programs we want to avoid side effects and we always want to return something.

// And what's the power in this?
// - By avoiding side effects and always returning we create something that we call 'Deterministic'.
// - 'Deterministic' is a word that you may have heard.
// - It means that no matter what my inputs, let's say 5 and 10 go through this function.
// - In this (function) little universe, the return value will be always the same.
// - Let me say that again, the input is whatever we put in the parameters (function) whether it's empty or has certain parameters. It always returns, if we run this a thousand times. It always returns the same value.
// - That's 'Determinism'.

// It's a very important concept and that's a key principle in avoiding bugs because if this function always does the same thing well then you know exactly what it does and you won't have random errors popping up here and there.
// Although this is not the law and you'll find code bases that will have a lot of side effects.

var a = 1;

function b() {
  a = 2;
}

// There are going to be a lot of things happening inside functions that maybe even affect variables that live outside of a function.

// It is really really good practice to be a top-performing developer to have this in mind, of creating functions that minimize side effects and have functional purity.
// - What we call 'Determinism', where anything you put into the function always returns the same thing.