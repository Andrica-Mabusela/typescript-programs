"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(
    // Protected: This access modifier cannot be accessed outside of its containing class.
    // protected members can be accessed only within the class and by the instance of its sub/child class.
    client, // The readonly modifiers must be initialized at their declaration or in the constructor
    // We provide the readonly access modifier to mark a class property as immutable.
    details, // A private member cannot be accessed outside of its containing class.
    // private members can be accessed only within the class and even their sub-classes won't be allowed to use them.
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // THIS METHOD HAS TO EXIST BECAUSE IT EXISTS IN HasFormatter interface and this class implements that interface
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
const clientA = new Invoice('Danny', 'Playing hockey for the new york rangers', 5000);
const clientB = new Invoice('Ben', 'Bartending at Bar on B', 2000);
const docs = [];
docs.push(clientA);
docs.push(clientB);
docs.forEach(doc => {
    console.log(doc.format());
});
