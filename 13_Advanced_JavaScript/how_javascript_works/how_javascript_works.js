// How JavaScript Works

// How does JavaScript actually work?
// - Imagine getting this question during an interview or how about this,
// - explain the difference between asynchronous and synchronous in JavaScript,
// - or maybe they ask you to explain this statement, "JavaScript is a single-threaded language that can be non-blocking."
// - Oh boy! here we're going to help you answer those questions.

// This is where here you may need to visit a few times as you progress to really get it.
// - So don't feel discouraged, if you don't feel hundred percent confident.
// - Just keep reading it and you'll get it.

// Now, we don't need to know how JavaScript works internally to write a program.
// - But it is important to learn.
// - I see a lot of people who have been developers for years and none know this.
// - It's like being a pilot and not knowing how an airplane can fly.
// - OK, that's a little bit dramatic there but you get my point.

// So let's start.

// → diagram_4 (diagram_4.png):
// First, what is a program? (diagram_4.png)
// Well, a program has to do some simple things.
// - allocate memory
// - parse and execute

// - allocate memory
// It has to allocate memory.
// Otherwise, we wouldn't be able to have variables or even have a file on our computer.

// - parse and execute
// It also has to parse and execute, scripts, which means it read and runs commands.

// → diagram_5 (diagram_5.png):
// Now, we also know that there's a JavaScript engine that each browser implements.
// - And in Chrome, it's the V8 and the V8 engine reads the JavaScript that we write. It changes into machine executable instructions for the browser.

// Now the engine consists of two parts,
// - a memory heap and
// - a call stack

// Now,
// - the memory heap (Memory Heap → diagram_5.png),
// this is where the memory allocation happens.

// - And then the call stack (Call Stack → diagram_5.png),
// this is where your code is read and executed.
// It tells you where you are in the program.

// So let's simplify this and show you what I mean.

// For us to allocate memory in the memory heap,
// - well, it's as simple as doing
const a = 1; // We've just allocated a memory

// Now, when we assign this, the JavaScript engine is going to remember that oh! yeah, 'a' has a value of 1.
// - We've just used up the memory heap.

// And, I can keep going on, on and on like this, right?
const b = 10;
const c = 100;

// Now, what's an issue that we see with this?
// - This is something called a memory leak (Memory Leak) that you're going to hear as you become a developer.
// - And what we've done here is we've created all these variables.
// - These global variables are in the memory heap (Memory Heap → diagram_5.png).
// - But you see this box (Memory Heap → diagram_5.png) right?
// - And with all memory, we have a limited amount, that we can actually have.
// - So by increasing the number of variables that we have, imagine if I had just this page full of variables, and instead of just numbers, they're like very very big arrays.
// - Well, memory leaks happen when you have unused memory,
// - such as let's say, we're now using the variable 'a', but it's still there,
// - well, by having unused memory just laying around, it fills up this memory heap.
// - And that's why you might hear, why global variables are bad.
// - Global variables are bad because we don't forget to clean up after ourselves, we fill up this memory heap and eventually, the browser will not be able to work.
// - All right, so that's memory (Memory Heap).

// Let's talk about the call stack (Call Stack).
// - What is that?
// - Well, again, with a call stack, we can have something like this,
console.log('1');
console.log('2');
console.log('3');

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console
// If I run this code, in my browser terminal,

// expected output:
// 1
// 2
// 3

// well, I get, '1, 2, 3'.
// - So the call stack, if you remember, that's what reads and executes our scripts.

// So what the call stack does it reads the first line,
// console.log('1');
// - it gets put, in the call stack (Call Stack → diagram_5.png | At the very bottom of the call stack).
// - So the JavaScript engine says oop! console.log (console.log('1');) has been added.
// - Let's pop it onto this call stack.
// - And then it runs it and creates 1,
// - then it says, OK, I'm removing the first console log (console.log('1');) as I just finished running it,
// - I'm going to place the second console log (console.log('2');) into my call stack, adds it here (At the very bottom of the call stack), and say,
// - Yeah! execute 2 and then it removes that, it pops it
// - and then gets console log 3 (At the very bottom of the call stack) and logs console log 3 (execute 3), and then finally removes it.

// But let's have a bit more of a complex example here to demonstrate this point.

// Imagine, I have something like this.
const one = () => {
  const two = () => {
    console.log('4');
  };
  two();
};

// So if I place it into our console and I run 'one()',
one();
// expected output:
// 4

// I get 4.

// So what happened here according to the Call Stack?
// - Well, if we have the call stack here (CALL STACK),
// - we first ran the 'one' function.
// - So on top of the CALL STACK, the 'one' function gets run.
// - And as we enter into this call stack, we see that we run another function 'two'.
// - So the 'two' function goes on top of the CALL STACK,
// - and now we run the 'two' function which is console.log. So we have, console.log '4' that's run inside of the 'two' function.

console.log('4');
two();
one();
// CALL STACK

// - So now that we read this (the 'one' function) the call stack is going to say, OK, there's nothing else inside of this (the 'one' function). I'm going to run console.log '4'.
// - So it's going to print out number 4 here (Console).
// - It's going to remove that from the CALL STACK, and then remove the 'two' and then remove the 'one' because it's just been called.
// - And the CALL STACK is now empty.

// CALL STACK

// Now let's revisit the statement from the beginning.
// - "JavaScript is a single-threaded language that can be non-blocking."
// - Single-threaded means that it has only one call stack.
// - And one call stack only, you can only do one thing at a time.
// - And as you saw (Call Stack → diagram_5.png), a call stack is first in last out.
// - So whatever's at the top the call stack (Call Stack → diagram_5.png) gets run first then below that, below that, below that till the call stack is empty.
// - Now, other languages can have multiple call stacks and these are called multi-threaded (Multi-Threaded).
// - You can also see how that might be beneficial to have multiple call stacks so that we don't keep waiting around for stuff.
// - Why was JavaScript designed to be single-threaded?
// - Well, running code on a single thread can be quite easy, since you don't have to deal with complicated scenarios that arise in a multithreaded environment.
// - You just have one thing to worry about.
// - And, when I say issues with a multithreaded environment, you can have such things as deadlocks (Deadlocks).
// - Now, guess what,
// - I/you just learned what synchronous programming means,
// - synchronous programming simply means line one gets executed:
console.log('1');
// then line two gets executed:
console.log('2');
// and then line three gets executed:
console.log('3');
// - The latter, can't start before the first finishes,
// - so the console log '2', doesn't start until console log '1' finishes. And console log '3' doesn't start until the above two (console log '1', console log '2') finish.
// - Because well, we've looked at the call stack (Call Stack → diagram_5.png) because of the call stack.

// Now, you may have heard of the site Stack Overflow (Website).
// https://stackoverflow.com/
// - If you're a developer you use it on a daily.
// - And have you ever wondered what stack overflow means?
// - Well, Stack Overflow is this (diagram_7.png), when a stack is overflowing.
// - Kind of like we talked about memory leaks and how the memory heap of a JavaScript engine can overflow.
// - Well, with stack overflow, this (diagram_7.png) happens,
// - when the call stack (Call Stack) just gets bigger and bigger and bigger until it (Overflowing) just doesn't have enough space anymore.
// - How can we do that?
// - Can we recreate a stack overflow?
// - Yah! I can show you quickly that to create a stack overflow,
// - all you have to do is function 'foo' like we have in here (diagram_7.png).
// Recursion
function foo() {
  foo();
}

foo();

// - That looks confusing.
// - What is happening here?
// - This is something called Recursion.
// - And Recursion means a function that calls itself.
// - So if you look at what this function does, we run 'foo()', and function 'foo()' gets executed, what 'foo()' (inside of function 'foo()') does is well, we run 'foo()' again.
// - So it just keeps looping over and over and over, having recursion but there is no end in sight right?
// - We keep adding 'foo()' to the call stack (Call Stack → diagram_7.png).
// - We keep adding it, over and over and over and over and over and over and over and over. And, we have a stack overflow.
// - So if you want to have fun, go to your browser, go into your console, and run something like this (Recursion) and see what happens.
// - You're gonna get a stack overflow.
// - So hopefully, this (diagram_5 → diagram_5.png) now makes sense.
// - The JavaScript engine which is the V-8 engine and Chrome has a memory heap and a call stack (diagram_5.png).

// Now, JavaScript is single-threaded, and only one statement is executed at a time, but there is a problem now isn't it?
// - What if line two was a big task we needed to do?
console.log('2');
// - maybe loop through an array that had millions of items, what would happen there?
// - Well, we would have this console log execute:
console.log('1');
// - then the second line then it is a massive massive job, well just work there:
console.log('2');
// - and console log '3' will take a really long time to get logged:
console.log('3');

// And in our small example (Call Stack) that doesn't mean much but if he had this on a Website well, the user wouldn't be able to do anything.
// - The website would pretty much freeze until that task is done and the user just waits there.
// - That's not very good, is it?
// - Well with the synchronous task, if we have one function that takes up a lot of time, it's going to hold up the line.
// - Imagine a buffet restaurant, right,
// - if all the people want to eat but Bobby says hold on guys, have to keep eating and put bacon on my plate.
// - Well everybody has to wait in line.
// - So it sounds like we need something non-blocking.
// - Remember the first statement from the beginning.
// - "JavaScript is a single-threaded language that can be non-blocking."
// - Ideally, we don't wait around for things that take time.
// - So how do we do this?
// - Well, asynchronous to the rescue.
// - Think of asynchronous as a behavior. Synchronous execution is great because it's predictable.
// - We know what happens first:
console.log('1');
// - then what happens next:
console.log('2');
// - What happens third:
console.log('3');
// - But it can get slow.
// - So when we have to do things like image processing or making requests over the network like API calls, we need something more than just synchronous tasks, right?
// - So you're thinking to yourself, how do we do asynchronous programming then?
// - Well, we can do asynchronous programming by doing something like this,

// call stack (Call Stack)
console.log('1');

setTimeout(() => {
  console.log('2');
}, 2000);

console.log('3');

// - 'setTimeout()', is a function that comes within our browsers, and it allows us to create a timeout.
// - And we can just give it the first parameter is the function that we want to run.
// () => {}
// - And then the second parameter is how many seconds we want to wait. So let's say I want to wait two seconds. So, 2000 milliseconds.

// If I do this now, let's run it to the console and see what happens.

// expected output:
// 1
// 3
// (two seconds later)
// 2

// Well, what just happened?
// - we have console log '1',
// - then console log '3',
// - and then console log '2', two seconds later.

// It looks like we just skipped this whole step and then put this at the very end:
// call stack (Call Stack)
console.log('1');

console.log('3');

setTimeout(() => {
  console.log('2');
}, 2000);

// Well, you've/I've just witnessed asynchronous programming.
// - In order to understand this and what just happened. I need to take to the next part and that is,
// - in order for JavaScript as we know it, to run for the JavaScript engine with memory heap and call stack to run,
// - we need more than just the JavaScript engine, we need what we call a JavaScript runtime environment (JavaScript Runtime Environment → diagram_8.png).
// - And JavaScript runtime environment is again part of the browser, it's included in the browsers.
// - They have extra things, on top of the engine,
// - they have something called the Web APIs, Callback Queue, and an Event Loop (diagram_8 → diagram_8.png).
// - And as you/I can see here (diagram_8.png), 'setTimeout' is part of the Web API.
// - It's not technically part of JavaScript, is it? It's what the browsers give us to use, so we can do the asynchronous program.

// So looking at this diagram (diagram_8 → diagram_8.png) let's see if we can figure out what our code was doing.
// call stack (Call Stack)
console.log('1');

setTimeout(() => {
  console.log('2');
}, 2000);

console.log('3');

// - We can create here our own Call Stack, which will have Web API and then we'll have a Callback Queue and then an Event Loop,
// - just like we have in our JavaScript runtime environment.

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// So what's happening here?
// - Well, first we have console log '1' that goes into the CALL STACK.
// - And that gets run.

console.log('1');
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - So we log console log '2' to the browser.

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - We then get 'setTimeout' into our CALL STACK because we finished this first task (console.log('1');), and we're going to the second one (console.log('2');).
// - And with 'setTimeout', what's going to happen is, well the CALL STACK is going to say, OK, I have 'setTimeout'.

setTimeout(() => {
  console.log('2');
}, 2000);
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - And because 'setTimeout' is not part of JavaScript but part of the Web API, it has this special characteristic
// - what's going to happen is, it ('setTimeout') triggers the Web API. And says, hey! 'setTimeout' has just been called.
// - And because we notified WEB API, we can pop it out of the CALL STACK.

// CALL STACK

setTimeout();
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - Now, the WEB API starts with a timer here, a timer of two seconds (2000 milliseconds). It's going to know that in two seconds, you have to do something.

// CALL STACK

setTimeout(() => {}, 2000);
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - And because the CALL STACK is empty, the JavaScript engine now goes to console log '3'

console.log('3');
// CALL STACK

setTimeout(() => {}, 2000);
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - and executes this (console.log('3');).
// - So that makes sense, right?

// CALL STACK

setTimeout(() => {}, 2000);
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - Now we've done '1' and '3' but we still have 'setTimeout' 2 seconds in the WEB API.
// - Now after two seconds when our time limit is up, the WEB API is going to say, okay, 'setTimeout' should be run.
// - Let's see what's inside of it. Well, we have a console log '2'.

// CALL STACK

setTimeout();
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - So what's going to happen is, it's (WEB API) going to say, hey! 'setTimeout' is done.
// - We have a callback(), and this callback() of 'setTimeout', we added to the CALLBACK QUEUE, saying that, hey! we have to run something we're ready to run it.

// CALL STACK

// WEB API

callback();
// CALLBACK QUEUE

// EVENT LOOP

// - Now, the last part, the EVENT LOOP (Event Loop → diagram_8.png),
// - the Event Loop over here (diagram_8.png) checks and says, hey! is the Call Stack empty, and it keeps checking all the time if the Stack is empty.
// - and if the Call Stack is empty and there's nothing running right now, the JavaScript engine, it's going to say, hey! do we have any callback (callback())?
// - It's (JavaScript engine) going to check the Callback Queue (CALLBACK QUEUE) and say, hmm! is anything in there? because the Call Stack (CALL STACK) is empty,
// - we can throw something in there (EVENT LOOP) and make it do some work. In our case, we say, oh yeah! I do.
// - Let me put this into the CALL STACK. So now we move the callback() into the CALL STACK

callback();
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - and then the callback() we run and by running we see that we have console log '2'.
// - So it's going to say console.log('2');

console.log('2');
callback();
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - it's going to run this function (console.log('2');) and once it's done it's going to pop out of the CALL STACK.
// - And again we're done with the callback(), so we remove it, and there you go.
// - We're done.

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - Everything is empty and we've just run this '1', '3' (through the Console).
// - It's going to go through the entire WEB API, CALLBACK QUEUE, and EVENT LOOP.
// - And then it's going to run console log '2'.
// - Hoo! That was a lot of information.

// So you might need to watch that a few times but hopefully, that makes sense to you/me why we noticed this behavior.

// And I want to challenge your/my understanding here.
// - Knowing what you know and what I just taught you what happens if I change this to 0 (zero)? That means 0 (zero) seconds.

// call stack (Call Stack)
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');

// - I'm going to give you a second to think about what will happen.
// - And then we're going to try this out.

// let's run it to the console.

// expected output:
// 1
// 3
// (0 seconds later)
// 2

// Did you guess right?
// - Now think about why that happened.
// - Even though this is 0 (zero) seconds, it still went through the process:
// - It still got entered into the Web APIs, then the Callback Queue, and then the Event Loop (diagram_8.png).
// - And by the time that was happening the Call Stack (CALL STACK) had already moved on to the console log '3'
// - and only after console log '3' was done and the Call Stack was empty the Event Loop said, oh yeah! we can call console log '2'.

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

// - Hopefully, that makes sense to you/me.

// And if you're/I'm able to understand that you'll/I'll actually have a lot of people that hire for JavaScript roles
// - ask questions like this in an interview, and you/I have to explain why that is.
// - So I hope that made sense to you/me and you/I can use that to your/my advantage in the next interview.

// So let's recap.
// If you wanted to load your latest tweets onto a webpage and you do this synchronously,
// - then visitors to your site won't be able to do anything until those tweets are loaded.
// - This could cause a long delay before they even get to see the content of his site.
// - They may not be able to click anywhere and the page will feel like it's frozen.
// - Not a very good user experience, is it?
// Another way to think about this is to call your teacher with a question.
// - The Synchronous way is you called the teacher,
// - you wait on the phone until the teacher answers the phone and asks him the question and hopefully gets an answer.
// - So you let the phone ring until he picks up. But you're not doing anything else in the meantime.
// - Asynchronous means that you send a text to a teacher with a question.
// - And then when the teacher, he/she has the time, will respond to you and call you with the answer.
// - So you can do other stuff in between.
// - The JavaScript is asynchronous when you can leave it a message and a callback tells you, hey! Mr. teacher has a message for you when you're not too busy.
// - And that's why we call it a callback function and a Callback Queue. We're calling back to let her know that hey there's some stuff waiting for you.

// Now, we see over here (diagram_8.png) that we have DOM, AJAX, and Timeout (setTimeout).
// - And there are a few other things but you/I also see in the Callback Queue, we have onClick, onLoad, and onDone.
// - Do you remember the EventListener?
// - Well, with an 'EventListener', we had something like an 'element', and we added 'addEventListener'.
// - And in this 'EventListener' (addEventListener), we could say listen for a 'click' and it'll have a function that perhaps just console dot log 'click'.

element.addEventListener('click', () => {
  console.log('click');
});

// - Well, similar to an asynchronous way of programming, we've created this 'click' function and now we're just listening to it.
// - And every time a click happens on the web page.
// - So on the DOM,
// - well, we run the callback function, which console logs 'click'.
() => {
  console.log('click');
};

// All right.

// So to finish things up, when is asynchronous happening?
// - It happens a lot,
// - when you try and talk between machines,
// - like speaking to a database making network requests, image processing, reading files, and don't worry, we'll go through this in the future.

// But to recap what we just learned (looking at this diagram → diagram_8.png),
// - JavaScript is a single-threaded language that can be non-blocking.
// - It has one Call Stack and it does one thing at a time.
// - In order to not block the single thread, it can be asynchronous with callback functions and these callback functions get to run in the background,
// - through the Callback Queue and then the Event Loop, to bring it back to the Call Stack.

// So next time you/I get asked,
// - What is the difference between a synchronous or asynchronous program? Or how does JavaScript work?
// You/I should have a little bit more confidence to answer that question.
// And I hope that this was helpful.