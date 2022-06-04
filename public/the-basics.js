"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = require("./Invoice");
let character = 'mario'; // STRING
let age = 30; // NUMBER
let isBlackBelt = false; // BOOLEAN
// WE CANNOT CHANGE THE DATA TYPES BUT WE CAN CHANGE THE VALUES
character = 'luigi';
age = 40;
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// ARRAYS
let arr = ['hello', 3, 'world', 6];
// THIS IS ALLOWED
arr = [12, 3, 5];
//THIS IS ALLOWED
arr.push('Helo world');
// THE BELOW IS NOT ALLOWED
// arr = ''
// OBJECTS
let person = {
    name: 'Mario',
    age: 30,
    job: 'plumber'
};
// THIS IS ALLOWED
person.name = 'luigi';
// THIS IS NOT ALLOWED
// person.age = '30'
// THIS IS NOT ALLOWED
// person.games = ['mario bros'] 
// THIS IS NOT ALLOWED, BECAUSE surname is not a property on the original person object
// person = {
//     name: 'dan',
//     age: 27,
//     job: 'Professional Hockey Player',
//     surname: 'Wheeler'
// }
let ninjaOne;
ninjaOne = []; // THIS IS ALLOWED BECAUSE arrays in typescript are objects
// WE CAN ALSO BE MORE SPECIFIC WHEN DEFINING OBJECT TYPE
let ninjaTwo;
// Therefore any value that does not match the structure above, will not be allowed.
//TO ALLOW AN ARRAY TO ACCEPT MULTIPLE TYPES OF ELEMENTS
// string | number is known as a union type of string and number
let mixed = []; // This supports elements with types:- string or number
let uid; // The uid expects to be given a number or string value
console.log(person);
console.log(arr);
let docs = [];
const clientA = new Invoice_1.Invoice('Danny', 'Playing hockey on the new york rangers', 5000);
const clientB = new Invoice_1.Invoice('Ben', 'Bartending at Bar on B', 2000);
docs.push(clientA);
docs.push(clientB);
console.log(docs);
