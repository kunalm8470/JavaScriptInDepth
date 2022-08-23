'use strict';

/*
    number, String, Boolean, null and undefined (Basic primitive types)
*/

// Symbol primitive was released in ES6

// Symbols are unique identifier
// Gotcha: let id = new Symbol() -> WRONG
let id = Symbol();

/*
    Make hidden properties on the object
    which is non-enumerable

    non-enumerable -> It wont be iterated on Object.keys and
    for..in loop
*/
const obj = {};

obj[id] = 2;

let id2 = Symbol();

/*
    It will return false
    Because id and id2 are unique identifiers
*/
console.log(id === id2);

// Print the symbol
// Symbols override the toString() method
console.log(id);

/*
    We can add an optional description
    to indicate the use of that Symbol

    Description can be a string or a number
*/
const mySymbol = Symbol('Some description');
const mySymbol2 = Symbol(2);

console.log('Description of the symbol', mySymbol.description);


// To make global symbols
// Use the Symbol.prototype.for
// It will create in the global symbol registry (Javascript will maintain)
// Case 1) If its not there -> It will create
// Case 2) If its there -> It will fetch

const globalSymbol = Symbol.for('custom'); // Create
const globalSymbol2 = Symbol.for('custom'); // Fetch

/*
    If we know the key and want to fetch it
    from the global symbol registry

    we can use Symbol.prototype.keyFor
*/
const globalKey = Symbol.keyFor(globalSymbol);

debugger;