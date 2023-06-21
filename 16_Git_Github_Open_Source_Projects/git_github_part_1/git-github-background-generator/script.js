// A few things you can try:
// 1. Write code so that the color inputs match the background generated on the first-page load.
// 2. Display the initial CSS linear gradient property on page load.
// 3. BONUS: Add a random button that generates two random numbers for the color inputs.

// Ideally, if I find a background that is really really light for my app I can print it out over here (<h3></h3>).
// So I can just copy and paste the linear gradient and use that.

// We want to put out a piece of text at the bottom here (<h3></h3>) with those values in the CSS format.

// We'll need to select two inputs and then also select the h3 so we can enter some text here (<h3></h3>).

// The first thing we want to do is we want to select the h3
var css = document.querySelector("h3");
// We also want to select the colors and we should give them a class (index.html) so we can distinguish them
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// 3. BONUS: Add a random button that generates two random numbers for the color inputs.
var randomButton = document.getElementById("randomBtn");

// Let's check everything and make sure that we are correct
// console.log(css);
// console.log(color1);
// console.log(color2);

// Chrome DevTools Console (See the Chrome DevTools Console)

// expected output:
{/* <h3></h3> */}
{/* <input class="color1" type="color" name="color1" value="#00ff00"></input> */}
{/* <input class="color2" type="color" name="color2" value="#ff0000"></input> */}

// OK, it looks like we're doing everything right.

// We want to listen to an event where we notice the user's actions here (color pickers).
// Well, there is a really really good event for inputs and it's called input.
// So any time the input value changes which it does every time we change the color we can detect it.
// So let's think about how we would do this.

/* color1.addEventListener("input", function() {
  console.log(color1.value);
}); */

/* color2.addEventListener("input", function() {
  console.log(color2.value);
}); */

// expected output: (See the Chrome DevTools Console)

// So we're grabbing the colors, the color.value.
// What do we want to do next with this value?
// We want to change the background color.
// How can we do that?

// We want to make sure that we're actually selecting it.
// console.log(body);

// expected output:
// -> <body id="gradient">...</body>

// All right we're getting the body tag.

// We remember that we can change the style of the body by doing style.background.
// That's a CSS property and we can just say red.
// body.style.background = "red";

// expected output: (See the webpage output)

// When the first input changes (first color picker)
/* color1.addEventListener("input", function() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}); */

// expected output: (See the webpage output)

// When the second input changes (second color picker)
/* color2.addEventListener("input", function() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}); */

// expected output: (See the webpage output)

// But that should have triggered something.
// We just copy and paste the same lines of code.
// And if we remember that's a big problem because DRY (Don't Repeat Yourself).
// So how can we extract the above function so that it's a lot cleaner?

// We can create a function and we'll say setGradient()
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  // There is one other thing that we need to do and that is we need to have the CSS at the bottom written here (<h3></h3>).
  css.textContent = body.style.background + ";";
  // css.innerHTML = body.style.background + ";";
  // expected output: (See the webpage output)
}

// 3. BONUS: Add a random button that generates two random numbers for the color inputs.
// Generating random color in hex
function randomColor() {
  var hexColor = Math.random().toString(16);
  hexColor = "#" + hexColor.slice(2, 8);
  return hexColor;
}

// Another way
/* function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} */

// Setting background after button click
function randomBackground() {
  color1.value = randomColor();
  color2.value = randomColor();

  setGradient();
}

// 1. Write code so that the color inputs match the background generated on the first-page load.
// 2. Display the initial CSS linear gradient property on page load.
// Initial gradient background displayed on load
setGradient();

// When the first input changes (first color picker)
color1.addEventListener("input", setGradient);

// expected output: (See the webpage output)

// When the second input changes (second color picker)
color2.addEventListener("input", setGradient);

// expected output: (See the webpage output)

// Note:
// One thing that is we've been using addEventListener which is the recommended way of doing things because we're keeping the JavaScript and the JavaScript file but we could have also done within the input an onclick attribute or oninput attribute (index.html).
// If I comment these out (Line 95, 132) so I never add the addEventListener and I refresh to see that it still changes.

// 3. BONUS: Add a random button that generates two random numbers for the color inputs.
randomButton.addEventListener("click", randomBackground);

// expected output: (See the webpage output)