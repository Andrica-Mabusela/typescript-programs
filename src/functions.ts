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

