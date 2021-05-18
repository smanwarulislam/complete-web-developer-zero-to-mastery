// Tools:
// Chrome Developer Tools (Customize and control Google Chrome -> More tools -> Developer tools -> Console tab)

/* JAVASCRIPT TYPES
----------------
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (new in ECMAScript 6)
7. Object */

// Chrome DevTools Console (See the Chrome DevTools Console)

// 1. Number

3 + 4;
// expected output: 7

4 + 5;
// expected output: 9

3 * 5;
// expected output: 15

12 / 4;
// expected output: 3

12 - 4;
// expected output: 8

(3 + 4) * 2;
// expected output: 14

12 % 6;
// expected output: 0

12 % 5;
// expected output: 2

12 % 9;
// expected output: 3

// 2. String

"Bob";
// expected output: "Bob"

"S M Anwarul Islam";
// expected output: "S M Anwarul Islam"

'Andrei';
// expected output: "Andrei"

"Hello" + "There!";
// expected output: "HelloThere!"

"Hello " + "there!";
// expected output: "Hello there!"

"This isn't very nice";
// expected output: "This isn't very nice"

'This isn't very nice';
// expected output: Uncaught SyntaxError: Unexpected identifier

"This isn't very n"ice";
// expected output: Uncaught SyntaxError: Unexpected identifier

'This isn\'t very nice';
// expected output: "This isn't very nice"

10 + "34";
// expected output: "1034"

10 - "3";
// expected output: 7

"hello" - "bye";
// expected output: NaN

// 3. Boolean

true;
// expected output: true

false;
// expected output: false

/* JAVASCRIPT COMPARISONS
----------------------
!==
===
>=
<=
>
< */

3 > 2;
// expected output: true

5 > 10;
// expected output: false

5 >= 5;
// expected output: true

5 <= 5;
// expected output: true

3 = 3;
// expected output: Uncaught SyntaxError: Invalid left-hand side in assignment

3 === 3;
// expected output: true

3 !== 3;
// expected output: false

4 !== 5;
// expected output: true