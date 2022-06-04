// generics in typescript allow us to create reusable blocks of code that can be used with different data types.

const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({name: 'yoshi', age: 40})
let docTwo = addUID('Hello') // We can pass in a string or any other data type because we have not specified what type of data should generic extend

console.log(docOne.name)
console.log(docTwo) 

// EXAMPLE 2: We extend the generic to only allow objects
const addUID2 = <T extends object>(obj: T) => {
    let uid = Math.floor( Math.random() * 100 )
    return {...obj, uid }
}

let docThree = addUID2({name: 'Mario', age:35})
let docFour = addUID2('Hello') // This will not work because the generic extends an object, which means only objects are allowed.

console.log(docThree.name)

// EXAMPLE 3: GIVE specific object to extend
const addUID3 = <T extends {name: string; age: number}>(obj: T) => {
    let uid = Math.floor( Math.random() * 100 )
    return {...obj, uid}
}

let docFive = addUID3({name: 'barry', age: 25, height: '6 feet 1 inch tall'}) // This Works

console.log(docFive.height)

let docSix = addUID3({height: '5 feet 10 inches tall'}) // This does not work because it does not have the properties specified in the generic


// USE GENERICS WITH INTERFACES
interface Resource<T> {
    uid: number;
    resouceName: string;
    data: T;
}

const docSeven: Resource<string> = {
    uid: 1,
    resouceName: 'job',
    data: 'Software Developer'
}


const docEight: Resource<object> = {
    uid: 2,
    resouceName: 'employee',
    data: {name: 'john', age: '40'}
}

const docNine: Resource<string[]> = {
    uid: 3,
    resouceName: 'hobbies',
    data: ['coding', 'watching movies', 'playing video games']
}


console.log(docSeven, docEight, docNine)