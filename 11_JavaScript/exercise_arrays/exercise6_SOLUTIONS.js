// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();
// expected output: "Banana"

array;
// expected output:
/* -> (3) ["Apples", "Oranges", "Blueberries"]
0: "Apples"
1: "Oranges"
2: "Blueberries"
length: 3
-> __proto__: Array(0) */

// 2. Sort the array in order.
array.sort();
// expected output:
/* -> (3) ["Apples", "Blueberries", "Oranges"]
0: "Apples"
1: "Blueberries"
2: "Oranges"
length: 3
-> __proto__: Array(0) */

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
// expected output: 4

array;
// expected output:
/* -> (4) ["Apples", "Blueberries", "Oranges", "Kiwi"]
0: "Apples"
1: "Blueberries"
2: "Oranges"
3: "Kiwi"
length: 4
-> __proto__: Array(0) */

// 4. Remove "Apples" from the array.
array.splice(0, 1);
// expected output:
/* -> ["Apples"]
0: "Apples"
length: 1
-> __proto__: Array(0) */

array;
// expected output:
/* -> (3) ["Blueberries", "Oranges", "Kiwi"]
0: "Blueberries"
1: "Oranges"
2: "Kiwi"
length: 3
-> __proto__: Array(0) */

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
// you should have at the end:
["Kiwi", "Oranges", "Blueberries"]
array.reverse();
// expected output:
/* -> (3) ["Kiwi", "Oranges", "Blueberries"]
0: "Kiwi"
1: "Oranges"
2: "Blueberries"
length: 3
-> __proto__: Array(0) */

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];
// expected output: "Oranges"