// DOM Selectors
// --------------
// getElementsByTagName
// getElementsByClassName
// getElementById

// querySelector
// querySelectorAll

// getAttribute
// setAttribute

// Chrome DevTools Console (See the Chrome DevTools Console)

window;

// expected output:
// -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// 'window' looks like an object

// But whenever we access the DOM, the 'document' does not look like the object. It looks like HTML.

document;

// expected output:
/* -> #document
  <!DOCTYPE html>
  <html lang="en">
  -> <head>...</head>
  -> <body>...</body>
  </html> */

// And that is because web browsers just hide the fact that is an object. They just give us a nice view like this so we can play around with it better. But it is a JavaScript object.

// getElementsByTagName
// getElementsByClassName
// getElementById

// getElementsByTagName

document.getElementsByTagName("h1");

// expected output:
/* -> HTMLCollection [h1]
  -> 0: h1
     length: 1
  -> [[Prototype]]: HTMLCollection */

// getElementsByClassName

document.getElementsByClassName("second");

// expected output:
/* -> HTMLCollection [p.second]
  -> 0: p.second
     length: 1
  -> [[Prototype]]: HTMLCollection */

// getElementById

document.getElementById("first");

// expected output:
{/* <p id="first">Get it done today</p> */}

// getElementsByClassName

document.getElementsByClassName("second")[0];

// expected output:
{/* <p class="second">No excuses</p> */}

// querySelector
// querySelectorAll

// querySelector

document.querySelector("h1");

// expected output:
{/* <h1>Shopping List</h1> */}

document.querySelector("li");

// expected output:
// -> <li random="23">Notebook</li>

// querySelectorAll

document.querySelectorAll("li");

// expected output:
/* -> NodeList(6) [li, li, li, li, li, li]
  -> 0: li
  -> 1: li
  -> 2: li
  -> 3: li
  -> 4: li
  -> 5: li
     length: 6
  -> [[Prototype]]: NodeList */

document.querySelectorAll("li, h1");

// expected output:
/* -> NodeList(7) [h1, li, li, li, li, li, li]
  -> 0: h1
  -> 1: li
  -> 2: li
  -> 3: li
  -> 4: li
  -> 5: li
  -> 6: li
     length: 7
  -> [[Prototype]]: NodeList */

// getAttribute
// setAttribute

// getAttribute

document.querySelector("li");

// expected output:
// -> <li random="23">Notebook</li>

document.querySelector("li").getAttribute("random");

// expected output:
// '23'

// setAttribute

document.querySelector("li").setAttribute("random", "1000");

// expected output:
// undefined

document.querySelector("li");

// expected output:
// -> <li random="1000">Notebook</li>

// ## Changing Styles
// style.{property} // ok

// className // best
// classList // best

// classList.add
// classList.remove
// classList.toggle

// style.{property} // ok

document.querySelector("h1");

// expected output:
{/* <h1>Shopping List</h1> */}

document.querySelector("h1").style;

// expected output:
// -> CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// document.querySelector("h1").style.background = "yellow";

// expected output: (See the webpage output)
// 'yellow'

// So what's the better way for us to do change styles rather than style.{property}?
// We have a few things we can use

// className // best
// classList // best

// className // best

var h1 = document.querySelector("h1");

h1;

// expected output:
{/* <h1>Shopping List</h1> */}

h1.className = "coolTitle";

// expected output: (See the webpage output)
// 'coolTitle'

h1;

// expected output:
{/* <h1 class="coolTitle">Shopping List</h1> */}

// classList // best

document.querySelector("li").classList;

// expected output:
/* -> DOMTokenList [value: '']
  length: 0
  value: ""
  -> [[Prototype]]: DOMTokenList */

document.querySelector("li").classList;

// expected output:
/* -> DOMTokenList(2) ['bold', 'red', value: 'bold red']
  0: "bold"
  1: "red"
  length: 2
  value: "bold red"
  -> [[Prototype]]: DOMTokenList */

// This classList gives us a few methods that we can use:
// classList.add
// classList.remove
// classList.toggle

// classList.add

document.querySelector("li").classList.add("coolTitle");

// expected output:
// (See the webpage output)

// classList.remove

document.querySelector("li").classList.remove("coolTitle");

// expected output:
// (See the webpage output)

// classList.add

document.querySelector("li").classList.add("done");

// expected output:
// (See the webpage output)

// classList.toggle

document.querySelector("li").classList.toggle("done");

// expected output:
// false (See the webpage output)

// toggle again
document.querySelector("li").classList.toggle("done");

// expected output:
// true (See the webpage output)

// toggle again
document.querySelector("li").classList.toggle("done");

// expected output:
// false (See the webpage output)

// toggle again
document.querySelector("li").classList.toggle("done");

// expected output:
// true (See the webpage output)

// toggle again
document.querySelector("li").classList.toggle("done");

// expected output:
// false (See the webpage output)

// ## Bonus
// innerHTML // DANGEROUS

// parentElement
// children

// innerHTML // DANGEROUS

document.querySelector("h1");

// expected output:
{/* <h1>Shopping List</h1> */}

document.querySelector("h1").innerHTML = "<strong>!!!!!</strong>";

// expected output: (See the webpage output)
// '<strong>!!!!!</strong>'

document.querySelector("h1");

// expected output:
// -> <h1><strong>!!!!!</strong></h1>

// parentElement
// children

// parentElement

document.querySelectorAll("li")[1];

// expected output:
// -> <li>Jello</li>

document.querySelectorAll("li")[1].parentElement;

// expected output:
{/* <ul>
  <li class="bold red" random="23">Notebook</li>
  <li>Jello</li>
  <li>Spinach</li>
  <li>Rice</li>
  <li>Birthday Cake</li>
  <li>Candles</li>
</ul> */}

document.querySelectorAll("li")[1].parentElement.parentElement;

// expected output:
{/* <body>
  <h1><strong>!!!!!</strong></h1>
  <!-- <h1 style="background: yellow;">Shopping List</h1> -->
  <!-- But there is one issue here. The issue is the separation of concerns. -->
  <!-- As we remember, we wanna have that separation of HTML focuses on the text, CSS focuses on the style, and JavaScript on the action. -->
  <p id="first">Get it done today</p>
  <p class="second">No excuses</p>
  <ul>
    <li class="bold red" random="23">Notebook</li>
    <li>Jello</li>
    <li>Spinach</li>
    <li>Rice</li>
    <li>Birthday Cake</li>
    <li>Candles</li>
  </ul>
</body> */}

// children

document.querySelectorAll("li")[1].parentElement.parentElement.children;

// expected output:
/* -> HTMLCollection(4) [h1, p#first, p.second, ul, first: p#first]
  -> 0: h1
  -> 1: p#first
  -> 2: p.second
  -> 3: ul
  -> first: p#first
     length: 4
  -> [[Prototype]]: HTMLCollection */

// ## It is important to CACHE selectors in variables

var h1 = document.querySelector("h1");

// CACHE selectors
// And something that we will cover in the last video in this section where we talk about some developer fundamentals: v