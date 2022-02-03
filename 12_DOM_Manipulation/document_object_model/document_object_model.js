// Document Object Model (DOM)

// JavaScript HTML DOM - W3Schools
// https://www.w3schools.com/js/js_htmldom.asp

// JavaScript HTML DOM
// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// What is HTML DOM - W3Schools
// https://www.w3schools.com/whatis/whatis_htmldom.asp

// What is the HTML DOM?

/* The HTML DOM is an Object Model for HTML. It defines:
- HTML elements as objects
- Properties for all HTML elements
- Methods for all HTML elements
- Events for all HTML elements */

/* The HTML DOM is an API (Programming Interface) for JavaScript:
- JavaScript can add/change/remove HTML elements
- JavaScript can add/change/remove HTML attributes
- JavaScript can add/change/remove CSS styles
- JavaScript can react to HTML events
- JavaScript can add/change/remove HTML events */

// JavaScript HTML DOM - W3Schools
// https://www.w3schools.com/js/js_htmldom.asp

// The HTML DOM (Document Object Model)

// When a web page is loaded, the browser creates a Document Object Model of the page.

/* The HTML DOM model is constructed as a tree of Objects:
The HTML DOM Tree of Objects (Screenshot it: pic_htmltree.gif)
https://www.w3schools.com/js/pic_htmltree.gif */

/* With the object model, JavaScript gets all the power it needs to create dynamic HTML:
- JavaScript can change all the HTML elements on the page
- JavaScript can change all the HTML attributes on the page
- JavaScript can change all the CSS styles on the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events on the page
- JavaScript can create new HTML events on the page */

// Chrome DevTools Console (See the Chrome DevTools Console)

// So the DOM or Document Object Model is simply a 'document'

document

// expected output:
/* -> #document
<html>
  <head></head>
  <body></body>
</html> */

// We have the same thing we saw in the Elements tab:

{/* <html>
  <head></head>
  <body></body>
</html> */}

// Now, why do we need the DOM?
// We needed a way to get change, add, or delete HTML elements

document.write("hello");

// What was happens to the webpage?
// hello

// So the DOM is something a browser create to allow us to modify the HTML and CSS

document.write("hello");

// document -> object
// write -> method
// "hello" -> that accepted an argument "hello"

// Web browsers allow us to access the DOM to the 'document' object

document

// expected output:
// -> #document

// 'document' is just an object

// Parent object
window

// expected output:
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// 'window' is an object with a whole ton of property

window

// expected output:
/* -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
 -> document: document */

// One of the properties is 'document'

window

// expected output:
/* -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
 -> alert: ƒ alert()
 -> prompt: ƒ prompt() */

// The 'window' object has 'alert'

window.alert("check check");

// expected output:
// shows the popup
/* This page says
check check */

// 'window' is the big parent of everything

// 'window' is an object that describes the browser

// An anytime you use a method like alert(); if you don't specify anything it assumes you are talking about the 'window' object. The biggest parent.

alert();

// expected output:
// shows the popup
// This page says

document.write("check check");

// What was happens to the webpage?
// check check

window.write("check check");

// expected output:
/* -> Uncaught TypeError: window.write is not a function
at <anonymous>:1:8 */

// I get an error. Because it does not exist as a property of 'window'. It exists as a property of 'document' which is a property of 'window'.