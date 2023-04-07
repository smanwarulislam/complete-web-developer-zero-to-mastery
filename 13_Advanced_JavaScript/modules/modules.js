// Modules

// JavaScript Modules

// When I first started learning JavaScript modules and that topic was the most confusing thing ever for me.
// - I had a really tough time getting a grasp of the concept.
// - It took me a year to actually get it but I've created a mental image (diagram_modules.png) in my head to understand it better.
// - This is the mental model (diagram_modules.png) that I've created and I call it climbing the mountain of modules.

// Let me explain

// When we first started writing JavaScript and creating websites with JavaScript
// - Well we had an HTML file (index.html)
// - and the very first-time people used JavaScript they used a script tag and what we called an Inline Script and Inline Script is exactly that.
// → (from index.html file)
'<script>'
  function a() {
    alert('a')
  }
  function b() {
    alert('b')
  }
  function c() {
    alert('c')
  }
  function d() {
    alert('d')
  }
'</script>'
// - We just inline all of our JavaScript within the HTML file (index.html).

// Now there are problems that I see with this.
// - Imagine this (Inline Script) getting massive a massive JavaScript file hundreds and thousands of lines of code.
// - One is the lack of "Code Reusability" and you'll hear this term a lot.
// - If we need to add another page maybe an about.html page.
// - Well, we have to copy this (Inline Script) code and put it into the other HTML file.
// - And the second was the pollution of the "Global Namespace"
// - and that is once I use up 'a' as a variable in this case in the window object.
// - Well I can never use 'a' again and maybe hundreds of lines down by mistake I assign a variable 'a' and I raise my a() function.
// - Well, that's a huge problem and that's a big problem in general.
// - You want to make sure that you don't pollute the global namespace that is the window object with all these names
// - because then you have collisions you have different team members working on different pieces of the code and all of a sudden we both come up with the same name.
// - It's a big problem.

// The next attempt was Script Tags and this is something we've been familiar with.
// - Instead of having Inline Script, we had Script Tags, and where we played around with Bootstrap and jQuery. This is what we did.
// → (from index.html file)
'<script src="./1.js"></script>'
'<script src="./2.js"></script>'
'<script src="./3.js"></script>'
'<script src="./4.js"></script>'

// - We had our jQuery file loaded first
'<script src="./1.js"></script>'

// - then our JavaScript file loaded second
'<script src="./2.js"></script>'

// - and as you can see we can have one script file then the second one then the third one then the fourth one
'<script src="./1.js"></script>'
'<script src="./2.js"></script>'
'<script src="./3.js"></script>'
'<script src="./4.js"></script>'

// - this way you have everything outside of the HTML that solves the problem right.

// Well the problem with Script Tags as far as I can see is three things
// - If we need to add another page like an about page well we still have to copy and paste these Script Tags and again we don't really want to do that.
// - The second one is the lack of "Dependency Resolution" and that is you're responsible to make sure that the scripts are added in proper order.
// - For example, if this (1.js) script accesses a function from the number 4.js file it's going to fail because the number 4.js file hasn't loaded yet.
// - So that's a lack of Dependency Resolution
// - and finally, a third is that this doesn't really solve the global namespace problem, right?
// - It's polluting the global namespace all the functions and variables that are declared in each of these files will be on the window object.

// OK, so what about the third attempt?
// - The IIFE stands for Immediately Invoked Function Expression.
// - I know that's a mouthful but it looks something like this.
// → (from script.js file)
// ----------IIFE----------

// js1 first file loaded.
var myApp = {};

// js2
(function () {
  myApp.add = function(a, b) {
    return a + b;
  };
})();

// And IIFE is it actually wraps the function in brackets so that JavaScript breathes this and says oh I have to evaluate this and execute this:
(function () {
  myApp.add = function(a, b) {
    return a + b;
  };
})

// - and then these brackets "()" at the end say to run the function:
(function () {
  myApp.add = function(a, b) {
    return a + b;
  };
})();

// - So after you evaluate this run this function

// and it was a confusing way to make sure of one thing and that is by using this method you don't pollute the global namespace.

// Now if in the first file (js1), you have variable 'myApp' they'll be on the window object
var myApp = {};

// - but everything else that's inside a function as we know creates a new scope.
// js2
(function () {
  myApp.add = function(a, b) {
    return a + b;
  };
})();

// - So all the files because they're wrapped in this IIFE had their own scope
// js2
(function () {
  myApp.add = function(a, b) {
    return a + b;
  };
})();
// - and if you wanted to add to 'myApp' you just added everything as a property or a method

// So awesome that reduced our global namespace to just one.
// - I mean it's not zero but the one that's a lot better right?
// - But there is still one issue with this
// - the order of the files is still important.
'<script src="./1.js"></script>'
'<script src="./2.js"></script>'
'<script src="./3.js"></script>'
'<script src="./4.js"></script>'

// - And I've worked on apps before where we're using so many scripts that this was close to 100 Script Tags.
// - And every time you need to add a file you had to make sure that you added it in the right place
// - because that file might be dependent on another file loading before it.
// - So as we know that's a lack of Dependency Resolution.
// - And frankly, this doesn't look very pretty
// js2
(function () {
  myApp.add = function(a, b) {
    return a + b;
  };
})();

// So then we had "browserify" (Browserify) this nice looking logo (diagram_modules.png).
// - Now, what did browserify do?
// - It actually used something called CommonJS.
// - So I'm going to show you what browserify did
// - It uses CommonJS allowed us to use a certain syntax and it looks something like this:
// → (from script.js file)
// ----------CommonJS + Browserify----------

// js1
module.exports = function add(a, b) {
  return a + b;
};

// js2
var add = require('./add'); // require('./add') → we are assuming the js1 file is called add.js

// If I wanted to have on my first JavaScript file (js1) a function add() I can say module.exports
// js1
module.exports = function add(a, b) {
  return a + b;
};

// - now in the second JavaScript file (js2), I could require the 'add' and now I can add an add() function into my JavaScript 2 file (js2)
// js2
var add = require('./add'); // require('./add') → we are assuming the js1 file is called add.js

// - now browserify use this CommonJS syntax but it's actually a Module Bundler.
// js1
module.exports = function add(a, b) {
  return a + b;
};

// js2
var add = require('./add'); // require('./add') → we are assuming the js1 file is called add.js

// - And what does that (Module Bundler) mean?
// - Well, it runs before you put the website online.
// - What that means is it reads to all the JavaScript files read all the syntax and bundles everything into a single file
// - once you run all the files through browserify
// - and again is just a simple tool that allowed us to just dump all our script files (all of these) into browserify
// → (from index.html file)
'<script src="./1.js"></script>'
'<script src="./2.js"></script>'
'<script src="./3.js"></script>'
'<script src="./4.js"></script>'

// - and as long as we use the CommonJS syntax like this
// js1
module.exports = function add(a, b) {
  return a + b;
};

// js2
var add = require('./add'); // require('./add') → we are assuming the js1 file is called add.js

// - it will know what to do and automatically create one file usually called something like bundle.js
// → (from index.html file)
'<script src="bundle.js"></script>'

// - So all our scripts will just be on one massive file and yeah that might be bad when we're actually developing.
// - But when it's out on the Internet in the real world we don't really care how it looks
// - because we're just doing this to send it somewhere to a server so that the web app can be viewed by users.
// - That's not how it's actually going to look when developers are working on it.
// - When developers are working on it we just have our own separate files.
// js1
module.exports = function add(a, b) {
  return a + b;
};

// js2
var add = require('./add'); // require('./add') → we are assuming the js1 file is called add.js

// - We just run it through browserify right before we deploy that is put it out to the public.

// All right.
// So that was pretty cool and we're getting closer to the top of the mountain here (diagram_modules.png).

// Now all of these problems here it was because JavaScript didn't have what we call a module system built into the language
// - and think of modules as building blocks as different pieces of code. So instead of having one giant thing you have modules.
// - Each piece is really really good at doing one thing because JavaScript didn't have this module system.
// - It's the reason we have so many different ways of importing and exporting modules
// - and there are actually quite a few more that I didn't show because well frankly it'll just be too much
// - but things have recently changed.
// - With the introduction of ES6, we can now do something a lot nicer and it looks something like this:
// → (from script.js file)
// ----------ES6 + Webpack 2----------

// js1
export const add = (a, b) => a + b;
// or
export default function add(a, b) {
  return a + b;
}

// js2
import { add } from './add';
// or
import add from './add';

// With ES6 we have two new things export and import
// - for example in JavaScript one file (js1)
// - I can have a function and you can see that I'm using arrow functions ('=>') here and add() function and I simply export it
// - or I can even do export the default:
// js1
export const add = (a, b) => a + b;
// or
export default function add(a, b) {
  return a + b;
}

// - In the second file (js2), if I wanted to use the add() function all I say is import, 
// - and then we see here the destructuring ({ add }) you might remember this from the ES5/ES6 and we're simply just grabbing 'add':
// js2
import { add } from './add';
// or
import add from './add';

// - or if the export was default:
// or
export default function add(a, b) {
  return a + b;
}
// - which means with this:
// js1
export const add = (a, b) => a + b;
// - you can export multiple functions in the same file
// - versus here you can only export one thing so the file only exports one thing:
// or
export default function add(a, b) {
  return a + b;
}

// - Well, in that case, we don't need the '{}' brackets we can just add them from the 'add' file:
// or
import add from './add';

// Very cool. So that's nice. That reads pretty nicely.
// - We just put the import at the top:
// js2
import { add } from './add';
// or
import add from './add';

// - so each file we know exactly what each file needs and everything is clean everything works
// - and we don't have to worry about any of this stuff right?
// - Well yeah kind of.
// - As you know by now
// - and I feel like a broken record browsers aren't supporting everything yet because it's a new feature.
// - Again we're still waiting on browsers to implement them.

// But this is what this blue thing (webpack) is for (diagram_modules.png).
// - It's called the webpack.
// - and webpack just like browserify is a module bundler that is it bundles modules that bundle JavaScript files
// - and just like browserify it traverses the dependency tree
// - which is these export and import tags into a single file or it can even have multiple files based on your needs
// - and with webpack we can actually use ES6 in all browsers. Isn't that awesome?
// - This (diagram_modules.png) is where we are now we've climbed the mountain of modules
// - and we have a really really good system right now in JavaScript.
// - It was really hard getting there but we're in a good place right now.
// - So this is what we're gonna be using. And this is what the industry is using:
// ----------ES6 + Webpack 2----------

// js1
export const add = (a, b) => a + b;
// or
export default function add(a, b) {
  return a + b;
}

// js2
import { add } from './add';
// or
import add from './add';

// Get used to this syntax I'll leave a link at the end of this section so you can check out more.
// - But when we get to React (React.js) we're gonna be using this a lot and it's gonna be a ton of fun it's gonna make things really nice and clean for us.

// One thing I wanted to show you.
// - You might think hey this webpack thing seems like it's kind of hard how does it do it?
// - It's very simple it just has a config file just like this:
// → (from webpack.js file)
// webpack (webpack 5)

// Without config or provide custom webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

// As you can see we just have an output that is 'bundle.js'
// - and we don't need to worry too much about it.
// - Usually, when somebody is starting a project it's one person on the team that configured this file and everything is done the rest.
// - You just build on top of
// - it's very very simple to get started.
// - I don't think it's super important for us to tackle right now but again a very very useful tool
// - and it creates a nice 'bundle.js' file
// → (from index.html file)
'<script src="bundle.js"></script>'

// - So now all our HTML (index.html) looks nice and simple
'<body>'
  '<script src="bundle.js"></script>'
'</body>'

// and you know what. That's it.

// We've covered some of the most important topics in JavaScript and some really really hard topics
// - and I know your brain is hurting from all this information.
// - But I've/you've done it.

// We've finished the section and previous sections and now we can actually build amazing apps with the tools that we have.
// - Can't wait to show you how all these pieces come together to build something amazing.

// Link:
// History of JavaScript Modules
// - Brief history of JavaScript Modules | by SungTheCoder
// https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde