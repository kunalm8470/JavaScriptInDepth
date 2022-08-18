'use strict';

/*
    Gotcha 1: In weakmap the key can only be a object
    Gotcha 2: Cannot iterate on the WeakMap
*/

const weakmap = new WeakMap();

let obj1 = { name: 1 };
let obj2 = { name: 2 };
let obj3 = { name: 3 };

weakmap.set(obj1, '1');
weakmap.set(obj2, '2');
weakmap.set(obj3, '3');

// Unreachable code for garbage collector
// And because objects are stored as weak reference
// the weakmap is also updated as a result.
obj2 = null;

debugger;
