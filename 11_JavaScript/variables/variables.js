/* JAVASCRIPT VARIABLES
--------------------
var
let (new in ECMAScript 6)
const (new in ECMAScript 6) */

// Chrome DevTools Console (See the Chrome DevTools Console)

// var

"These pretzels are making me thirsty" + "!";
// expected output: "These pretzels are making me thirsty!"

"These pretzels are making me thirsty" + "!";
// expected output: "These pretzels are making me thirsty!"

var george = "These pretzels are making me thirsty" + "!";
// expected output: undefined (undefined -> This not worry about that. That doesn't matter for now.)

george;
// expected output: "These pretzels are making me thirsty!"

3 === 3;
// expected output: true

var 3 = 3;
// expected output: Uncaught SyntaxError: Unexpected number

var three = 3;
// expected output: undefined

three;
// expected output: 3

var &hello = 5;
// expected output: Uncaught SyntaxError: Unexpected token '&'

var j2879493479 = ...;

var $... = ...;

var _... = ...;

var firstName = ...;

prompt(); // press an enter

This page says // shows the popup
___

// expected output: "asdfghjkl" (It returns whatever I type)

prompt(); // press an enter

This page says // shows the popup
___

// expected output: "Hello" (It returns whatever I type)

prompt("What is your username?"); // press an enter

This page says // shows the popup
What is your username?
___

// expected output: "raju" (It returns whatever I type)

var first = prompt("enter the first number");
var second = prompt("enter the second number");
// press an enter

This page says // shows the popup
enter the first number
___ (5)

This page says // shows the popup
enter the second number
___ (10)

// expected output: undefined

first;
// expected output: "5"

second;
// expected output: "10"

Number(first);
// expected output: 5

Number(second);
// expected output: 10

var sum = Number(first) + Number(second);
// expected output: undefined

sum;
// expected output: 15

alert("hi there!"); // press an enter

This page says // shows the popup
hi there!

// expected output: undefined

var first = prompt("enter the first number");
var second = prompt("enter the second number");
var sum = Number(first) + Number(second);
alert(sum);
// press an enter

This page says // shows the popup
enter the first number
___ (15)

This page says // shows the popup
enter the second number
___ (20)

This page says // shows the popup
35

// expected output: undefined

var first = prompt("enter the first number");
var second = prompt("enter the second number");
var sum = Number(first) + Number(second);
alert("The sum is: " + sum);
// press an enter

This page says // shows the popup
enter the first number
___ (3)

This page says // shows the popup
enter the second number
___ (4)

This page says // shows the popup
The sum is: 7

// expected output: undefined

// ;
// In JavaScript semicolon (;) means the end of an expression.
// Expression - A fragment of code that produces a value is called an expression

3;
// expected output: 3

3 + 4;
// expected output: 7

var a = "hello";

var a = true;

a;
// expected output: true

a = "Hello";
// expected output: "Hello"

a;
// expected output: "Hello"

/* JAVASCRIPT TYPES
----------------
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (new in ECMAScript 6)
7. Object */

// 4. Undefined

var b;
// expected output: undefined

b;
// expected output: undefined

// undefined - As the name suggest this means the variable has not been assigned

var password;
// expected output: undefined

// So undefined is used when nothing is assigned to a variable.