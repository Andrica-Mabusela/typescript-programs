// IN This file, you will learn how to work with typescript and the DOM

// IF you are sure that your query of the DOM will return an element, you can use the non-null assertion operator !
// Example:-

const anchor = document.querySelector('a')!;   // You are saying that you are sure that the query will return an anchor tag
// The above works, BUT if we passed in a class or id as the argument of the querySelector() method, THEN typescript would not that the element is an anchor tag and it would not provide us with intellisense containing attributes of anchor tags
// The way we can solve this, is by using type casting

// EXample:-
const anchor2 = document.querySelector('.nav-link') as HTMLAnchorElement


console.log(anchor.href) // Now this will work
console.log( anchor2.href )


const addDetailsForm = document.querySelector('#add-details-form') as HTMLFormElement

addDetailsForm.addEventListener('submit', (event: Event) => {

    event.preventDefault()

    const name: string = (addDetailsForm.querySelector('#name') as HTMLInputElement).value
    const email: string = (addDetailsForm.querySelector('#email') as HTMLInputElement).value
    const age: number = (addDetailsForm.querySelector('#age') as HTMLInputElement).valueAsNumber

    console.log(name, email, age);
    
})





