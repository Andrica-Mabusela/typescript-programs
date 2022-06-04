// tuple data type
// A tuple is a fixed type array that has fixed number of items having fixed data types.


let tupA: [string, number, boolean] = ['data', 40, true]

// tupA[0] = 10      // DOES NOT WORK, DATA TYPE CANNOT BE CHANGED
// tupA[1] = 'hello'   // DOES NOT WORK, DATA TYPE CANNOT BE CHANGED

// tupA[4] = 'something'    // DOES NOT WORK, tuple has fixed length. BUT THE ARRAY METHOD push(), pop(), shift(), unshift(value) WORKS



console.log(tupA)




