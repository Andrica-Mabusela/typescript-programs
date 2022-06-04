// Enums
// A data type that allows us to  store a set of constants/keywords and associate them with numeric values


enum ResourceType { ACTOR, WRITER, DIRECTOR, PRODUCER }

interface Employee {
    name: string;
    age: number;
    role: ResourceType;
}

const employeeA : Employee = {
    name: 'David',
    age: 40,
    role: ResourceType.WRITER 
}

const employeeB : Employee = {
    name: 'Jim Parsons',
    age: 45,
    role: ResourceType.ACTOR
}


console.log(employeeA, employeeB)
