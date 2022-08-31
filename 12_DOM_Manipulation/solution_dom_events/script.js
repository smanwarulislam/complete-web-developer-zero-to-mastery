// Chrome DevTools Console (See the Chrome DevTools Console)

// We have the Click Me button.
// We can select this quick button.
// Let's test this out if we want to select the button.

// document.getElementsByTagName("button");

// expected output:
// -> HTMLCollection [button]
//   -> 0: button
//   length: 1
//   -> [[Prototype]]: HTMLCollection

// OK, so how can we listen to the fact that a user can click this button?
// What we have is something called events and these are and are all linked.
// Reference websites:
// Event reference | MDN
// https://developer.mozilla.org/en-US/docs/web/Events

// But the most common ones and the one thing you'll see 90 percent of the time are mouse events and keyboard events.

// So if we look over here we have a click so we can listen for a click.

// Element: click event

/* var button = document.getElementsByTagName("button");

button.addEventListener("click", function() {
  console.log("CLICK!!!");
}); */

// expected output:
// -> Uncaught TypeError: button.addEventListener is not a function
//     at script.js:29:8

// Chrome DevTools Console (See the Chrome DevTools Console)

// document.getElementsByTagName("button");

// expected output:
// -> HTMLCollection [button]
//   -> 0: button
//   length: 1
//   -> [[Prototype]]: HTMLCollection

// document.getElementsByTagName("button")[0];

// expected output:
{/* <button>Click me!</button> */}

// Let fix this
/* var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
  console.log("CLICK!!!");
}); */

// expected output:
// CLICK!!!

// Element: mouseenter event

/* var button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseenter", function() {
  console.log("This is mouseenter event.");
}); */

// expected output:
// This is mouseenter event.

// Element: mouseleave event

/* var button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseleave", function() {
  console.log("This is mouseleave event.");
}); */

// expected output:
// This is mouseleave event.

// So looking at this list I think we can improve it.
// I think we should have an input and a button where we can type in something and add it to the shopping list.
// So I'll try and do that.
// Right now they don't really do anything.
// Ideally when we click to enter it gets added to the bottom of the list. So how can we do that?

// The few things that we want to select.
// We want to select the input and the button.
// I want to cache these queries so that we're not using up too much power for the browser.
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
// We're going to select the unordered list.
var ul = document.querySelector("ul");

// We want to add an event listener to the button.
/* button.addEventListener("click", function() {
  console.log("click is working");
}); */

// expected output:
// click is working

// Ideally, we can enter something here (input box).
// And when I click enter it gets added to the bottom of the list.
// How can we do that let's think about this.

// The first thing we want to do is we need to create another li element so that whatever we enter should be added to the bottom of Candles can use something called a createElement() method.

// button.addEventListener("click", function() {
  // Now, this li we've just created lives in this variable.
  // var li = document.createElement("li");
  /* We want to attach it to the bottom of the list.
  Again the document object gives us something called the appendChild() method.
  Here in order to append to a child if we remember our whole diagram of the DOM we see that each element has a text that will be called a node. So we need to add a text node let's do that.
  So now we've attached testing to the li that we've just created. */
  // li.appendChild(document.createTextNode("testing"));
  /* So the last thing we need to do is to attach this to the unordered list.
  And the way we do that is well we grab the unordered list and then append it to it.
  So append a child to ul that is li we just created. */
  // ul.appendChild(li);
// });

// expected output: (See the webpage output)
// testing
// ...
// testing

// But ideally, we can put something that we enter in here (input box) and not just static "testing".
// So how can we do that?
// We have the input already grabbed and the way we get the value from an input

// button.addEventListener("click", function() {
  // We can just test it out over here
  // console.log(input.value);
  // Now, this li we've just created lives in this variable.
  // var li = document.createElement("li");
  /* We want to attach it to the bottom of the list.
  Again the document object gives us something called the appendChild() method.
  Here in order to append to a child if we remember our whole diagram of the DOM we see that each element has a text that will be called a node. So we need to add a text node let's do that. */
  // But ideally, we can put something that we enter in here (input box) and not just static "testing".
  // li.appendChild(document.createTextNode(input.value));
  /* So the last thing we need to do is to attach this to the unordered list.
  And the way we do that is well we grab the unordered list and then append it to it.
  So append a child to ul that is li we just created. */
  // ul.appendChild(li);
// });

// console.log(input.value);
// If I click enter I get hello and it should also be attached to the bottom of the unordered list.
// expected output: (See the webpage output)
// hello
// ...
// hello

// expected output: (Also, see the Chrome DevTools Console)
// hello
// ...
// hello

// So we have a basic to-do list we can enter stuff and click enter.
// But what happens if it's empty and I click enter? Look at that you see that just keeps adding stuff on.
// Ideally, we can skip that if the input is empty well entering shouldn't do anything.
// The way we do that well it sounds like a conditional statement might be useful here.

// We can remember that we have a length property on strings. The length property tells us how many characters a string has.

// Chrome DevTools Console (See the Chrome DevTools Console)

// "hello".length;

// expected output:
// 5

// button.addEventListener("click", function() {
  // if (input.value.length > 0) {
    // Now, this li we've just created lives in this variable.
    // var li = document.createElement("li");
    /* We want to attach it to the bottom of the list.
    Again the document object gives us something called the appendChild() method.
    Here in order to append to a child if we remember our whole diagram of the DOM we see that each element has a text that will be called a node. So we need to add a text node let's do that. */
    // But ideally, we can put something that we enter in here (input box) and not just static "testing".
    // li.appendChild(document.createTextNode(input.value));
    /* So the last thing we need to do is to attach this to the unordered list.
    And the way we do that is well we grab the unordered list and then append it to it.
    So append a child to ul that is li we just created. */
    // ul.appendChild(li);
  // }
  // Otherwise, we don't really need to do anything.
  // We'll just let that click event happen without any actions.
// });

// OK so let's see that in action I can save and refresh and I'll do nothing and press enter; nothing and press enter.
// But if I type something it adds it to the list.

// expected output: (See the webpage output)
// hello
// ...
// hello

// But here's another problem I can just keep adding these forever.
// Ideally, after I enter something it all clears up.

// button.addEventListener("click", function() {
  // if (input.value.length > 0) {
    // Now, this li we've just created lives in this variable.
    // var li = document.createElement("li");
    /* We want to attach it to the bottom of the list.
    Again the document object gives us something called the appendChild() method.
    Here in order to append to a child if we remember our whole diagram of the DOM we see that each element has a text that will be called a node. So we need to add a text node let's do that. */
    // But ideally, we can put something that we enter in here (input box) and not just static "testing".
    // li.appendChild(document.createTextNode(input.value));
    /* So the last thing we need to do is to attach this to the unordered list.
    And the way we do that is well we grab the unordered list and then append it to it.
    So append a child to ul that is li we just created. */
    // ul.appendChild(li);
    // Ideally, after I enter something it all clears up.
    // After we create the new li and added to the unordered list I want the input value now to be completely empty an empty string.
    // input.value = "";
  // }
// });

// Let's try that hello click enter and look at that.
// expected output: (See the webpage output)
// hello

// Now I have to type something new again.
// expected output: (See the webpage output)
// lettuce

// All right things are starting to look nicer but it's kind of annoying that I have to keep clicking.
// It would be nice to just also be able to press Enter right.

// We also have KeyboardEvent and keypress events.
// Now how do we do that?
// Let's give it a try first.

// Reference websites:
// JavaScript Char Codes
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

// We have the keypress and this function also receives a parameter automatically. That is the event. So we can call it an event.
// In my case, I'll call it an event and now when the user presses a key it gives this function an event of the description of that event that happened.
// input.addEventListener("keypress", function(event) {
  // console.log(event);
  /* if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  } */
// });

// Open up the console
// Chrome DevTools Console (See the Chrome DevTools Console)

// Press a key (k) in the text box to see the corresponding Javascript key code.
// expected output:
// -> KeyboardEvent {isTrusted: true, key: 'k', code: 'KeyK', location: 0, ctrlKey: false, …}
// ...
// keyCode: 107
// which: 107

// if I press enter we see that the keyCode is 13 and which is 13.
// expected output:
// -> KeyboardEvent {isTrusted: true, key: 'Enter', code: 'Enter', location: 0, ctrlKey: false, …}
// ...
// keyCode: 13
// which: 13

/* input.addEventListener("keypress", function(event) {
  if (input.value.length > 0 && event.keyCode === 13) { // event.which works as well
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
}); */

// I'm going to say shopping lists will need pens.
// And let's do yoyo add it to the list.
// expected output: (See the webpage output)
// pencil
// yoyo

// Everything looks good but there's one issue that I'm having here and that is we have a lot of repeated code. This seems really unnecessary.
// And as I said before one of the principles of being a developer is DRY which stands for Do not Repeat Yourself.
// This is not very extensive or is it?
// It looks like we're just copying and pasting code and imagine if we had a bunch of events this will just be a massive file.

// So let's extract some of the logic and show you how we can do something called refactoring which is making the code look a little bit better.

/* function inputLength() {
  // return -> But remember as a function we need to return something.
  // Otherwise, we're going to run this function and it's going to say undefined.
  return input.value.length;
} */

// Now that is a minor change but now we have something that we can use everywhere anytime we create a new event listener.
// What else can we clean up?

/* function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
} */

/* button.addEventListener("click", function() {
  // And undefined cannot be greater than zero. That doesn't make sense.
  if (inputLength() > 0) {
    createListElement();
  }
}); */

/* input.addEventListener("keypress", function(event) {
  if (inputLength() > 0 && event.keyCode === 13) { // event.which works as well
    createListElement();
  }
}); */

// let's just save and see how everything works right now.
// Want to refresh to make sure the console doesn't give me any errors.
// Everything still works.
// And in case everything's empty I can't add anything.

// The code is looking nice.
// It reads pretty well.
// The last thing maybe I want to do is instead of having the function here I can extract that out as well.

function inputLength() {
  // return -> But remember as a function we need to return something.
  // Otherwise, we're going to run this function and it's going to say undefined.
  return input.value.length;
}

// Now that is a minor change but now we have something that we can use everywhere anytime we create a new event listener.
// What else can we clean up?

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  // ul.appendChild(li);
  ul.appendChild(document.createElement("br"));
  // Exercise: DOM Events
  // Using the Shopping List files from the exercise_dom_events folder updated the shopping list app
  // Strike-through
  ul.appendChild(li).addEventListener("click", toggleList); // append and toggle on and off new list items
  input.value = "";

  // Delete button
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn");
  deleteButton.appendChild(document.createTextNode("Delete"));
  // append "Delete button" to newly added "li"
  // ul>li.appendChild(deleteButton);
  ul>li.appendChild(deleteButton).addEventListener("click", removeItem); // append "Delete button" to newly added "li" and delete list item
}

function addListAfterClick() {
  // And undefined cannot be greater than zero. That doesn't make sense.
  if (inputLength() > 0) {
    createListElement();
  }
}

// event -> And here's the tricky part.
// But before I delete this function you see that we need to receive an event with this.
// So it has to receive a parameter because we need that information from the event.
// So again when we pass that event remove this function and we have an event.keyCode.
function addListAfterKeypress(event) {
  // event.which works as well
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Exercise: DOM Events
// Using the Shopping List files from the exercise_dom_events folder updated the shopping list app
// Toggle list items on and off when clicked on
var list = document.querySelectorAll('ul>li');

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", toggleList);
}

// function to add the 'line-through' (Strike-through) style
function toggleList(event) {
  event.target.classList.toggle("done"); // or this.classList.toggle("done");
}

// Exercise: DOM Events
// Using the Shopping List files from the exercise_dom_events folder updated the shopping list app
// Delete the list item by clicking on the delete button next to it
var elements = document.getElementsByClassName("btn");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", removeItem);
}

// function to delete the list item
function removeItem() {
  this.parentNode.remove();
}

// Let's see if everything works as expected.

// See if there are any errors in the console.

// Press Water
// Add Juice and press enter
// And if I don't press anything or don't try anything it still works.
// expected output: (See the webpage output)
// Water
// Juice

// This looks pretty clean, right?
// Anybody can come in if they know a little bit of JavaScript.
// You can read what is happening just from the code and that is something you really want to strive for where you don't want to repeat yourself.
// I want to cache these queries so that we're not using up too much power for the browser.
// And we have everything broken down into functions that are very very simple.