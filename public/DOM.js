"use strict";
// IN This file, you will learn how to work with typescript and the DOM
// IF you are sure that your query of the DOM will return an element, you can use the non-null assertion operator !
// Example:-
const anchor = document.querySelector('a'); // You are saying that you are sure that the query will return an anchor tag
// The above works, BUT if we passed in a class or id as the argument of the querySelector() method, THEN typescript would not that the element is an anchor tag and it would not provide us with intellisense containing attributes of anchor tags
// The way we can solve this, is by using type casting
// EXample:-
const anchor2 = document.querySelector('.nav-link');
console.log(anchor.href); // Now this will work
console.log(anchor2.href);
const addDetailsForm = document.querySelector('#add-details-form');
addDetailsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = addDetailsForm.querySelector('#name').value;
    const email = addDetailsForm.querySelector('#email').value;
    const age = addDetailsForm.querySelector('#age').valueAsNumber;
    console.log(name, email, age);
});
