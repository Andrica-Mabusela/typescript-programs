"use strict";
const me = {
    name: 'Tshepho',
    age: 24,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
(function (person) {
    console.log('Hello', person.name);
})(me);
