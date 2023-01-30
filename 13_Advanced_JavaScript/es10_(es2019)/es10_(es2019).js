// ES10 (ES2019)

// We're now ready for ES10 or ECMAScript 2019.
// - Every year they're constantly trying to improve the language and that is JavaScript.
// - So what new features do we get in this (ES10) new version of JavaScript?
// - Well luckily for you there aren't too many.

// Chrome DevTools Console (See the Google Chrome JavaScript Console)
// Let's run this through the console

// So let's start off with my favorite one it's called flat() and flat() is a method that we can use on an array.
const array = [1, 2, 3, 4, 5];
array.flat();
// expected output:
// -> (5) [1, 2, 3, 4, 5]

// Well, absolutely nothing!
// - We returned a new array. It looks like this:
// [1, 2, 3, 4, 5]
// But it looks the exact same:
// const array = [1, 2, 3, 4, 5];
// - But this is where flat() gets exciting.
// - Imagine if this had nested arrays.
// - So for example:
const array2 = [1, [2, 3], [4, 5]];
array2.flat();
// expected output:
// -> (5) [1, 2, 3, 4, 5]

// - We get a new array that is flattened.
// - That is there are no nested arrays anymore:
// [1, [2, 3], [4, 5]]

// What happens if we have array3 and array3 is even more nested than we had before?
// - Let's say we have:
const array3 = [1, 2, [3, 4, [5]]];
array3.flat();
// expected output:
// -> (5) [1, 2, 3, 4, Array(1)]
/*    0: 1
   1: 2
   2: 3
   3: 4
-> 4: [5]
   length: 5
-> [[Prototype]]: Array(0) */

// - So I get a new array back but we see that there's actually not a completely flat array.
// - Instead, we have 1, 2, 3, 4 but then 5 was only flattened one level so essentially just removed these brackets:
// [1, 2, 3, 4, [5]]

// Now the interesting thing with flat is that we can tell how many layers to flatten in the array.
// - So if we go back to our example and in here the default was 1:
const array3 = [1, 2, [3, 4, [5]]];
array3.flat(1);

// - But if we change this to 2 now:
const array4 = [1, 2, [3, 4, [5]]];
array4.flat(2);
// expected output:
// -> (5) [1, 2, 3, 4, 5]

// - Look at that we have a completely flattened array.
// - So in here (flat()), I can tell how many times I want to flatten in or how many layers I want to flatten in the array.

// If I asked you hey how can you completely flatten this array?
// - How would you go about doing it?
// - Think about it.
const jurassicPark = [['🐛', '🐝'], '💥', '🐢', ['🐍', '🐌'], [[[['🐉']]], '🐘'], ['🐙', '🐜']];
// - Ready for the answer?
jurassicPark.flat(50);
// expected output:
// -> ['🐛', '🐝', '💥', '🐢', '🐍', '🐌', '🐉', '🐘', '🐙', '🐜']

// - All the barricades are down and the animals are now going wild.
// - And I just randomly picked 50 because I knew that 50 wasn't.
// jurassicPark.flat(50);
// - I'm gonna show you a cool little trick of making sure that we can flatten the utmost level but that's for the exercise.

// Another really useful thing that you can do with flat() is let's say:
const entries = ['bob', 'sally', , , , , , 'cindy'];

// - Using flat() we can actually flatten the entries and clean up our data.
entries.flat();
// expected output:
// -> (3) ['bob', 'sally', 'cindy']

// - This look at that it cleans up the data for me which is really really nice.

// The next feature of ES10 is flatMap().
// - flatMap() as the name suggests allows us to use a flat() function and the map() function or method on an array.
// - So let's do something fun here.
// - Let's say we have the 'jurassicPark' again and this time around we're going to use flatMap().
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🐉');

// - If I now check out what jurassicParkChaos is and I hit enter (Let's run this through the console):
jurassicParkChaos;
// expected output:
// -> (6) ['🐛,🐝🐉', '💥🐉', '🐢🐉', '🐍,🐌🐉', '🐉,🐘🐉', '🐙,🐜🐉']

// const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🐉');
// - So we have the jurassicPark.flatMap() so I'm flattening (creature) the jurassicPark and then mapping over this (creature => creature + '🐉') flattened array and doing some sort of a map() function to it.

// - Look at that we have Dragon ('🐉') neighbors with all the creatures and while it's absolute chaos in Jurassic Park.
// - flatMap() allows us to use the basic map() function and then the result to a depth of one.

// Next is a very very simple one.
// - Let's say:
const userEmail = '          eddytheeagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail.com          ';

console.log(userEmail.trimStart());
// expected output:
// eddytheeagle@gmail.com

console.log(userEmail2.trimEnd());
// expected output:
// jonnydangerous@gmail.com

// If I check out (Let's run this through the console):
userEmail;
// expected output:
// '          eddytheeagle@gmail.com'

// - You see that the blank space is still there.

// - But the newly generated string userEmail.trimStart() won't have any blank spaces.
userEmail.trimStart();
// expected output:
// 'eddytheeagle@gmail.com'

// What's next?
// - We only have a few more left.
// - Actually, two more left.

// The next one is called fromEntries().
// - It transforms a list of key-value pairs into an object.
// - So imagine we had some user profiles that we receive but these user profiles are formatted in the wrong way.
const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

// - So we have these user profiles but as a race, they're not really useful right now.
// - Wouldn't it be great if we can convert them into an object where each user name is associated with age?
// - Well, this is exactly what entries (fromEntries()) are used for.
Object.fromEntries(userProfiles);
// expected output:
// -> {commanderTom: 23, derekZlander: 40, hansel: 18}

// Now the name might trigger something while you're watching this because in ES8 we talked about something called entries() right?
// - Object.entries() allowed us to do well the exact opposite thing.
// - So for example:
const obj = Object.fromEntries(userProfiles);
Object.entries(obj);
// expected output:
// (3) [Array(2), Array(2), Array(2)]
/*   -> 0: (2) ['commanderTom', 23]
  -> 1: (2) ['derekZlander', 40]
  -> 2: (2) ['hansel', 18]
  length: 3
  -> [[Prototype]]: Array(0) */

// - I get exactly what I had originally back.
// - So fromEntries() the name from entries() simply comes from.

// One last one.
// - The last part is an update to a feature that we have in JavaScript which is the 'try catch' block like this:
try {

} catch {

}

// - Now this 'try catch' block is something I'm going to talk about a lot more when I get into the asynchronous JavaScript part of the course.
// - But essentially the try and cache block in JavaScript allows us to try a piece of code
try {

}
// and if there are any errors catch them.
  catch {

  }

// - So for example, if I do hear let's say:
try {
  4 + 5;
} catch {

}

// - I run this piece of code
// expected output:
// 9

// - It's the exact same thing as us writing 4 + 5.
// - The only difference is that within this try block,
try {
  4 + 5;
}
// we're telling JavaScript hey 'try' this and if there are any errors on line 184 here then do something within the cache block.
catch {

}

// - So I could for example say:
try {
  true + 'hi';
} catch {
  console.log('you messed up');
}

// - I run this code
// expected output:
// 'truehi'

// - I get 'truehi' because something we've seen before is type coercion.
// - So it tried this (true + 'hi') in JavaScript which is valid JavaScript because it turns 'true' into a string and combines it with 'hi'.

// - But if we let's say do a variable that we haven't seen before.
// - So instead of 'true' let's say we have a bob variable:
try {
  bob + 'hi';
} catch {
  console.log('you messed up');
}

// - If I run this
// expected output:
// you messed up

// - I get to the cache block which says 'you messed up'

// - You actually saw a new feature here in ES10
// because back in the day before ES10 in order for this code to actually catch you had to pass it an error object or parameter (error). So I could have called this whatever I want.
try {
  bob + 'hi';
} catch (error) {
  console.log('you messed up ' + error);
}

// expected output:
// you messed up ReferenceError: bob is not defined

// - So before we had to pass it a parameter otherwise this whole block of code even if it was working properly would actually error because we didn't pass the parameter.
// - With ES10 we have an update where you're not forced to use that parameter if you don't want to.
// - Again this is something I'll cover later on in the course when I talk about asynchronous JavaScript.