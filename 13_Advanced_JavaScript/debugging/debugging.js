// Debugging

// Debugging is the act of looking over code, understanding what it's doing, and figuring out why it's not acting as expected or maybe it's not even running, maybe you're getting errors or maybe something that the user does on a website is triggering a weird behavior.
// - That's what debugging is.
// - Figuring out why the program isn't acting the way it is.
// - And when you work as a developer, a lot of your time is spent debugging.
// - So it's a very important topic and I want to show you some of the strategies that we can use for debugging.

// I have over here a pretty complex function and frankly, unless you've had a lot of experience with JavaScript this is a pretty hard function to understand.
// - Let's say that you get into work and somebody says, hey! I don't know what's going on with this function, can you look into it?
// - and you have to figure out, what it does and whether it's working fine or not.
// - So I'm going to take you through the steps that I would use to debug this code.
// - Maybe it's working fine maybe it's not but I want to understand what this piece of code does.
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (a, b) => a.concat(b), []);

// So the first thing I would do is just read it, I say OK,
// - we are assigning a variable and it looks like we have an array. It is a nested array, so there is an array inside of an array.
// - And it looks like this code wants to do something called flattened.
// - OK
// - We know that 'reduce' from what we've learned before,
// - 'a' is the 'accumulator'. I can change the name, so it makes more sense to me. OK, 'accumulator' is perfect.
// - And 'b' is well what is 'b'?
// - 'b' is this right, because we're iterating, looping over the first array which so it gives us three arrays. So I can just say, array here. OK.
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => accumulator.concat(array), []);

// - Now, I also see that within this 'reduce', I have the 'accumulator', I have the 'array' and I want the 'accumulator' to start off with an empty array '[]'.
// - That makes sense so far.
// - So the 'accumulator' is going to be an empty array when you start off.
// - And if you remember, 'concat' attaches the contents of an 'array' to whatever's being concated.

// One thing I can do is, open up this function, so that now, instead of just having one line, I can say:
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    console.log('array', array);
    console.log('accumulator', accumulator);
    return accumulator.concat(array);
  }, []);

// - We also want to make sure that we're returning ('return') this because we removed it ('return') from a single line which already implicitly means 'return', to make two lines.
// - OK

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

// So we have the console opened
// - So let's just refresh and add this function and see if we can get some console logs to figure out what it's doing.

// expected output:
// array -> (2) [0, 1]
// accumulator -> []
// array -> (2) [2, 3]
// accumulator -> (2) [0, 1]
// array -> (2) [4, 5]
// accumulator -> (4) [0, 1, 2, 3]

// So it looks like, what we're doing is we're grabbing each 'array' and we're adding it into the 'accumulator'.

// And because it looks something like this:
// - So this is what it would look like in the first pass through, we're just using the concat function to join the arrays:
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    console.log('array', array);
    console.log('accumulator', accumulator);
    // And because it looks something like this.
    // - So this is what it would look like in the first pass through, we're just using the concat function to join the arrays
    return [].concat([0, 1]);
  }, []);

// - So this is what it would look like in the first pass through, we're just using the concat function to join the arrays:
[].concat([0, 1]);
// expected output:
// -> (2) [0, 1]

// so that we are flattening the array,
// - so that means instead of having an array inside of an array, we can just completely flatten everything.
// - That means that with 'flattened' if I look at what it does:
flattened;
// expected output:
// -> (6) [0, 1, 2, 3, 4, 5]

// - well, it just finds an array [0, 1, 2, 3, 4, 5].

// There's another trick I want to show you, and that is instead of using 'console log' (console.log) you can use something called 'debugger'.
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    debugger;
    return accumulator.concat(array);
  }, []);

// - And you notice that the color turned red which means Yep! it's a JavaScript keyword.

// And what this allows you to do?
// - Well let's see what happens when I run this function
// - again to refresh here and I want to run it:
// Chrome DevTools Sources tab (See the Google Chrome JavaScript Sources tab)
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => { // accumulator = [], array = (2) [0, 1]
    debugger;
    return accumulator.concat(array);
  }, []);

// - whoa! what just happened?
// - When the JavaScript engine and the browser run into the word 'debugger', it stops.
// - It's a word that tells whatever is reading this file, hey! stop whatever you're doing just freeze, and it opens up the window for us exactly where it's stopped.
// - It stops in the middle of its execution.
// - But we see that here 'accumulator' is an empty array '[]' because when we started it '[]' and the array is [0, 1].
// - Now I have a couple of options.
// - I can hit play (Resume script execution) which resumes the entire thing or I can hit Step over (Step over next function call) and let's see what happens with step over, it goes to the next line.
// - And if I click again, it goes to the next line (I'm going to step through):
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => { // accumulator = (2) [0, 1], array = (2) [2, 3]
    debugger;
    return accumulator.concat(array);
  }, []);

// Notice that it also tells us:
// - Variables in Scope
// - Context ('this' value)

// - And I can keep stepping through this and see how the parameters change:
// - and literally, go through the entire function:
// - and I keep stepping through and I notice exactly what's happening in the code:
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => { // accumulator = (4) [0, 1, 2, 3], array = (2) [4, 5]
    debugger;
    return accumulator.concat(array);
  }, []);

// - and when it's done executing, it returns and looks at that. We have our console back.
// - Isn't that cool?

// Debugger allows us to literally go into the function and see what happens step by step.

// As I return this to the way it was.
// - I want you to take this with you and understand that although when you first see something like this, it's overwhelming, with enough time.
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (a, b) => a.concat(b), []);

// Using 'console' and 'debugger' you're able to understand what a function does, and if it's doing something that you don't expect to do or is doing something wrong, you can use these techniques to fix it.
// - It's a very useful skill that you're going to use a lot.