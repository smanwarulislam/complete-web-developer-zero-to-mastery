// JavaScript Terminology

// function declaration
function newFunction() {

}

// function expression
var newFunction = function() {

}; // Notice function expression ends in a semicolon

// function expressions can also have a name
var newFunction = function nameFunction() {

};

// or it could be an anonymous function
var newFunction = function() {

};

// calling or invoking a function
alert();
newFunction(param1, param2); // param -> parameter

// expression
// An expression is something that denotes/produces a value
1 + 3;
var a = 2;
return true;

// assign a variable
var a = true;

// function vs method
// function
function thisIsAFunction() {

}

// method
var obj = {
  thisIsAMethod: function() {

  }
};

// a function is an access like this
thisIsAFunction();

// a method is an access
obj.thisIsAMethod();