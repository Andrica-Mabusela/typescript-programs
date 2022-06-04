"use strict";
// function data type uses capital F for function
let greet;
greet = () => {
    console.log('Hello World');
};
// FUNCTION WITH OPTIONAL PARAMETERS
const add = (a, b, c) => {
    return typeof c == 'number' ? a + b + c : 'The string is:' + (a + b) + c;
};
// add(2,5)   THIS WILL NOT WORK IF c IS NOT OPTIONAL
console.log(add(2, 5, 4));
// EXAMPLE 2:-
let sayHi;
sayHi = (name, msg) => {
    console.log(`${name} says ${msg}`);
};
sayHi('mike', 'Hello There');
// EXAMPLE 3:-
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(12, 42, 'add'));
// EXAMPLE 4:-
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
