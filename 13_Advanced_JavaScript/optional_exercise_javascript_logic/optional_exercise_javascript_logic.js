// Optional Exercise: JavaScript Logic

// What is the Challenge?

// Solve the below 3 javascript puzzles.
// - The goal of this challenge is to practice our logic skills.
// - Something that is useful not only in interviews when you get challenging problems, but also in your day-to-day work as a developer.
// - First, start off by reading this article:
// https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2

// Question 1:
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into an individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392, 591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]

// Question 2:
// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

// Question 3:
// Write a function that converts HEX to RGB.
// Then Make that function autodetect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
// Bonus: Release this tool as an npm package.

// The Rules Are:
// - Use whatever tools you have as developers (google, friends, Discord, programming buddy, etc...) but I will not be offering any help with this challenge.
// - Just like a developer you must solve a problem and build something that will be challenging.
// - Nobody will hold your hand during the job so we want to experience that by figuring it all out on your own!

// You can see the solution files by other students here:
// https://github.com/zero-to-mastery/Coding_Challenge-6



// Solutions for Questions (Solves the problem of questions):

// Answer (Solution)
// Source Link:
// Stack Overflow
// https://stackoverflow.com/

// Noteworthy Note:
// Tick symbol, check symbol, or check mark symbol (✓): The question owner accepted this as the best answer (Solution)

// Question 1:
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into an individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392, 591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]


// Question (Stack Overflow) | From Question 1 above:
// Organize duplicates into individual array that is ordered

// I have an array of numbers. I would like to put the numbers in order and create a new array with duplicates in the same array(array in array).
// Can someone please help me step by step? I would really like to understand

let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// I want to create this [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

// Answer (Solution 1): (✓)

// Note (Answers with an explanation):
// You can extract unique values using Set,
// then sort them (because sorting an array of arrays is more complex),
// then use array.reduce to acquire all the items in the original array and push either the single value if unique, otherwise the array of values
// (not sure why you need that, but still..)

// Further documentation reference:

// · What is Set?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// · Array.reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// You can extract unique values using Set,
let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

[...new Set(arr)];

// then sort them (because sorting an array of arrays is more complex),
.sort((a, b) => a - b);

// then use array.reduce to acquire all the items in the original array and push either the single value if unique, otherwise the array of values
.reduce((accumulator, currentValue) => {
  const filtered = arr.filter(i => i === currentValue);
  return accumulator.push(filtered.length === 1 ? filtered[0] : filtered), accumulator;
}, []);

// Working code below (Solution 1):
let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

console.log([...new Set(arr)].sort((a, b) => a - b).reduce((accumulator, currentValue) => {
  const filtered = arr.filter(i => i === currentValue);
  return accumulator.push(filtered.length === 1 ? filtered[0] : filtered), accumulator;
}, []));

// Expected output:
// -> (9) [Array(4), Array(3), 4, 5, 10, Array(2), 391, 392, 591]
  // -> 0: (4) [1, 1, 1, 1]
  // -> 1: (3) [2, 2, 2]
  //    2: 4
  //    3: 5
  //    4: 10
  // -> 5: (2) [20, 20]
  //    6: 391
  //    7: 392
  //    8: 591
  //    length: 9
  // -> [[Prototype]]: Array(0)


// Alternative Answer (Solution 1):

// Note (Answers with an explanation):
// Although there are other approaches,
// whenever I need to parse unique values from an array in this way,
// I will create an object with the object's properties representing the groupings of array values:
// {1: [1, 1, 1, 1], 2: [2, 2, 2], 4: [4], 5: [5], ...}

// Then you can use a native object method to get all keys or values from the object if you need to
// (or if your end goal is different, you can use the object however it is needed):
Object.keys(obj);
// or
Object.values(obj);

// In your case, it would look like:
// Working code below (Alternative Answer (Solution 1)):
const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const obj = arr.reduce((acc, val) => {
  acc[val] = acc[val] || [];
  acc[val].push(val);
  return acc;
}, {});

console.log(obj);
// Expected output:
// -> {1: Array(4), 2: Array(3), 4: Array(1), 5: Array(1), 10: Array(1), 20: Array(2), 391: Array(1), 392: Array(1), 591: Array(1)}
    // -> 1: (4) [1, 1, 1, 1]
    // -> 2: (3) [2, 2, 2]
    // -> 4: [4]
    // -> 5: [5]
    // -> 10: [10]
    // -> 20: (2) [20, 20]
    // -> 391: [391]
    // -> 392: [392]
    // -> 591: [591]
    // -> [[Prototype]]: Object

const finalArr = Object.values(obj).map(val => val.length > 1 ? val : val[0]);

console.log(finalArr);
// Expected output:
// -> (9) [Array(4), Array(3), 4, 5, 10, Array(2), 391, 392, 591]
  // -> 0: (4) [1, 1, 1, 1]
  // -> 1: (3) [2, 2, 2]
  //    2: 4
  //    3: 5
  //    4: 10
  // -> 5: (2) [20, 20]
  //    6: 391
  //    7: 392
  //    8: 591
  //    length: 9
  // -> [[Prototype]]: Array(0)


// Alternative Answer (Solution 1):

// Note (Answers with an explanation):
// You can do this thing in different ways. But if you want to achieve in the best way, you must avoid n square loops.
// So you can create a dictionary of the count of values. And loop over the keys of the object in sorted order.

// Using Array.reduce to create an object of the count of array elements.
// and Array.fill to fill an array with the same values.

// Working code below (Alternative Answer (Solution 1)):
// Given Array
const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// Dictionary with the count of each value in the array
const arrCountObj = arr.reduce((acc, el) => {
  if (acc[el]) {
    acc[el] += 1;
  } else {
    acc[el] = 1;
  }
  return acc;
}, {});

console.log(arrCountObj);
// Expected output:
// -> {1: 4, 2: 3, 4: 1, 5: 1, 10: 1, 20: 2, 391: 1, 392: 1, 591: 1}
  //   1: 4
  //   2: 3
  //   4: 1
  //   5: 1
  //   10: 1
  //   20: 2
  //   391: 1
  //   392: 1
  //   591: 1
  // -> [[Prototype]]: Object

// Looping over sorted dictionary keys to create an array based on condition
const out = Object.keys(arrCountObj).sort((a, b) => a - b).map(x => arrCountObj[x] > 1 ? new Array(arrCountObj[x]).fill(+x) : arrCountObj[x]);

console.log(out);
// Expected output:
// -> (9) [Array(4), Array(3), 1, 1, 1, Array(2), 1, 1, 1]
  // -> 0: (4) [1, 1, 1, 1]
  // -> 1: (3) [2, 2, 2]
  //    2: 1
  //    3: 1
  //    4: 1
  // -> 5: (2) [20, 20]
  //    6: 1
  //    7: 1
  //    8: 1
  //    length: 9
  // -> [[Prototype]]: Array(0)


// Alternative Answer (Solution 1):

// Note (Answers with an explanation):
// You could:
// 1) iterate through the array and build a frequency map of the numbers
// 2) grab and sort the frequency map key in ascending order
// 3) build a new array from the information in the frequency map

// Working code below (Alternative Answer (Solution 1)):
const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// 1) iterate through the array and build a frequency map of the numbers
const obj = arr.reduce((acc, curr) => {
  return acc[curr] = (acc[curr] || 0) + 1, acc;
}, {});

console.log(obj);
// Expected output:
// -> {1: 4, 2: 3, 4: 1, 5: 1, 10: 1, 20: 2, 391: 1, 392: 1, 591: 1}
  //   1: 4
  //   2: 3
  //   4: 1
  //   5: 1
  //   10: 1
  //   20: 2
  //   391: 1
  //   392: 1
  //   591: 1
  // -> [[Prototype]]: Object

// 2) grab and sort the frequency map key in ascending order
const keys = Object.keys(obj).sort((a, b) => a - b).map(Number);

console.log(keys);
// Expected output:
// -> (9) [1, 2, 4, 5, 10, 20, 391, 392, 591]
  //   0: 1
  //   1: 2
  //   2: 4
  //   3: 5
  //   4: 10
  //   5: 20
  //   6: 391
  //   7: 392
  //   8: 591
  //   length: 9
  // -> [[Prototype]]: Array(0)

// 3) build a new array from the information in the frequency map
const out = keys.map((key) => {
  return obj[key] > 1 ? Array(obj[key]).fill(key) : key;
});

console.log(out);
// Expected output:
// -> (9) [Array(4), Array(3), 4, 5, 10, Array(2), 391, 392, 591]
  // -> 0: (4) [1, 1, 1, 1]
  // -> 1: (3) [2, 2, 2]
  //    2: 4
  //    3: 5
  //    4: 10
  // -> 5: (2) [20, 20]
  //    6: 391
  //    7: 392
  //    8: 591
  //    length: 9
  // -> [[Prototype]]: Array(0)

console.log(JSON.stringify(out));
// Expected output:
// [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]


// Question (Stack Overflow) | From Question 1 above:
// How can I organize subarrays in numerical order from within a larger array?

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into an individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392, 591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]

// Answer (Solution 1): (✓)

// Note (Answers with an explanation):
// I'd first count up occurrences by 'reduce' ing into an object indexed by number, whose values are the number of times that number has occurred so far.
// Then map those object's entries to a new array.
// If the count is 1, return a single number, otherwise, return an array with that many numbers:

// I'd first count up occurrences by 'reduce' ing into an object indexed by number, whose values are the number of times that number has occurred so far.
// - Here the 'reduce' will create an object like this:
// {
//   "1": 4,
//   "2": 3,
//   "4": 1,
//   "5": 1,
//   "10": 1,
//   "20": 2,
//   "391": 1,
//   "392": 1,
//   "591": 1
// }

const cleanRoom = array => {
  const countObj = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return countObj;
};

console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));
// Expected output:
// -> {1: 4, 2: 3, 4: 1, 5: 1, 10: 1, 20: 2, 391: 1, 392: 1, 591: 1}
  //   1: 4
  //   2: 3
  //   4: 1
  //   5: 1
  //   10: 1
  //   20: 2
  //   391: 1
  //   392: 1
  //   591: 1
  // -> [[Prototype]]: Object

// Then map those object's entries to a new array.
// If the count is 1, return a single number, otherwise, return an array with that many numbers:
const cleanRoom = array => {
  const countObj = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  // Then map those object's entries to a new array.
  // If the count is 1, return a single number, otherwise, return an array with that many numbers:
  return Object.entries(countObj)
    .map(([num, count]) =>
      count === 1 ? Number(num) : new Array(count).fill(Number(num))
    );
};

console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));

// Working code below (Alternative Answer (Solution 1)):
const cleanRoom = array => {
  const countObj = array.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(countObj)
    .map(([num, count]) =>
      count === 1 ? Number(num) : new Array(count).fill(Number(num))
    );
};

console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));
// Expected output:
// -> (9) [Array(4), Array(3), 4, 5, 10, Array(2), 391, 392, 591]
  // -> 0: (4) [1, 1, 1, 1]
  // -> 1: (3) [2, 2, 2]
  //    2: 4
  //    3: 5
  //    4: 10
  // -> 5: (2) [20, 20]
  //    6: 391
  //    7: 392
  //    8: 591
  //    length: 9
  // -> [[Prototype]]: Array(0)



// Question 2:
// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

// Solution 2: (✓)

// My own solution (Solution 2):

// Make the outer loop start from the 0th index and inner loop with value i+1
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([1, 2, 3], 4));
// Expected output:
// -> (2) [0, 2]


// Question (Stack Overflow) | From Question 2 above:
// Javascript twoSum algorithm: Given an array of integers, return indices of the two numbers such that they add up to a specific target

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Example:
// Given nums = [3, 2, 4], target = 6,
// Because nums[1] + nums[2] = 2 + 4 = 6
// return [1, 2].

// Expected result [1,2]
// Output [0,0]

// For instance, I've tried to use a different array of numbers and a different target and it works even if you change the order of the numbers

// Example:
// New array: [15, 7, 11, 2], target = 9,
// Output: [1, 3].

// Answer (Solution): (✓)

// Note (Answers with an explanation):
// Here you're both inner and outer loops start from 0th so in the case [3,2,4] and target 6 it will return [0,0] as 3 + 3 is equal to the target,
// so to take care of the same index element not being used twice created a difference of 1 between outer and inner loop

// Make the outer loop start from the 0th index and inner loop with value i+1
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([15, 7, 11, 2], 9));
// Expected output:
// -> (2) [1, 3]

console.log(twoSum([3, 2, 4], 6));
// Expected output:
// (2) [1, 2]


// Alternative Answer (Solution):

// Note (Answers with an explanation):
// You can use a very simple technique.
// Basically, you can check if the difference between the target & the element in the current iteration exists in the array.

// Assuming the same index cannot be used twice

nums = [3, 2, 4], target = 6
nums[0] = 3
target = 6
diff = 6 - 3 = 3
nums.indexOf[3] = 0 // FAILURE case because it's the same index

// move to next iteration
nums[1] = 2
target = 6
diff = 6 - 2 = 4
nums.indexOf(4) = 2 // SUCCESS '4' exists in the array nums
// break the loop

// Here's the accepted answer by the leetcode (https://leetcode.com/problems/two-sum/submissions/).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    const diffIndex = nums.indexOf(diff);
    // "diffIndex !== index" takes care of the same index not being reused
    if (diffIndex !== -1 && diffIndex !== index) {
      return [index, diffIndex];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
// Expected output:
// -> (2) [1, 2]


// Alternative Answer (Solution):

// Note (Answers with an explanation):
// We can solve this problem in O(n) by using the map/object.
// We can maintain a map or object which will save all values with an index
// and then we can iterate the array and find target-nums[i] for each value and will find that value in the map/object.
// let's see this by example:-

nums = [2, 7, 11, 15];
target = 9;
// then map/object will be
mm = {
  2: 0,
  7: 1,
  11: 2,
  15: 3
};

// then 'for' each value, we will find diff and find that diff 'in' the map/object.
// for i = 0 diff = 9 - 2 = 7 and mm.has(7) is true so our answer is 2 and 7.
// 'for' their index we can use mm.get(7) and i.
// return [mm.get(7), i]

var twoSum = function (nums, target) {
  let mm = new Map();
  for (let i = 0; i < nums.length; i++) {
    mm.set(nums[i], i);
  }
  let diff = 0;
  let j;
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (mm.has(diff) && i != mm.get(diff)) {
      j = mm.get(diff);
      if (j > i) {
        return [i, j];
      } else {
        return [j, i];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// Expected output:
// -> (2) [0, 1]


// Alternative Answer (Solution):

// Note (Answers with an explanation):
// Here's a simple method to solve this problem and its efficient using different types of inputs using JavaScript.
// Like with the input of ([3,3], 6) and its expected output will be [0,1] and input like ([3,2,4], 6) with expected output will be [2,4]

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

console.log(twoSum([3, 3], 6));
// Expected output:
// -> (2) [0, 1]

console.log(twoSum([3, 2, 4], 6));
// Expected output:
// -> (2) [1, 2]


// Alternative Answer (Solution):

// Your solution works as expected.
// For nums = [3, 2, 4] and target = 6, [0, 0] is a valid solution for the outlined problem as nums[0] + nums[0] = 3 + 3 = 6.
// If you need two different indices (In my understanding this is not required by the task)
// you can add an additional check for inequality (nums[i] + nums[j] == target && i != j).


// Alternative Answer (Solution):

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([15, 7, 11, 2], 9));
// Expected output:
// -> (2) [1, 3]

console.log(twoSum([3, 2, 4], 6));
// Expected output:
// -> (2) [1, 2]


// Alternative Answer (Solution):

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [nums[i], nums[j]];
      }
    }
  }
};

console.log(twoSum([15, 7, 11, 2], 9));
// Expected output:
// -> (2) [7, 2]

console.log(twoSum([3, 2, 4], 6));
// Expected output:
// -> (2) [2, 4]

console.log(twoSum([3, 3], 6));
// Expected output:
// -> (2) [3, 3]


// Question (Stack Overflow) | From Question 2 above:
// Pair of elements from a specified array whose sum equals a specific target number

// Below are two solutions:

// Solution:

// I am in mid of my JavaScript session. Find this code in my coding exercise. I understand the logic but I didn't get this map[nums[x]] condition.

function twoSum(nums, target_num) {
  var map = [];
  var indexNum = [];

  for (var x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      // what they meant by map[nums[x]]
      index = map[nums[x]];
      indexNum[0] = index + 1;
      indexNum[1] = x + 1;
      break;
    } else {
      map[target_num - nums[x]] = x;
    }
  }

  return indexNum;
}

twoSum([10,20,10,40,50,60,70], 50);
// Expected output:
// -> (2) [3, 4]

// I removed one of the duplicate 10s to make the example simpler
twoSum([10,20,40,50,60,70], 50);
// Expected output:
// -> [1, 3]

// I am trying to get the Pair of elements from a specified array whose sum equals a specific target number.
// I have written the below code.

function arrayPair(array, sum) {
  for (let i = 0; i < array.length; i++) {
    let first = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let second = array[j];
      if (first + second == sum) {
        alert('First: ' + first + ' Second: ' + second + ' SUM ' + sum);
        console.log('First: ' + first + ' Second: ' + second);
      }
    }
  }
}

var a = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];

arrayPair(a, 7);
// Expected output:
// First: 2 Second: 5
// First: 4 Second: 3
// First: 3 Second: 4
// First: -2 Second: 9

// Is there any optimized way than the above two solutions?
// Can someone explain the first solution to what exactly map[nums[x]] this condition points to?

// Answer (Solution): (✓)

// that 'map' value you're seeing is a lookup table and that 'twoSum' method has implemented what's called Dynamic Programming
// In Dynamic Programming, you store values of your computations which you can re-use later on to find the solution.

// Let's investigate how it works to better understand it:

twoSum([10,20,40,50,60,70], 50);
// I removed one of the duplicate 10s to make the example simpler

// In iteration 0:

// value is 10. Our target number is 50.
// When I see the number 10 in index 0, I make a note that if I ever find a 40 (50 - 10 = 40) in this list, then I can find its pair in index 0.

// So in our map, 40 points to 0.

// In iteration 2:

// value is 40. I look at map my map to see I previously found a pair for 40.

// map[nums[x]] (which is the same as map[40]) will return 0.
// That means I have a pair for 40 at index 0.
// 0 and 2 make a pair.

// Does that make any sense now?

// Unlike in your solution where you have 2 nested loops, you can store previously computed values.
// This will save you processing time, but waste more space in the memory (because the lookup table will be needing the memory)

// Also since you're writing this in javascript, your map can be an object instead of an array. It'll also make debugging a lot easier ;)

// comments:

// @aec Will the first solution gives entire pair of elements equal to the targeted sum??
// Say for example this is my array elements twoSum([0,10,20,30,40,50,60,70], 50) will it return (0,50),(10,40),(20,30) ??
// To my knowledge, it will return only a single pair set and stop the execution – Psyche Genie

// @PsycheGenie Yes that is true. The function doesn't find all of the solutions. It returns the closest pair found. – user1589069


// Alternative Answer (Solution):

// Using the HashMap approach using time complexity approx O(n), below is the following code:
let twoSum2 = (array, sum) => {
  let hashMap = {};
  let results = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]] !== undefined) {
      results.push([hashMap[array[i]], array[i]]);
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }

  return results;
};

console.log(twoSum2([10,20,10,40,50,60,70,30], 50));
// Expected output:
// -> (2) [Array(2), Array(2)]
    // -> 0: (2) [10, 40]
    // -> 1: (2) [20, 30]

// result:
// {[10, 40],[20, 30]}


// Alternative Answer (Solution):

function twoSum3(arr, S) {
  const sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == S) {
        sum.push([arr[i], arr[j]]);
      }
    }
  }

  return sum;
}

twoSum3([10,20,10,40,50,60,70], 50);
// Expected output:
// -> (2) [Array(2), Array(2)]
    // -> 0: (2) [10, 40]
    // -> 1: (2) [10, 40]


// Alternative Answer (Solution):

function twoSum4(arr, target) {
  let res = [];
  let indexes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && !indexes.includes(i) && !indexes.includes(j)) {
        res.push([arr[i], arr[j]]);
        indexes.push(i);
        indexes.push(j);
      }
    }
  }

  return res;
}

console.log('Result - ', twoSum4([1,2,3,4,5,6,6,6,6,6,6,6,6,6,7,8,9,10], 12));
// Expected output:
// Result - -> (8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
                // -> 0: (2) [2, 10]
                // -> 1: (2) [3, 9]
                // -> 2: (2) [4, 8]
                // -> 3: (2) [5, 7]
                // -> 4: (2) [6, 6]
                // -> 5: (2) [6, 6]
                // -> 6: (2) [6, 6]
                // -> 7: (2) [6, 6]
                //    length: 8
                // -> [[Prototype]]: Array(0)


// Alternative Answer (Solution):

// We can fix this with a simple JS object as well.
const twoSum5 = (arr, num) => {
  let obj = {};
  let res = [];
  arr.map(item => {
    let com = num - item;
    if (obj[com]) {
      res.push([obj[com], item]);
    } else {
      obj[item] = item;
    }
  });

  return res;
};

console.log(twoSum5([2, 3, 2, 5, 4, 9, 6, 8, 8, 7], 10));
// Expected output:
// -> (4) [Array(2), Array(2), Array(2), Array(2)]
      // -> 0: (2) [4, 6]
      // -> 1: (2) [2, 8]
      // -> 2: (2) [2, 8]
      // -> 3: (2) [3, 7]
      //    length: 4
      // -> [[Prototype]]: Array(0)

// Output: [ [ 4, 6 ], [ 2, 8 ], [ 2, 8 ], [ 3, 7 ] ]


// Alternative Answer (Solution):

let myArr = [2, 4, 3, 5, 7, 8, 9];

function getPair(arr, targetNum) {
  for (let i = 0; i < arr.length; i++) {
    let cNum = arr[i]; // my current number
    for (let j = i; j < arr.length; j++) {
      if (cNum !== arr[j] && cNum + arr[j] === targetNum) {
        let pair = {};
        pair.key1 = cNum;
        pair.key2 = arr[j];
        console.log(pair);
      }
    }
  }
}

getPair(myArr, 7);
// Expected output:
// -> {key1: 2, key2: 5}
// -> {key1: 4, key2: 3}


// Alternative Answer (Solution):

// Note (Answers with an explanation):
// 1. Use {} hash object for storing and fast lookups.
// 2. Use simple 'for' loop so you can return as soon as you find the right combo; array methods like '.forEach()' have to finish iterating no matter what.
// 3. And make sure you handle edge cases like this:
// twoSum([1,2,3,4], 8)---that should return undefined, but if you don't check for !== i (see below), you would erroneously return [4,4].
// Think about why that is...

function twoSum6(nums, target) {
  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    
    if (lookup[n] === undefined) { // lookup n; seen it before?
      lookup[n] = i; // no, so add to the dictionary with index as value
    }

    // seen target - n before? if so, is it different than n?
    if (lookup[target - n] !== undefined && lookup[target - n] !== i) {
      return [target - n, n]; // yep, so we return our answer!
    }
  }

  return undefined; // didn't find anything, so return undefined
}

twoSum6([1,2,3,4], 8);
// Expected output:
// undefined

twoSum6([10,20,40,50,60,70], 50);
// Expected output:
// -> (2) [10, 40]

twoSum6([2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7);
// Expected output:
// -> (2) [4, 3]

// Note (comments):

// @aec Will the first solution gives entire pair of elements equal to the targeted sum??
// Say for example this is my array elements twoSum([0,10,20,30,40,50,60,70], 50) will it return (0,50),(10,40),(20,30) ??
// To my knowledge, it will return only a single pair set and stop the execution – Psyche Genie

// @PsycheGenie Yes that is true. The function doesn't find all of the solutions. It returns the closest pair found. – user1589069


// Question (Stack Overflow) | From Question 2 above:
// Find Two numbers When added to give Target number

// I wrote this code to find two numbers when added give a target number.
// I have already solved this exercise but I want to make with this way above in the if statement didn't return true and I don't know why.

function add(arr, target) {
  let result = [];
  arr.map((item) => {
    const num1 = target - item;
    if (arr.includes(num1)) {
      return result.concat(num1, item);
    } else {
      return "Unfortunately, there isn't answer";
    }
  });

  return result;
}

add([3,4,5,6,10], 16);
// Expected output:
// -> []

// Answer (Solution): (✓)

function add(arr, target) {
  let result = [];
  for (let item of arr) {
    const num1 = target - item;
    if (arr.includes(num1)) {
      return result.concat(num1, item);
    }
  }

  return "Unfortunately, there is no answer";
}

const result = add([3,4,5,6,10], 16);

console.log(result);
// Expected output:
// -> (2) [10, 6]

// Note (comments):

// You have the right answer (the questioner is misusing the map method and you have correctly changed this to a for loop),
// however, I think you also need some explanation. – Euan Smith

// @EuanSmith yes it is... but why did you use for of loops... all of other are same – Onur Hangul

// map and for are NOT the same. I suggest checking out the MDN docs.
// My point above was to Ricardo as he has supplied your answer he should try and provide some explanation.
// – Euan Smith

// @EuanSmith you are right I should have provided more info.
// Hope the mdn docs have enough information to clarify Onur Hangul, if not tell me and I will provide some explanations with code examples. – Ricardo Araújo


// GitHub Gist | From Question 2 above:
// Question 2:
// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

// Solution 2:

// Note (Answers with an explanation):
// We can solve this problem in O(n) by using the map/object.
// We can maintain a map or object which will save all values with an index
// and then we can iterate the array and find target-array[i] for each value and will find that value in the map/object.
// let's see this by example:-

array = [2, 7, 11, 15], target = 9
array[0] = 2
target = 9
diff = 9 - 2 = 7

// move to next iteration
array[1] = 7
target = 9
diff = 9 - 7 = 2

// then map/object will be
numsMap = {
  2: 0,
  7: 1,
  11: 2,
  15: 3
};

// then 'for' each value, we will find diff and find that diff 'in' the map/object.
// for i = 0 diff = 9 - 2 = 7 and numsMap.has(7) is true so our answer is 2 and 7.
// 'for' their index we can use numsMap.get(7) and i.
// return [numsMap.get(7), i]

// or
// Assuming the same index cannot be used twice

array = [3, 2, 4], target = 6
array[0] = 3
target = 6
diff = 6 - 3 = 3

// move to next iteration
array[1] = 2
target = 6
diff = 6 - 2 = 4

// then map/object will be
numsMap = {
  3: 0,
  2: 1,
  4: 2
};

function twoSumBest(array, target) {
  const numsMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (numsMap.has(target - array[i])) {
      return [numsMap.get(target - array[i]), i];
      // get() returns a specified element associated with the specified key from the Map object.
    } else {
      numsMap.set(array[i], i);
      // set() adds or updates an element with a specified key and value to a Map object.
    }
  }
}

twoSumBest([2, 7, 11, 15], 9);
// Expected output:
// -> (2) [0, 1]

twoSumBest([3, 2, 4], 6);
// Expected output:
// -> (2) [1, 2]



// Question 3:
// Write a function that converts HEX to RGB.
// Then Make that function autodetect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
// Bonus: Release this tool as an npm package.


// Question (Stack Overflow) | From Question 3 above:
// RGB to hex and hex to RGB

// How to convert colors in RGB format to hex format and vice versa?
// For example, convert '#0080C0' to (0, 128, 192).

// Answer (Solution): (✓)

// Note (Answers with an explanation):
// Note: both versions of rgbToHex expect integer values for r, g, and b, so you'll need to do your own rounding if you have non-integer values.

// The following will do to the RGB to hex conversion and add any required zero-padding:

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert(rgbToHex(0, 51, 255));
// #0033ff

// Converting the other way:

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

alert(hexToRgb("#0033ff").g);
// 51

// Update 3 December 2012

// Here's a version of hexToRgb() that also parses a shorthand hex triplet such as "#03F":

function hexToRgb(hex) {
  // Expand the shorthand form (e.g. "03F") to the full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

alert(hexToRgb("#0033ff").g);
// 51

alert(hexToRgb("#03f").g);
// 51

// Finally, an alternative version of rgbToHex(), as discussed in @casablanca's answer and suggested in the comments by @cwolves:

// as discussed in @casablanca's answer and suggested in the comments by @cwolves:
// I'm assuming you mean HTML-style hexadecimal notation, i.e. #rrggbb. Your code is almost correct, except you've got the order reversed. It should be:
var decColor = red * 65536 + green * 256 + blue;

// Also, using bit-shifts might make it a bit easier to read:
var decColor = (red << 16) + (green << 8) + blue;

// Finally, an alternative version of rgbToHex():

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

alert(rgbToHex(0, 51, 255));
// #0033ff


// Alternative Answer (Solution):

// ECMAScript 6 version of Tim Down's answer

// Converting RGB to hex

const rgbToHex2 = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}).join('');

console.log(rgbToHex2(0, 51, 255));
// Expected output:
// #0033ff

// Converting hex to RGB

// Returns an array [r, g, b]. Works also with shorthand hex triplets such as "#03F".

const hexToRgb2 = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             , (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));

console.log(hexToRgb2("#0033ff"));
// Expected output:
// -> (3) [0, 51, 255]

console.log(hexToRgb2("#03f"));
// Expected output:
// -> (3) [0, 51, 255]

// Bonus: RGB to hex using padStart() method

const rgbToHex3 = (r, g, b) => '#' + [r, g, b]
  .map(x => x.toString(16).padStart(2, '0')).join('');

console.log(rgbToHex3(0, 51, 255));
// Expected output:
// #0033ff

// Note that this answer uses the latest ECMAScript features, which are not supported in older browsers.
// If you want this code to work in all environments, you should use Babel (https://babeljs.io/) to compile your code.


// Alternative Answer (Solution):

// Here's my version:

// Converting RGB to hex
function rgbToHex4(red, green, blue) {
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

console.log(rgbToHex4(0, 51, 255));
// Expected output:
// #0033ff

// Converting hex to RGB
function hexToRgb3(hex) {
  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) return normal.slice(1).map(e => parseInt(e, 16));

  // Expand the shorthand form (e.g. "03F") to the full form (e.g. "0033FF")
  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand) return shorthand.slice(1).map(e => 0x11 * parseInt(e, 16));

  return null;
}

console.log(hexToRgb3("#0033ff"));
// Expected output:
// -> (3) [0, 51, 255]

console.log(hexToRgb3("#03f"));
// Expected output:
// -> (3) [0, 51, 255]


// Question (Stack Overflow) | From Question 3 above:
// Create a function that auto detects the color format, rgb or hex, and converts it to hex or rgb respectively

// The question is (Question 3):
// Write a function that converts HEX to RGB.
// Then Make that function autodetect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// Answer (Solution): (✓)

// that's good, but I thought it was more a question of doing a more "literal" conversion, using standard textual syntax, like in CSS.

const
  x2n = x => parseInt(x, 16) // convert the hex value to the number
, n2x = n => `0${n.toString(16)}`.slice(-2).toUpperCase() // convert n to 2 digits Hex
, rgb2hex = rgb => rgb.match(/\d+/g).reduce((s, x) => s + n2x(Number(x)), '#')
, hex2rgb = hex => 'rgb('+ hex.match(/([\da-f]{2})/gi).map(x2n).join(',') +')'
  ;

function reverse_RGB_Hex(input) { // need to be improved by a regex control
  if (input.includes('#')) {
    return hex2rgb(input);
  } else if (input.includes(',')) {
    return rgb2hex(input);
  } else {
    return 'unknown input value';
  }
}

console.log(reverse_RGB_Hex("#1A0BFF"));
// Expected output:
// rgb(26,11,255)

console.log(reverse_RGB_Hex('rgb(26,11,255)'));
// Expected output:
// #1A0BFF

console.log(reverse_RGB_Hex('fdgkjl'));
// Expected output:
// unknown input value


// My own solution (Here's my version):

// Write a function that converts HEX to RGB.

// Converting hex to RGB
// Here's a version of hexToRgb() that also parses a shorthand hex triplet such as "#03F":
function hexToRgb(hex) {
  // Expand the shorthand form (e.g. "03F") to the full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

console.log(hexToRgb("#0033ff"));
// Expected output:
// -> {r: 0, g: 51, b: 255}

console.log(hexToRgb("#03f"));
// Expected output:
// -> {r: 0, g: 51, b: 255}

// Converting RGB to hex
function rgbToHex5(red, green, blue) {
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

console.log(rgbToHex5(0, 51, 255));
// Expected output:
// #0033ff

// Then Make that function autodetect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function convert(input1, input2, input3) {
  if (input2 === undefined) {
    var hex = input1;
    console.log(hexToRgb(hex));
  } else {
    var red = input1;
    var green = input2;
    var blue = input3;
    console.log(rgbToHex5(red, green, blue));
  }
}

convert("#0033ff");
// Expected output:
// -> {r: 0, g: 51, b: 255}

convert(0, 51, 255);
// Expected output:
// #0033ff