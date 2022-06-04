"use strict";
// Enums
// A data type that allows us to  store a set of constants/keywords and associate them with numeric values
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["ACTOR"] = 0] = "ACTOR";
    ResourceType[ResourceType["WRITER"] = 1] = "WRITER";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["PRODUCER"] = 3] = "PRODUCER";
})(ResourceType || (ResourceType = {}));
const employeeA = {
    name: 'David',
    age: 40,
    role: ResourceType.WRITER
};
const employeeB = {
    name: 'Jim Parsons',
    age: 45,
    role: ResourceType.ACTOR
};
console.log(employeeA, employeeB);
