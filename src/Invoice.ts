import { HasFormatter } from "./HasFormatter";


export class Invoice implements HasFormatter{
    constructor(
        // Protected: This access modifier cannot be accessed outside of its containing class.
        // protected members can be accessed only within the class and by the instance of its sub/child class.
       
        readonly client: string, // The readonly modifiers must be initialized at their declaration or in the constructor
        // We provide the readonly access modifier to mark a class property as immutable.


        private details: string, // A private member cannot be accessed outside of its containing class.
        // private members can be accessed only within the class and even their sub-classes won't be allowed to use them.
        public amount: number,   // The default access modifier, accessible everywhere
    ){}
        // THIS METHOD HAS TO EXIST BECAUSE IT EXISTS IN HasFormatter interface and this class implements that interface
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}



const clientA: Invoice = new Invoice('Danny', 'Playing hockey for the new york rangers', 5000)
const clientB: Invoice = new Invoice('Ben', 'Bartending at Bar on B', 2000)

const docs: HasFormatter[] = []
docs.push(clientA)
docs.push(clientB)

docs.forEach(doc => {
    console.log(doc.format());
    
})
