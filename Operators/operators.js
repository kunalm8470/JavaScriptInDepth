const falsyValue = undefined;
const falsyValue1 = null;
const falsyValue2 = NaN;
const falsyValue3 = 0;

if (!falsyValue) {
    console.log("Falsy 1");
}

if (!falsyValue1) {
    console.log("Falsy 2");
}

if (!falsyValue2) {
    console.log("Falsy 3");
}

if (!falsyValue3) {
    console.log("Falsy 4");
}

const truthyValue = 1;
const truthyValue1 = '1';
const truthyValue2 = 3.14159;
const truthyValue3 = +Infinity;
const truthyValue4 = -Infinity;

if (truthyValue) {
    console.log("Truthy");
}

function divideByZero() {
    console.log("Entered for checking");

    return 1 / 0;
}

if (1 === 1 && divideByZero()) {
    console.log("Short circuting and");
}

if (1 === 1 || divideByZero()) {
    console.log("Short circuting or");
}

const a = 0 || "Initialized a truthy value";
const a1 = null || "Initialized a truthy value";
const a2 = undefined || "Initialized a truthy value";
const a3 = (1 * NaN) || "Initialized a truthy value";

const obj = {
    a: {
        b: {
            d: 10
        }
    }
};

const a4 = (obj && obj.a && obj.a.b && obj.a.b.e) || "Initialized it to a truthy value";

const a5 = obj?.a?.b?.e;



function Shape(length, width) {
    this.length = length;
    this.width = width;
}

var square = new Shape(1, 1);

// square -> Shape.prototype -> Object.prototype -> null

console.log("Square is an instance of Shape or not ?", square instanceof Shape);
console.log("Square is an instance of String or not ?", square instanceof String);
console.log("Square is an instance of Number or not ?", square instanceof Number);
console.log("Square is an instance of Array or not ?", square instanceof Array);
console.log("Square is an instance of Object or not ?", square instanceof Object);

// IEEE 754 double precision ~ System.Double
// Number.prototype -> -2^53 to 2^53 - 1
console.log(typeof 1); // 'number'
console.log(typeof 3.14159); // 'number'
console.log(typeof 1111111111111111111111111111111111111111111n); // 'bigint'
// Any number suffixed with "n" is a BigInt

function sum(a, b) {
    return a + b;
}

console.log(typeof sum); // 'function'
console.log(typeof obj); // 'object'
console.log(typeof "1"); // 'string'
console.log(typeof square); // 'object'
console.log(typeof +Infinity); // 'number'
console.log(typeof -Infinity); // 'number'

console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' -> GOTCHA
console.log(typeof NaN); // 'number'

console.log(undefined === undefined);
console.log(null === null);

debugger;