const object = {
  name: 'Sally'
};

object.name

// You see that I get autosuggestion from VS Code.
// I don't have to install any plugins or anything at all.
// But it detects what this object has as a property and it autocompletes for it.

// And underneath the hood, it uses something called IntelliSense (e.g. code completions)
// and gives you a ton of suggestions when you type in as you can see here:
// For example,
// if I type in the 'window' object I see all the methods and properties that I can access which is really really nice, and people really like this.
window.

// If I make any mistakes in my code you see that I get underlined in red saying hey this is something wrong:
window.jsdahkahd(

// So that's really really nice!

// IntelliSense features are sometimes called by other names such as "code completion", "content assist", and "code hinting."