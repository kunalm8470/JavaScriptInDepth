'use strict';

let obj1 = { name: 1 };
let obj2 = { name: 2 };
let obj3 = { name: 3 };
let obj4 = { name: 3 };

/*
    All the things as Set minus the below two gotchas
*/
const weakset = new WeakSet();

/*
    Gotcha 1: Cannot add any or all items in a weakset (Only objects it will allow)
    Gotcha 2: Cannot iterate on the WeakSet (Non enumerable) -> for..of loop
*/
weakset.add(obj1);
weakset.add(obj2);
weakset.add(obj3);
weakset.add(obj4);

/*
    Since the object has been added as a weak reference
    marking it null, removes the object from the weakset.
*/
obj2 = null;

const doesHaveDerefencedItem = weakset.has(obj2);

debugger;