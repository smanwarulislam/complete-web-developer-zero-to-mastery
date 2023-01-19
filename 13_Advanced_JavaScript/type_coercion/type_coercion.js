// Type Coercion

// → Chrome DevTools Console (See the Google Chrome JavaScript Console)
// → Let's run this through the console
// → Run code live in your browser through Replit, formerly Repl.it, which is an online integrated development environment (IDE).

// So what is type coercion?
// - It's something like this:
1 == '1';
// expected output:
// true

// You see type coercion means that when the operand that is the things to the left and to the right of the operator are different types that are number and string types one of them will be converted into an equivalent value by the JavaScript engine.
// - So the JavaScript engine is going to say 1 equals string 1.
// - I think you mean number 1.
// 1 == '1';
// - So it's going to do this for us and compare number 1 to number 1.
1 == 1;
// expected output:
// true

// - Now based on the definition type coercion means the language converting a certain type to another type.

// Let me ask you a question:
// - Do all languages have type coercion?
// - What do you think?
// - Yes, they do.
// - Because we always need to convert types between programs to do things.
// - In memory, different types look completely different than what we type, right?
// - The number 5 in actual physical memory on my computer is represented in once in zero and all languages do this.
// - So there is some sort of type of coercion at different levels of the stack.
// - It just so happens that JavaScript has especially heavy type coercion in nature to it because it's the dynamic type which is why it does this.

// Let's go back to the example
// - In JavaScript type coercion happens when you use the double equal.
// - The double equal sign simply means to compare the two values and if they have different types try to well coerce one into the same type.

// If we do a string here and I do three equals
1 === '1';
// expected output:
// false

// - I get 'false' because three equals in JavaScript means comparing two values.
// - But don't try and curse the values. Be explicit with your comparison and do exactly what I tell you.

// So is there ever a time you should just use two equals instead of three equals?
// - I'll say that No there isn't.
// - Some people may argue that double equal can actually have some interesting applications where we coerce something and we do some sort of checking really quickly but it's not predictable code, right?
// - It can be confusing. It could really be a gotcha and trick some people so always use three equals instead of two.

// Now type coercion doesn't happen just with the equals sign.
// - You can also do an if statement.
if (1) {
  console.log(5);
}

// expected output:
// 5

// Why is that?
// - Because JavaScript coerces 1 to equal true.
if (true) {
  console.log(5);
}

// expected output:
// 5

// What if I do zero (0) here?
if (0) {
  console.log(5);
}

// expected output:
// undefined

// - no, JavaScript coerces this (0) and says well I want to boolean here. So I'm going to take your zero (0) and turn that into a false.
if (false) {
  console.log(5);
}

// expected output:
// undefined

// Now, this sort type of coercion there is a lot of interesting specifics to it.
// - And as a matter of fact, there's a nice little website that shows you some of the comparisons that JavaScript does.
// - Type Coercion Table:
// https://dorey.github.io/JavaScript-Equality-Table/
// - With three equals that is with no type of coercion, things make sense.

// - You see that:
false === false; // true
// - and that's it.

// - You can see that string false only triple equals and returns true with string false again.
"false" === "false"; // true

// - But if we do double equals well, Oh boy that's just a mess, isn't it?
// - For example, string 1 ("1") is the same as true
"1" == true; // true

// - An array that contains 1 is also true when it's compared to the string of 1 ("1").
"1" == [1]; // true

// - And there are so many weird little edge cases here.
// - But I'd like to stick with triple equals.

// - You can also see some of the if statements here and some of the if cases that can really be tricky.

// If we go to this MDN page:
// - MDN - Equality comparisons and sameness
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// - We see that we have the double equals (==) the triple equals (===) But then also something called Object.is() that's fairly new to JavaScript and this is an interesting one that you most likely won't see very often.
// - You see in JavaScript there is a concept of negative zero (-0) and plus zero (+0).
// - So if I do:
-0 === +0;
// expected output:
// true

// - I get true but they're technically different things in JavaScript so I can actually do the:
Object.is(-0, +0);
// expected output:
// false

// - I get false.

// - Now, why is this (Object.is()) useful?
// - If we go back to this page we see that Object.is works pretty much the same as the triple equals except for a few cases.
// - That is the plus (+0) and negative 0 (-0).
// - And if we scroll all the way down to this funky little NaN (Not a Number).
// - But if I did NaN (Not a Number) which represents Not a Number in JavaScript and I do:
NaN === NaN;
// expected output:
// false

// - I get false but why is that? This should be equal, right?
// - So if we use Object.is this turns into true.
Object.is(NaN, NaN);
// expected output:
// true

// Again most likely in your day-to-day programming life, you're never going to encounter this problem.
// - But I wanted to demonstrate for you how confusing type coercion can be
// - and if you're the type of person that just loves type coercion and wants to read all about it and understand all these intricacies I'll link to the actual spec that talks about how the equality comparison algorithm works.
// - If you're interested in it you can have a look:
// - ECMA Comparison Algorithm
// https://262.ecma-international.org/5.1/#sec-11.9.3
// - The main takeaway from here is that well you should use triple equals because type coercion in JavaScript can be really tricky.