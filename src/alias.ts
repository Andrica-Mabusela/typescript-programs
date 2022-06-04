// If we have a specific complicated type that we use in multiple places, we can create an alias for it.
// EXAMPLE:-
type stringOrNum = string | number

// EXAMPLE 2:-
type personType = {name: string, age: number}

// So whenever we want to use string | number as data type, we can just write stringOrNum instead.