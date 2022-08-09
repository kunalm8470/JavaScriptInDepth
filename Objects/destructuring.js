const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
};

// After ES6, preferred way
const { a, b, ...rest } = obj;

// _.pluck(["a", "b"]) -> Lodash/underscore.js

console.log(rest);

console.log(a);
console.log(b);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Destructuring works for arrays also
const [firstEle, secondEle, ,, fifthEle, sixthEle, ...remainingArrayEle] = arr;

debugger;