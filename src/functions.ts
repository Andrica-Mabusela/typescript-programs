// function data type uses capital F for function
let greet: Function;

greet = () => {
    console.log('Hello World')
}

// FUNCTION WITH OPTIONAL PARAMETERS

const add = (a: number, b: number, c?: number | string) => {

    return typeof c == 'number' ? a + b + c : 'The string is:' + (a + b) + c
}

// add(2,5)   THIS WILL NOT WORK IF c IS NOT OPTIONAL
console.log( add(2,5,4) )



// EXAMPLE 2:-
let sayHi : (a: string, b: string) => void

sayHi = (name: string, msg: string) => {
        console.log(`${name} says ${msg}`)
    }

sayHi('mike', 'Hello There')


// EXAMPLE 3:-

let calc : (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if( action == 'add' ) {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

console.log( calc(12,42, 'add') )



// EXAMPLE 4:-

let logDetails : (obj : {name: string, age: number}) => void;

type person = {name: string, age:number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

