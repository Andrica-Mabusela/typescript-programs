// union data type allows you to use one data type or another

// EXAMPLE
let myVariable : number | string;

myVariable = 'hello'    // Allowed
myVariable = 40         // Allowed
// myVariable = true       // NOT ALLOWED, myVariable can only be a string or a number

let myVariable2 : number | string | boolean;

myVariable2 = false     // ALLOWED
myVariable2 = 'hello world' //ALLOWED
myVariable2 = 27            // ALLOWED