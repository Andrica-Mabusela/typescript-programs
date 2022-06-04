
// interfaces
// an interface is a structure that is enforced on objects. It is different from a class in that, it cannot be used to instantiate objects because it has no constructor
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Tshepho',
    age: 24,
    speak(text: string): void { // The left side of : is the function signature. The right side is the function body
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
        
    }

};

(function(person: IsPerson){
    console.log('Hello', person.name)
})(me)


